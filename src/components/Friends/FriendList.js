import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import s from './Friends.module.css';

export default function FriendList({ elements }) {
  return (
    <ul className={s.list}>
      {elements.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          status={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
