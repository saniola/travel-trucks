import ItemList from '../../components/ItemList/ItemList';
import SearchForm from '../../components/SearchForm/SearchForm';
import styles from './Catalog.module.scss';

const Catalog = () => {
  return (
    <div className="content">
      <div className={styles.catalog}>
        <SearchForm />
        <ItemList />
      </div>
    </div>
  );
};

export default Catalog;
