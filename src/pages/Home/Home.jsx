import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import Button from '../../components/Button/Button';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/catalog');
  };

  return (
    <div className={styles.component}>
      <div className="content">
        <h1 className={styles.title}>Campers of your dreams</h1>
        <h2 className={styles.subtitle}>
          You can find everything you want in our catalog
        </h2>
        <Button onClick={handleButtonClick}>View now</Button>
      </div>
    </div>
  );
};

export default Home;
