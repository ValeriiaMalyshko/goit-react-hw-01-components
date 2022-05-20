import Profile from './Profile/Profile';
import user from './Profile/user.json';
import StatisticsList from './Statistics/StatisticsList';
import data from './Statistics/data.json';
import FriendList from './Friends/FriendList';
import friends from './Friends/friends.json';
import TransactionHistory from './Transaction/TransactionHistory';
import transactions from './Transaction/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <StatisticsList title="Upload stats" stats={data} />

      <FriendList elements={friends} />

      <TransactionHistory elements={transactions} />
    </>
  );
};
