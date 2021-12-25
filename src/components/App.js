import { Container } from './App.styled';
import Profile from './Profile';
import user from '../json/user.json';

import Statistics from './Statistics';
import data from '../json/data.json';

import friends from '../json/friends.json';
import FriendList from './FriendList';

import TransactionHistory from './TransactionsHistory';
import transactions from '../json/transactions.json';
function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
