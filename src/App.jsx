import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendsList from 'components/FriendList/FriendList';
import TransactionsHistory from 'components/Transactions/Transactions';

import user from './props/user.json';
import data from './props/data.json';
import friends from './props/friends.json';
import transactions from './props/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionsHistory items={transactions} />
    </div>
  );
}

export default App;
