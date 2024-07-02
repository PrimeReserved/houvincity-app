// features/propertiesSlice.ts
import { Property } from "@/typings";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getProperties } from "@/lib/action";

interface PropertiesState {
    properties: Property[];
    searchQuery: string;
    propertyType: string;
    location: string;
    propertySize?: any;
    budget?: any;
    sortCriteria: string | string[];
    searchPerformed: boolean,
    searchResults: Property[],
    loading: boolean;
    error: string | null;
}

const initialState: PropertiesState = {
    properties: [],
    searchQuery: '',
    propertyType: '',
    location: '',
    propertySize: '',
    budget: '',
    sortCriteria: [],
    searchPerformed: false,
    searchResults: [],
    loading: false,
    error: null,
};

export const fetchProperties: any = createAsyncThunk('properties/fetchProperties', async () => {
    const data: any[] = await getProperties();
    return data;
  });

const propertiesSlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        setProperties(state, action: PayloadAction<Property[]>) {
            state.properties = action.payload;
        },
        setSearchQuery(state, action: PayloadAction<string>){
            state.searchQuery = action.payload;
        },
        setSearchResults(state, action: PayloadAction<Property[]>){
            state.searchResults = action.payload;
        },
        setSearchPerformed(state, action: PayloadAction<boolean>) {
            state.searchPerformed = action.payload;
        },
        setPropertyType(state, action: PayloadAction<string>){
            state.propertyType = action.payload;
        },
        setLocation(state, action: PayloadAction<string>) {
            state.location = action.payload;
        },
        setSize(state, action: PayloadAction<string>){
            state.propertySize = action.payload;
        },
        setBudget(state, action: PayloadAction<string>){
            state.budget = action.payload;
        },
        setSortCriteria(state, action: PayloadAction<string | string[]>){
            state.sortCriteria = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProperties.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchProperties.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.properties = action.payload;
          })
          .addCase(fetchProperties.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? 'Failed to fetch properties';
          });
      },
});

export const {
  setProperties,
  setSearchQuery,
  setPropertyType,
  setLocation,
  setSize,
  setBudget,
  setSortCriteria,
  setSearchPerformed,
  setSearchResults,
} = propertiesSlice.actions;

export default propertiesSlice.reducer;