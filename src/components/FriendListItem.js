import PropTypes from 'prop-types';
import { FriendItem, Status, Name } from './FriendList.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <Status status={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="100" />
      <Name>{name}</Name>
    </FriendItem>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
