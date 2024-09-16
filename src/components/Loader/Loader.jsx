import ClipLoader from 'react-spinners/ClipLoader';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <ClipLoader color="var(--button)" size={50} />
    </div>
  );
};

export default Loader;
