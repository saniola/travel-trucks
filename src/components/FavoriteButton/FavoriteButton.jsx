import PropTypes from 'prop-types';
import styles from './FavoriteButton.module.scss';

const FavoriteButton = ({ isFavorite, onToggleFavorite }) => {
  return (
    <button
      className={`${styles.button} ${isFavorite ? styles.favorited : ''}`}
      onClick={onToggleFavorite}
    >
      <span className="icon icon-heart" />
    </button>
  );
};

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default FavoriteButton;
