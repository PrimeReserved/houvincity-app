import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { UpcomingEvent } from '@/typings';
import { getEvents } from '@/lib/action';

interface EventState {
  events: UpcomingEvent[];
  loading: boolean;
  error: string | null;
  reminders: { [key: string]: boolean };
}

const initialState: EventState = {
  events: [],
  loading: false,
  error: null,
  reminders: {},
};

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await getEvents();
  return response;
});

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setReminders: (state, action: PayloadAction<{ [key: string]: boolean }>) => {
      state.reminders = action.payload;
    },
    toggleReminder: (state, action: PayloadAction<string>) => {
      state.reminders[action.payload] = !state.reminders[action.payload];
      localStorage.setItem("reminders", JSON.stringify(state.reminders));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action: PayloadAction<UpcomingEvent[]>) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch events';
      });
  },
});

export const { setReminders, toggleReminder } = eventSlice.actions;
export default eventSlice.reducer;
