import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchSingleItem } from './campersOps';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    favorites: [],
    loading: false,
    singleItem: null,
    total: 0,
    hasMore: false,
    page: 1,
    showLoadMore: false,
  },
  reducers: {
    addToFavorites(state, action) {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    deleteFromFavorites(state, action) {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
    resetCampers(state) {
      state.items = [];
      state.page = 1;
      state.total = 0;
      state.hasMore = false;
      state.showLoadMore = false; // Скидаємо showLoadMore
    },
    loadMoreCampers(state) {
      state.page += 1;
    },
    applyFilters(state, action) {
      const { filters, location } = action.payload;

      state.filteredItems = state.items.filter((item) => {
        const matchesLocation = location
          ? item.location.includes(location)
          : true;
        const matchesFilters = filters.every(
          (filter) => item[filter.label] === true
        );
        return matchesLocation && matchesFilters;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        const newItems = action.payload.items.filter(
          (newItem) => !state.items.some((item) => item.id === newItem.id)
        );
        state.items = [...state.items, ...newItems];
        state.total = action.payload.total;
        state.hasMore = state.items.length < state.total;
        state.showLoadMore = state.items.length < state.total; // Визначаємо, чи показувати кнопку
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        console.error('Failed to fetch campers:', action.payload);
      })
      .addCase(fetchSingleItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleItem.fulfilled, (state, action) => {
        state.loading = false;
        state.singleItem = action.payload;
      })
      .addCase(fetchSingleItem.rejected, (state, action) => {
        state.loading = false;
        console.error('Failed to fetch single item:', action.payload);
      });
  },
});

export const {
  addToFavorites,
  deleteFromFavorites,
  loadMoreCampers,
  resetCampers,
  applyFilters,
  яґ,
} = campersSlice.actions;

export const campersReducer = campersSlice.reducer;

export const selectCampers = (state) => state.campers.items;
export const selectFavorites = (state) => state.campers.favorites;
export const selectIsLoading = (state) => state.campers.loading;
export const selectSingleItem = (state) => state.campers.singleItem;
export const selectTotalCampers = (state) => state.campers.total;
export const selectHasMore = (state) => state.campers.hasMore;
export const selectPage = (state) => state.campers.page;
export const selectShowLoadMore = (state) => state.campers.showLoadMore; // Додаємо селектор для showLoadMore
