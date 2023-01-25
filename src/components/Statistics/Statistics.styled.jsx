import styled from "styled-components";

export const StatsSection = styled.section`
  max-width: 480px;
  margin: auto;
  background: gainsboro;
`;
export const StatsTitle = styled.h2`
  text-align: center;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  padding-left: 0;
`;

export const StatsItem = styled.li`
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px 5px 10px;
  background: ${({ label }) => {
    switch (label) {
      case "docx":
        return "blue";
      case "pdf":
        return "purple";
      case "mp3":
        return "red";
      case "psd":
        return "deepskyblue";
      default:
        return "blue";
    }
  }};
`;
