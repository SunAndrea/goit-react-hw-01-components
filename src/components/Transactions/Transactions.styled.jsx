import styled from 'styled-components';

export const Table = styled.table`
  width: 800px;
  margin: auto;
  border: 1px solid;
`;

export const TableItem = styled.tbody`
  padding: 0 50px;
  text-align: center;

  background: ${({ type }) => {
    switch (type) {
      case 'invoice':
        return 'cornsilk';
      case 'payment':
        return 'bisque';

      case 'withdrawal':
        return 'azure';
    }
  }};
`;
