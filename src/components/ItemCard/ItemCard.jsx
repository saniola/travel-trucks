import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemHeader from '../ItemHeader/ItemHeader';
import TagsGroup from '../TagsGroup/TagsGroup';
import Button from '../Button/Button';
import styles from './ItemCard.module.scss';

const ItemCard = ({ item }) => {
  const { name, rating, reviews, location, price, description, gallery } = item;
  console.log(item);

  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();

  const handleToggleFavorite = () => {
    setFavorite((prev) => !prev);
  };

  const handleShowMoreClick = () => {
    console.log('Show more');
    navigate(`/catalog/${item.id}`);
  };

  const handleReviewsClick = () => {
    console.log('Show reviews');
    navigate(`/catalog/${item.id}/reviews`);
  };

  const tags = [
    { key: 'automatic', label: 'Automatic' },
    { key: 'AC', label: 'AC' },
    { key: 'petrol', label: 'Petrol' },
    { key: 'kitchen', label: 'Kitchen' },
    { key: 'radio', label: 'Radio' },
    { key: 'bathroom', label: 'Bathroom' },
    { key: '2 adults', label: '2 Adults' },
  ].filter((tag) => item[tag.key]);

  return (
    <div className={styles.component}>
      <img src={gallery[0]?.thumb || ''} alt={name} className={styles.image} />
      <div className={styles.content}>
        <ItemHeader
          title={name}
          rating={rating}
          reviewsCount={reviews.length}
          location={location}
          price={price}
          isFavorite={favorite}
          onToggleFavorite={handleToggleFavorite}
          pricePosition="right"
          onReviewsClick={handleReviewsClick}
        />
        <div className={styles.description}>{description}</div>
        <TagsGroup tags={tags} />
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
