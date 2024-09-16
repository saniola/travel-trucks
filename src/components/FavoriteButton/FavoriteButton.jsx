import PropTypes from 'prop-types';

import styles from './FavoriteButton.module.scss';

const FavoriteButton = ({ isFavorite, handleToggleFavorite }) => {
  return (
    <button
      className={`${styles.button} ${isFavorite ? styles.favorited : ''}`}
      onClick={handleToggleFavorite}
    >
      <span className="icon icon-heart" />
    </button>
  );
};

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  handleToggleFavorite: PropTypes.func.isRequired,
};

export default FavoriteButton;
