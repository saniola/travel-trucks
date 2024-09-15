import PropTypes from 'prop-types';
import TagsGroup from '../TagsGroup/TagsGroup';
import styles from './Features.module.scss';

const Features = ({ item }) => {
  return (
    <div className={styles.features}>
      <TagsGroup item={item} />

      <section className={styles.details}>
        <h3 className={styles.detailsTitle}>Vehicle details</h3>
        <div className="divider" />
        <div className={styles.detailsList}>
          <div className={styles.detailItem}>
            <span>Form</span>
            <span>{item.form}</span>
          </div>
          <div className={styles.detailItem}>
            <span>Length</span>
            <span>{item.length}</span>
          </div>
          <div className={styles.detailItem}>
            <span>Width</span>
            <span>{item.width}</span>
          </div>
          <div className={styles.detailItem}>
            <span>Height</span>
            <span>{item.height}</span>
          </div>
          <div className={styles.detailItem}>
            <span>Tank</span>
            <span>{item.tank}</span>
          </div>
          <div className={styles.detailItem}>
            <span>Consumption</span>
            <span>{item.consumption}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

Features.propTypes = {
  item: PropTypes.shape({
    form: PropTypes.string,
    length: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    tank: PropTypes.string,
    consumption: PropTypes.string,
    automatic: PropTypes.bool,
    AC: PropTypes.bool,
    petrol: PropTypes.bool,
    kitchen: PropTypes.bool,
    radio: PropTypes.bool,
    bathroom: PropTypes.bool,
    adults: PropTypes.bool,
  }).isRequired,
};

export default Features;
