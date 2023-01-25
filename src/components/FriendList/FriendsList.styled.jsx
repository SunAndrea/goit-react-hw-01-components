import styled from 'styled-components';

export const FriendCard = styled.li`
  list-style: none;
  position: relative;
  background: cornsilk;
  max-width: 320px;
`;

export const OnlineStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const AvatarImg = styled.img`
  padding-left: 20px;
`;
