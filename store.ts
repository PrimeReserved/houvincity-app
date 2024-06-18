// store.ts
import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "@/features/properties/propertiesSlice";
import blogsReducer from "@/features/blogs/blogsSlice";
import newsReducer from "@/features/news/newsSlice";
import paystackReducer from "@/features/paystack/paystackSlice";
import reviewsReducer from '@/features/reviews/reviewsSlice';
import eventReducer from '@/features/events/eventSlice';

export const store = configureStore({
    reducer: {
        properties: propertiesReducer,
        blogs: blogsReducer,
        news: newsReducer,
        paystack: paystackReducer,
        reviews: reviewsReducer,
        events: eventReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

