import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ text, onClick, variant = 'primary', validation = true }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${
        !validation ? styles.disabled : ''
      }`}
      onClick={onClick}
      disabled={!validation}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  validation: PropTypes.bool,
};

export default Button;
