import PropTypes from 'prop-types';
import styles from './FilterItem.module.scss';

const FilterItem = ({ filter, onFilterChange }) => {
  const handleClick = () => {
    onFilterChange(filter.id, filter.type);
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
        name={filter.name}
        checked={filter.isChecked}
        onChange={handleClick}
      />
      <span className={styles.text}>{filter.label}</span>
    </div>
  );
};

FilterItem.propTypes = {
  filter: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    iconName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  isRadio: PropTypes.bool,
  name: PropTypes.string,
};

export default FilterItem;
