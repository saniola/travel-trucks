import { useEffect } from 'react';
import {
  useParams,
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import ItemHeader from '../../components/ItemHeader/ItemHeader';
import Loader from '../../components/Loader/Loader';
import Features from '../../components/Features/Features';
import ReviewGroup from '../../components/ReviewGroup/ReviewGroup';
import ModalImage from 'react-modal-image';
import styles from './Details.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectSingleItem, selectIsLoading } from '../../redux/campersSlice';
import { fetchSingleItem } from '../../redux/campersOps';
import BookingForm from '../../components/BookingForm/BookingForm';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector(selectSingleItem);
  const loading = useSelector(selectIsLoading);
  const navigate = useNavigate();

  const handleReviewsClick = () => {
    if (!item) return;
    navigate(`/catalog/${item.id}/reviews`);
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleItem(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <Loader />;
  }

  if (!item) {
    return <p>Item not found</p>;
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
          pricePosition="bottom"
          onReviewsClick={handleReviewsClick}
        />

        <div className={styles.gallery}>
          {item.gallery.map((img, index) => (
            <ModalImage
              key={index}
              small={img.thumb}
              large={img.original}
              alt={item.name}
              className="thumbnail"
            />
          ))}
        </div>

        <p className={styles.description}>{item.description}</p>
      </div>

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

        <div className={styles.bottom}>
          <Routes>
            <Route path="/" element={<Features item={item} />} />
            <Route
              path="reviews"
              element={<ReviewGroup reviews={item.reviews} />}
            />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>

          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default Details;
