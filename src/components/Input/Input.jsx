import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Input = ({
  label,
  placeholder,
  icon,
  type = 'text',
  withCalendar = false,
  name,
  value,
  onChange,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleInputChange = (e) => {
    onChange(e);
  };

  const handleDateChange = (date) => {
    onChange({ target: { name, value: date } });
    setShowCalendar(false);
  };

  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputContainer}>
        {icon && (
          <span
            className={`${styles.icon} icon ${icon} ${
              value && styles.iconActive
            }`}
          />
        )}
        {!withCalendar ? (
          <input
            type={type}
            placeholder={placeholder}
            className={styles.input}
            name={name}
            value={value}
            onChange={handleInputChange}
          />
        ) : (
          <DatePicker
            selected={value}
            onChange={handleDateChange}
            placeholderText={placeholder}
            className={styles.input}
            onFocus={() => setShowCalendar(true)}
            onClickOutside={() => setShowCalendar(false)}
            open={showCalendar}
            dateFormat="MMMM d, yyyy"
          />
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  withCalendar: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onChange: PropTypes.func.isRequired,
};

export default Input;
