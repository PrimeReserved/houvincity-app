// features/properties/selectors.ts
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Property } from '@/typings';

const selectProperties = (state: RootState) => state.properties.properties;
const selectSearchQuery = (state: RootState) => state.properties.searchQuery;
const selectPropertyType = (state: RootState) => state.properties.propertyType;
const selectLocation = (state: RootState) => state.properties.location;
const selectSize = (state: RootState) => state.properties.propertySize;
const selectBudget = (state: RootState) => state.properties.budget;
const selectSortCriteria = (state: RootState) => state.properties.sortCriteria;

export const selectFilteredAndSortedProperties = createSelector(
  [
    selectProperties,
    selectSearchQuery,
    selectPropertyType,
    selectLocation,
    selectSize,
    selectBudget,
    selectSortCriteria,
  ],
  (properties, searchQuery, propertyType, location, size, budget, sortCriteria) => {
    let filteredProperties = properties;

    if (searchQuery) {
      filteredProperties = filteredProperties.filter((property: Property) =>
        property.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (propertyType) {
      filteredProperties = filteredProperties.filter((property) => property.propertyType === propertyType);
    }

    if (location) {
      filteredProperties = filteredProperties.filter((property) =>
        property.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (size) {
      filteredProperties = filteredProperties.filter((property) => property.propertySize && property.propertySize >= size);
    }

    if (budget) {
      filteredProperties = filteredProperties.filter((property) => {
        if (property.budget !== undefined) {
          return property.budget <= budget;
        }
        return false;
      });
    }

    if (sortCriteria) {
      filteredProperties = filteredProperties.sort((a: any, b: any) => {
        if (sortCriteria === 'priceAsc') {
          return a.price - b.price;
        } else if (sortCriteria === 'priceDesc') {
          return b.price - a.price;
        }
        return 0;
      });
    }

    return filteredProperties;
  }
);
