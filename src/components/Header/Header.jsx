import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/campersSlice';

const Header = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="TravelTrucks Logo" width="136" height="16" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Catalog
        </NavLink>

        {favorites.length > 0 && (
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Favorites
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
