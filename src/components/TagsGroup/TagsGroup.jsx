import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';
import styles from './TagsGroup.module.scss';

const TagsGroup = ({ item }) => {
  const tags = [
    { key: 'automatic', label: 'Automatic' },
    { key: 'AC', label: 'AC' },
    { key: 'petrol', label: 'Petrol' },
    { key: 'kitchen', label: 'Kitchen' },
    { key: 'radio', label: 'Radio' },
    { key: 'bathroom', label: 'Bathroom' },
    { key: '2 adults', label: '2 Adults' },
  ].filter((tag) => item[tag.key]);

  return (
    <div className={styles.tagsGroup}>
      {tags.map((tag, index) => (
        <Tag key={index} text={tag.label} />
      ))}
    </div>
  );
};

TagsGroup.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TagsGroup;
