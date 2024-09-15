import PropTypes from 'prop-types';
import styles from './Review.module.scss';

const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <span className={styles.initial}>{review.reviewer_name[0]}</span>
        </div>
        <div>
          <strong className={styles.name}>{review.reviewer_name}</strong>
          <div className={styles.rating}>
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={`icon icon-star ${styles.icon} ${
                  index < review.reviewer_rating ? styles.yellow : styles.gray
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <p className={styles.comment}>{review.comment}</p>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    reviewer_name: PropTypes.string.isRequired,
    reviewer_rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
