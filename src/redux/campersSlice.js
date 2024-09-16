import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchSingleItem } from './campersOps';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    favorites: [],
    loading: false,
    singleItem: null,
    itemsToShow: 4,
    filteredItems: [],
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
      state.itemsToShow = 4;
      state.filteredItems = [];
    },
    loadMoreCampers(state) {
      state.itemsToShow += 4;
    },
    filterCampers(state, action) {
      const filters = action.payload;
      const hasActiveFilters = Object.values(filters).some((value) => value);

      if (!hasActiveFilters) {
        state.filteredItems = state.items;
        return;
      }

      const normalizedFilters = {};
      for (const [key, value] of Object.entries(filters)) {
        if (typeof value === 'string') {
          normalizedFilters[key] = value.toLowerCase();
        } else {
          normalizedFilters[key] = value;
        }
      }

      state.filteredItems = state.items.filter((item) => {
        const matches = Object.entries(normalizedFilters).every(
          ([filterKey, filterValue]) => {
            if (filterKey === 'location' && !filterValue) return true;

            switch (filterKey) {
              case 'ac':
                return item.ac === filterValue;
              case 'automatic':
                return (
                  (item.transmission.toLowerCase() === 'automatic') ===
                  filterValue
                );
              case 'kitchen':
                return item.kitchen === filterValue;
              case 'tv':
                return item.tv === filterValue;
              case 'bathroom':
                return item.bathroom === filterValue;
              case 'van':
                return (
                  (item.form.toLowerCase() === 'paneltruck') === filterValue
                );
              case 'fully-integrated':
                return (
                  (item.form.toLowerCase() === 'fully integrated') ===
                  filterValue
                );
              case 'alcove':
                return (item.form.toLowerCase() === 'alcove') === filterValue;
              case 'location':
                return filterValue
                  ? item.location.toLowerCase().includes(filterValue)
                  : true;
              default:
                return true;
            }
          }
        );

        return matches;
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
        state.items = action.payload.items;
        state.filteredItems = action.payload.items;
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
  filterCampers,
} = campersSlice.actions;

export const campersReducer = campersSlice.reducer;

export const selectCampers = (state) =>
  state.campers.filteredItems.slice(0, state.campers.itemsToShow);
export const selectFavorites = (state) => state.campers.favorites;
export const selectIsLoading = (state) => state.campers.loading;
export const selectSingleItem = (state) => state.campers.singleItem;
export const selectShowLoadMore = (state) =>
  state.campers.itemsToShow < state.campers.filteredItems.length;
