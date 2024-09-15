import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';
import styles from './TagsGroup.module.scss';

const TagsGroup = ({ tags }) => {
  return (
    <div className={styles.tagsGroup}>
      {tags.map((tag, index) => (
        <Tag key={index} text={tag.label} />
      ))}
    </div>
  );
};

TagsGroup.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TagsGroup;
