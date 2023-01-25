// import { FriendCard, OnlineStatus, AvatarImg } from './FriendsList.styled';
import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem';

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendsListItem
            key={id}
            id={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></FriendsListItem>
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array,
};
export default FriendsList;
