import { Table, TableItem } from './Transactions.styled';
import PropTypes from 'prop-types';

const TransactionsHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <TableItem type={type} key={id}>
            <tr>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </TableItem>
        );
      })}
    </Table>
  );
};

TransactionsHistory.prototypes = {
  items: PropTypes.object,
};
export default TransactionsHistory;
