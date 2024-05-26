import { getPost, getNews, getProperty, getTestimony, subscribe } from "@/lib/action";

jest.mock('node-fetch'); // Mock the fetch function

describe('API actions', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mocks before each test
  });

  describe('getPost', () => {
    it('fetches posts successfully', async () => {
      const mockResponse = { data: 'posts' };
      const mockFetch = jest.fn().mockResolvedValue({ json: () => Promise.resolve(mockResponse) });
      global.fetch = mockFetch; // Mock fetch globally

      const response: any = await getPost();
      expect(mockFetch).toHaveBeenCalledWith(`${process.env.BLOG_API_URI}`);
      expect(await response.json()).toEqual(mockResponse); 
    });

    it('throws error on fetch failure', async () => {
      const mockError = new Error('Network error');
      const mockFetch = jest.fn().mockRejectedValue(mockError);
      global.fetch = mockFetch;

      await expect(getPost()).rejects.toThrow(mockError);
      expect(console.error).toHaveBeenCalledWith('An Error occurred while fetching properties:', mockError);
    });
  });

  // Similar tests for getNews, getProperty, and getTestimony

  describe('subscribe', () => {
    it('subscribes successfully', async () => {
      const mockResponse = { message: 'Success' };
      const mockFetch = jest.fn().mockResolvedValue({ json: () => Promise.resolve(mockResponse) });
      global.fetch = mockFetch;

      const email = 'test@example.com';
      const response: any = await subscribe(email);
      expect(mockFetch).toHaveBeenCalledWith(`${process.env.SUBSCRIBE_API_URI}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      expect(await response.json()).toEqual(mockResponse); 
    });

    it('throws error on subscription failure', async () => {
      const mockError = new Error('Subscription failed');
      const mockFetch = jest.fn().mockRejectedValue(mockError);
      global.fetch = mockFetch;

      const email = 'test@example.com';
      await expect(subscribe(email)).rejects.toThrow(mockError);
      expect(console.error).toHaveBeenCalledWith('An Error occurred while subscribing:', mockError);
    });

    it('sends correct request body', async () => {
      const mockFetch = jest.fn().mockResolvedValue({ json: () => Promise.resolve({}) });
      global.fetch = mockFetch;

      const email = 'test@example.com';
      await subscribe(email);
      expect(mockFetch).toHaveBeenCalledWith(expect.any(String), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    });
  });
});
