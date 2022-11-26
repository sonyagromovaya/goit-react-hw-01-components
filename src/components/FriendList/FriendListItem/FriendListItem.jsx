import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  // const statusClass = isOnline ? s.active : s.notActive;
// return (
//         <>
//               <span
//         className={s.status}
//         style={{ backgroundColor: isOnline ? 'green' : 'red' }}
//       >{ isOnline }</span>
//             <img className={s.avatar} src={ avatar } alt="User avatar" width="48" />
//             <p className={s.name}>{ name }</p>
//         </> 
//     );
// }
   return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
