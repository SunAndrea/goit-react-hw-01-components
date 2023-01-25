import { Table, TableItem } from './Transactions.styled';

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

export default Transactions;
