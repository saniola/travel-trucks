import { useParams, useLocation } from 'react-router-dom';
import styles from './Details.module.scss';

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  console.log('queryParams:', queryParams);
  const isReviewsTab = queryParams.get('tab') === 'reviews';
  console.log('isReviewsTab:', isReviewsTab);

  return (
    <div className={`${styles.details} content`}>
      <h1>Details Page for Item {id}</h1>
    </div>
  );
};

export default Details;
