import { useState } from 'react';
import Input from '../Input/Input';
import FilterGroup from '../FilterGroup/FilterGroup';
import Button from '../Button/Button';
import { equipmentFilters, vehicleTypeFilters } from '../../data/filtersData';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const [location, setLocation] = useState('');
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

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    const selectedFilters = {
      location,
      equipment: filters.equipment
        .filter((item) => item.isChecked)
        .map((item) => item.name),
      vehicleType: filters.vehicleType
        .filter((item) => item.isChecked)
        .map((item) => item.name),
    };
    console.log('params:', selectedFilters);
  };

  return (
    <form className={styles.component}>
      <Input
        label="Location"
        placeholder="City"
        icon="icon-map"
        name="Location"
        value={location}
        onChange={handleLocationChange}
      />
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
      <Button
        type="button"
        onClick={handleSearch}
        className={styles.searchButton}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
