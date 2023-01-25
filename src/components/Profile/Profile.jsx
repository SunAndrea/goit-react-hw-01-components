import PropTypes from 'prop-types';

import {
  ProfileWrapper,
  UserAvatar,
  DescriptionProfile,
  StatsItem,
  StatsList,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const userStats = [
    {
      title: 'Folowers',
      quantity: stats.followers,
    },
    {
      title: 'vievs',
      quantity: stats.views,
    },
    {
      title: 'likes',
      quantity: stats.likes,
    },
  ];
  return (
    <ProfileWrapper>
      <DescriptionProfile>
        <UserAvatar src={avatar} alt="User avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </DescriptionProfile>

      <StatsList>
        {userStats.map(element => (
          <StatsItem key={element.title}>
            <span className="label">{element.title}</span>
            <span className="quantity">{element.quantity}</span>
          </StatsItem>
        ))}
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.PropTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.string,
  avatar: PropTypes.string,
};
export default Profile;
