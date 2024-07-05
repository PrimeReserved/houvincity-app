// features/paystack/paystackSlice.ts
import { getPosts } from '@/lib/action';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface PaystackData {
  transactionId: string;
  amount: number;
  status: string;
}

interface PaystackState {
  data: PaystackData[];
  loading: boolean;
  error: string | null;
}

const initialState: PaystackState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchPaystackData = createAsyncThunk('paystack/fetchPaystackData', async () => {
    const data: any[] = await getPosts()
    console.log(`Reducer posts: ${data}}`)
});

const paystackSlice = createSlice({
  name: 'paystack',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPaystackData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
    //   .addCase(fetchPaystackData.fulfilled, (state, action: PayloadAction<PaystackData[]>) => {
    //     state.loading = false;
    //     state.data = action.payload;
    //   })
      .addCase(fetchPaystackData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch Paystack data';
      });
  },
});

export default paystackSlice.reducer;
