import PropTypes from 'prop-types';
import styles from './FilterItem.module.scss';

const FilterItem = ({ filter, onFilterChange }) => {
  const handleClick = () => {
    onFilterChange(filter.id);
  };

  return (
    <div
      className={`${styles.component} ${filter.isChecked ? styles.active : ''}`}
      onClick={handleClick}
    >
      <span className={`${styles.icon} icon ${filter.iconName}`}></span>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={filter.isChecked}
        onChange={handleClick}
      />
      <span className={styles.text}>{filter.name}</span>
    </div>
  );
};

FilterItem.propTypes = {
  filter: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    iconName: PropTypes.string.isRequired,
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterItem;
