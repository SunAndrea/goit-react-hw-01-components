import { FriendCard, OnlineStatus, AvatarImg } from "./FriendsList.styled";
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

export default FriendsList;
