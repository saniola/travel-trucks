import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectIsLoading,
  loadMoreCampers,
  selectShowLoadMore,
  selectFavorites,
} from '../../redux/campersSlice';
import { fetchCampers } from '../../redux/campersOps';
import ItemCard from '../ItemCard/ItemCard';
import Button from '../Button/Button';
import styles from './ItemList.module.scss';
import Loader from '../Loader/Loader';

const ItemList = ({ favoritePage }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectCampers);
  const loading = useSelector(selectIsLoading);
  const showLoadMore = useSelector(selectShowLoadMore);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleShowMore = () => {
    dispatch(loadMoreCampers());
  };

  const arr = favoritePage ? favorites : items;

  return (
    <div className={styles.component}>
      {arr.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
      {loading && <Loader />}
      {!loading && showLoadMore && !favoritePage && (
        <div className={styles.button}>
          <Button variant="secondary" onClick={handleShowMore}>
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};

ItemList.propTypes = {
  favoritePage: PropTypes.bool,
};

export default ItemList;
