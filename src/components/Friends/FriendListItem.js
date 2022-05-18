import Friends from './Friends';
import PropTypes from 'prop-types';
import s from './Friends.module.css';

export default function FriendListItem({ elements }) {
  return (
    <ul className={s.list}>
      {elements.map(element => (
        <Friends
          key={element.id}
          avatar={element.avatar}
          name={element.name}
          status={element.isOnline}
        />
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
