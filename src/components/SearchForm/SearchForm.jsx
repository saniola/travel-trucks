import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FilterGroup from '../FilterGroup/FilterGroup';
import Button from '../Button/Button';
import { equipmentFilters, vehicleTypeFilters } from '../../data/filtersData';
import styles from './SearchForm.module.scss';
import { useState } from 'react';

const SearchForm = () => {
  const [filters, setFilters] = useState({
    equipment: equipmentFilters,
    vehicleType: vehicleTypeFilters,
  });

  const handleFilterChange = (group, id) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [group]: prevFilters[group].map((filter) =>
        filter.id === id ? { ...filter, isChecked: !filter.isChecked } : filter
      ),
    }));
  };

  return (
    <Formik
      initialValues={{
        location: '',
      }}
      validationSchema={Yup.object({
        location: Yup.string()
          .min(2, 'The city must be at least 2 characters long')
          .required('This field is required'),
      })}
      onSubmit={(values) => {
        const selectedFilters = {
          location: values.location,
          equipment: filters.equipment
            .filter((item) => item.isChecked)
            .map((item) => item.name),
          vehicleType: filters.vehicleType
            .filter((item) => item.isChecked)
            .map((item) => item.name),
        };
        console.log('params:', selectedFilters);
      }}
    >
      {({ values }) => (
        <Form className={styles.component}>
          <div className="input-wrapper">
            <label className="label">Location</label>
            <div className="input-container">
              <span
                className={`icon icon-map ${values.location && 'icon-active'}`}
              />
              <Field
                type="text"
                name="location"
                placeholder="City"
                autoComplete="off"
              />
            </div>
            <ErrorMessage name="location" component="span" className="error" />
          </div>

          <div className={styles.filters}>
            <h3 className={styles.filtersTitle}>Filters</h3>
            <FilterGroup
              title="Vehicle equipment"
              filters={filters.equipment}
              onFilterChange={(id) => handleFilterChange('equipment', id)}
            />
            <FilterGroup
              title="Vehicle type"
              filters={filters.vehicleType}
              onFilterChange={(id) => handleFilterChange('vehicleType', id)}
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
