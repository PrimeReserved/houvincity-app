const fetchMock = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));
module.exports = fetchMock;