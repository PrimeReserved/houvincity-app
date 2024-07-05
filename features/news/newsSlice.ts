// features/news/newsSlice.ts
import { getNews } from '@/lib/action';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface News {
  id: string;
  title: string;
  content: string;
  source: string;
  date: string;
}

interface NewsState {
  news: News[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await getNews();
  // console.log(`Reducer news: ${response}}`)
  return response;
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<News[]>) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch news';
      });
  },
});

export default newsSlice.reducer;