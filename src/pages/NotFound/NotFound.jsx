import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.component}>
      <h1 className={styles.header}>404</h1>

      <h2 className={styles.subheader}>Page not found</h2>
    </div>
  );
};

export default NotFound;
