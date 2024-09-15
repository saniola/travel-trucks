import PropTypes from 'prop-types';
import Review from '../Review/Review';
import styles from './ReviewGroup.module.scss';

const ReviewGroup = ({ reviews }) => {
  return (
    <div className={styles.reviewGroup}>
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

ReviewGroup.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewer_name: PropTypes.string.isRequired,
      reviewer_rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReviewGroup;
