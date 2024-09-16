import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/campersSlice';
import ItemList from '../../components/ItemList/ItemList';
import { useNavigate } from 'react-router-dom';
import styles from './Favorites.module.scss';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  const navigate = useNavigate();

  useEffect(() => {
    if (favorites.length === 0) {
      navigate('/catalog');
    }
  }, [favorites, navigate]);

  return (
    <div className="content">
      <h1 className={styles.title}>Your Favorites</h1>
      <ItemList items={favorites} favoritePage={true} />
    </div>
  );
};

export default Favorites;
