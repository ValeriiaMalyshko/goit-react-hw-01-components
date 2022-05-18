import PropTypes from 'prop-types';
import s from './Friends.module.css';

export default function Friends({ avatar, name, status }) {
  return (
    <li className={s.item}>
      <span className={status ? `${s.status}` : `${s.noActive}`}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool,
};
