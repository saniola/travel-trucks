import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  filters: [
    {
      id: '1',
      label: 'AC',
      name: 'ac',
      isChecked: false,
      iconName: 'icon-ac',
      type: 'equipment',
    },
    {
      id: '2',
      label: 'Automatic',
      name: 'automatic',
      isChecked: false,
      iconName: 'icon-transmission',
      type: 'equipment',
    },
    {
      id: '3',
      label: 'Kitchen',
      name: 'kitchen',
      isChecked: false,
      iconName: 'icon-cup',
      type: 'equipment',
    },
    {
      id: '4',
      label: 'TV',
      name: 'tv',
      isChecked: false,
      iconName: 'icon-tv',
      type: 'equipment',
    },
    {
      id: '5',
      label: 'Bathroom',
      name: 'bathroom',
      isChecked: false,
      iconName: 'icon-droplet',
      type: 'equipment',
    },
    {
      id: '6',
      label: 'Van',
      name: 'van',
      isChecked: false,
      iconName: 'icon-grid-3',
      type: 'vehicle',
    },
    {
      id: '7',
      label: 'Fully Integrated',
      name: 'fully-integrated',
      isChecked: false,
      iconName: 'icon-grid-4',
      type: 'vehicle',
    },
    {
      id: '8',
      label: 'Alcove',
      name: 'alcove',
      isChecked: false,
      iconName: 'icon-grid-9',
      type: 'vehicle',
    },
  ],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeLocation(state, action) {
      state.location = action.payload;
    },
    toggleFilter(state, action) {
      const { id, group } = action.payload;

      if (group === 'vehicle') {
        state.filters = state.filters.map((filter) => {
          if (filter.type === 'vehicle' && filter.id !== id) {
            filter.isChecked = false;
          }
          return filter;
        });
      }

      const filter = state.filters.find((filter) => filter.id === id);
      if (filter) {
        filter.isChecked = !filter.isChecked;
      }
    },

    resetFilters(state) {
      state.location = '';
      state.filters.forEach((filter) => (filter.isChecked = false));
    },
  },
});

export const { changeLocation, toggleFilter, resetFilters } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectFilters = (state) => state.filters.filters;
export const selectLocation = (state) => state.filters.location;
export const selectActiveFilters = (state) =>
  state.filters.filters.filter((filter) => filter.isChecked);
