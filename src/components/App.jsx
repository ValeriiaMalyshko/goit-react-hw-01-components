import Profile from "./Profile/Profile";
import user from "./Profile/user.json";
import StatisticsList from "./Statistics/StatisticsList";
import data from "./Statistics/data.json";
import FriendListItem from "./Friends/FriendListItem";
import friends from "./Friends/friends.json";
import TransactionHistory from "./Transaction/TransactionHistory";
import transactions from "./Transaction/transactions.json";

export const App = () => {
  return (
    <>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />

      <StatisticsList elements={data}/>

      <FriendListItem elements={friends}/>

      <TransactionHistory elements={transactions}/>

      </>
  );
};
