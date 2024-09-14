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
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputContainer}>
        {icon && (
          <span
            className={`${styles.icon} icon ${icon} ${
              inputValue && styles.iconActive
            }`}
          />
        )}
        {!withCalendar ? (
          <input
            type={type}
            placeholder={placeholder}
            className={styles.input}
            name={name}
            value={inputValue}
            onChange={handleInputChange}
          />
        ) : (
          <DatePicker
            selected={selectedDate}
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
};

export default Input;
