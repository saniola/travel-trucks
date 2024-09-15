import styles from './Tag.module.scss';
import PropType from 'prop-types';

const getIconClass = (text) => {
  switch (text.toLowerCase()) {
    case 'automatic':
      return 'icon-transmission';
    case 'ac':
      return 'icon-ac';
    case 'petrol':
      return 'icon-pump';
    case 'kitchen':
      return 'icon-cup';
    case 'radio':
      return 'icon-radio';
    case 'bathroom':
      return 'icon-droplet';
    case '2 adults':
      return 'icon-people';
    default:
      return '';
  }
};

const Tag = ({ text }) => {
  const iconClass = getIconClass(text);

  return (
    <div className={styles.tag}>
      <span className={`${styles.icon} icon ${iconClass}`} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

Tag.propTypes = {
  text: PropType.string.isRequired,
};

export default Tag;
