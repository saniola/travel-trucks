import PropTypes from 'prop-types';
import FilterItem from '../FilterItem/FilterItem';
import styles from './FilterGroup.module.scss';

const FilterGroup = ({ title, filters, onFilterChange, isRadio, name }) => {
  return (
    <div className={styles.component}>
      <h3 className={styles.title}>{title}</h3>
      <span className="divider"></span>
      <div className={styles.items}>
        {filters.map((filter) => (
          <FilterItem
            key={filter.id}
            filter={filter}
            onFilterChange={onFilterChange}
            isRadio={isRadio}
            name={isRadio ? name : undefined}
          />
        ))}
      </div>
    </div>
  );
};

FilterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isChecked: PropTypes.bool.isRequired,
      iconName: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  isRadio: PropTypes.bool,
  name: PropTypes.string,
};

export default FilterGroup;
