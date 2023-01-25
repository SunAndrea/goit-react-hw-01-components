import { FriendCard, OnlineStatus, AvatarImg } from './FriendsList.styled';
import PropTypes from 'prop-types';

export const FriendsListItem = ({ id, isOnline, avatar, name }) => {
  console.log(id);
  return (
    <FriendCard key={id}>
      <OnlineStatus isOnline={isOnline} />
      <AvatarImg src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendCard>
  );
};
FriendsListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendsListItem;
