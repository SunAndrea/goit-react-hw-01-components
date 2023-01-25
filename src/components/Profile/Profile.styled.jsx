import styled from "styled-components";

export const ProfileWrapper = styled.div`
  max-width: 320px;
  height: 350px;
  border: 1px solid gray;
  margin: auto;
`;

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const DescriptionProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;
export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0;
  justify-content: space-around;
`;
export const StatsItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
