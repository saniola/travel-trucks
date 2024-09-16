import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  validation = true,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${
        !validation ? styles.disabled : ''
      }`}
      onClick={onClick}
      disabled={!validation}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  validation: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
