import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ItemHeader from '../ItemHeader/ItemHeader';
import TagsGroup from '../TagsGroup/TagsGroup';
import Button from '../Button/Button';
import styles from './ItemCard.module.scss';

const ItemCard = ({ item }) => {
  const { name, rating, reviews, location, price, description, gallery, id } =
    item;
  const navigate = useNavigate();

  const handleShowMoreClick = () => {
    navigate(`/catalog/${id}`);
  };

  const handleReviewsClick = () => {
    navigate(`/catalog/${id}/reviews`);
  };

  return (
    <div className={styles.component}>
      <img src={gallery[0]?.thumb || ''} alt={name} className="thumbnail" />
      <div className={styles.content}>
        <ItemHeader
          id={id}
          title={name}
          rating={rating}
          reviewsCount={reviews.length}
          location={location}
          price={price}
          pricePosition="right"
          onReviewsClick={handleReviewsClick}
        />
        <div className={styles.description}>{description}</div>
        <TagsGroup item={item} />
        <div className={styles.button}>
          <Button variant="primary" onClick={handleShowMoreClick}>
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        thumb: PropTypes.string,
        original: PropTypes.string,
      })
    ).isRequired,
    isFavorite: PropTypes.bool,
  }).isRequired,
};

export default ItemCard;
