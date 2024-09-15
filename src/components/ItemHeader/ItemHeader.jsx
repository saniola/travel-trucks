import PropTypes from 'prop-types';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import styles from './ItemHeader.module.scss';

const ItemHeader = ({
  title,
  rating,
  reviewsCount,
  location,
  price,
  isFavorite,
  onToggleFavorite,
  pricePosition = 'bottom', // 'right' or 'bottom'
  onReviewsClick,
}) => {
  const getReviewText = (count) => (count === 1 ? 'review' : 'reviews');

  return (
    <div
      className={`${styles.component} ${
        pricePosition === 'right' && styles.right
      }`}
    >
      <div className={styles.topRow}>
        <h2 className={`${styles.title} ${styles.main}`}>{title}</h2>
        <div className={styles.info}>
          <button
            className={`${styles.rating} ${styles.infoItem}`}
            onClick={onReviewsClick}
          >
            <span className={`${styles.star} icon icon-star`}></span>
            {rating} ({reviewsCount} {getReviewText(reviewsCount)})
          </button>
          <span className={styles.infoItem}>
            <span className={`${styles.map} icon icon-map`}></span> {location}
          </span>
        </div>
      </div>
      <div className={styles.priceFavorite}>
        <span className={styles.main}>€{price}</span>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </div>
    </div>
  );
};

ItemHeader.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  pricePosition: PropTypes.oneOf(['right', 'bottom']),
  onReviewsClick: PropTypes.func.isRequired,
};

export default ItemHeader;
