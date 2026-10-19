# travel-trucks

A React SPA for browsing and booking campervans, with filtering, favorites, and a booking form.

## Features

- Campervan catalog with pagination fetched from a REST API
- Filter by location, vehicle type, and equipment
- Detail page with specifications, gallery, reviews, and booking form
- Favorites list persisted to local storage via Redux Persist
- Booking form with date picker and Formik/Yup validation

## Stack

- React 18 with React Router 6
- Redux Toolkit with redux-persist for favorites state
- Axios for API requests
- Formik + Yup for form validation
- SCSS modules for styling
- Vite build tool

## Project structure

```
src/
  components/     # reusable UI components
  pages/          # Catalog, Details, Favorites, Home, NotFound
  redux/          # store, campersSlice, filtersSlice, campersOps
  assets/         # icons and images
  styles/         # global styles
```

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173.

## Build

```bash
npm run build
```
