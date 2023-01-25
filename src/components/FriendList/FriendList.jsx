import { FriendCard, OnlineStatus, AvatarImg } from './FriendsList.styled';
import PropTypes from 'prop-types';

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendCard key={id} className="item">
            <OnlineStatus isOnline={isOnline} />
            <AvatarImg src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </FriendCard>
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array,
};
export default FriendsList;
