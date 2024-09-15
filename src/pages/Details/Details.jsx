import { useEffect, useState } from 'react';
import {
  useParams,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from 'react-router-dom';
import ItemHeader from '../../components/ItemHeader/ItemHeader';
import ClipLoader from 'react-spinners/ClipLoader';
import styles from './Details.module.scss';
import Features from '../../components/Features/Features';
import ReviewGroup from '../../components/ReviewGroup/ReviewGroup';

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();

  const handleToggleFavorite = () => {
    setFavorite((prev) => !prev);
  };

  const handleReviewsClick = () => {
    console.log('Show reviews');
    navigate(`/catalog/${item.id}/reviews`);
  };

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
        );
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Failed to fetch item:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  // Об'єднання обробки стану завантаження та відсутності даних
  if (loading || !item) {
    return (
      <div className={styles.loader}>
        {loading ? (
          <ClipLoader color="#36d7b7" size={50} />
        ) : (
          <p className={styles.notFound}>Item not found</p>
        )}
      </div>
    );
  }

  return (
    <div className="content">
      <div className={styles.details}>
        <ItemHeader
          id={item.id}
          title={item.name}
          rating={item.rating}
          reviewsCount={item.reviews.length}
          location={item.location}
          price={item.price}
          isFavorite={favorite}
          onToggleFavorite={handleToggleFavorite}
          pricePosition="bottom"
          onReviewsClick={handleReviewsClick}
        />

        <div className={styles.content}>
          <nav className={styles.nav}>
            <NavLink
              to=""
              end
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Features
            </NavLink>
            <NavLink
              to="reviews"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Reviews
            </NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<Features item={item} />} />
            <Route
              path="reviews"
              element={<ReviewGroup reviews={item.reviews} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Details;
