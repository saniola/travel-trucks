import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/home">
          <img src={logo} alt="TravelTrucks Logo" width="136" height="16" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <NavLink
          to="/home"
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
      </nav>
    </header>
  );
};

export default Header;
