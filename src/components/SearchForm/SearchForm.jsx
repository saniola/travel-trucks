import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FilterGroup from '../FilterGroup/FilterGroup';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeLocation,
  toggleFilter,
  selectFilters,
  selectLocation,
} from '../../redux/filtersSlice';
import { resetCampers, filterCampers } from '../../redux/campersSlice';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const location = useSelector(selectLocation);

  const handleFilterChange = (id, group) => {
    dispatch(toggleFilter({ id, group }));
  };

  const handleLocationChange = (event) => {
    dispatch(changeLocation(event.target.value));
  };

  const handleSubmit = () => {
    const filterParams = filters
      .filter((filter) => filter.isChecked)
      .reduce((acc, filter) => {
        acc[filter.name] = true;
        return acc;
      }, {});

    console.log(filterParams);
    console.log(location);

    dispatch(
      filterCampers({
        location,
        ...filterParams,
      })
    );
  };

  return (
    <Formik
      initialValues={{
        location: location || '',
      }}
      validationSchema={Yup.object({
        location: Yup.string().min(
          2,
          'The city must be at least 2 characters long'
        ),
      })}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className={styles.component}>
          <div className="input-wrapper">
            <label className="label">Location</label>
            <div className="input-container">
              <span
                className={`input-icon icon-map ${
                  values.location ? 'icon-active' : ''
                }`}
              />
              <Field
                type="text"
                name="location"
                placeholder="City"
                autoComplete="off"
                value={location}
                onChange={handleLocationChange}
              />
            </div>
            <ErrorMessage name="location" component="span" className="error" />
          </div>

          <div className={styles.filters}>
            <h3 className={styles.filtersTitle}>Filters</h3>
            <FilterGroup
              title="Vehicle Equipment"
              filters={filters.filter((filter) => filter.type === 'equipment')}
              onFilterChange={handleFilterChange}
            />
            <FilterGroup
              title="Vehicle Type"
              filters={filters.filter((filter) => filter.type === 'vehicle')}
              onFilterChange={(id) => handleFilterChange(id, 'vehicle')}
            />
          </div>

          <Button type="submit" className={styles.searchButton}>
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
