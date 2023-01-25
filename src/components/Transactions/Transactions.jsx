import { Table, TableItem } from './Transactions.styled';
import PropTypes from 'prop-types';

const Transactions = ({ items }) => {
  console.log(items);
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

Transactions.Prototypes = {
  items: PropTypes.object,
};
export default Transactions;
