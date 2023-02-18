import { Profile } from "./profile/profile";
import user from '../user.json'; 
import { Statistics } from "./statistics/statistics";
import data from "../data.json"
import { Friendlist } from "./friends/friendlist";
import friends from "../friends.json";
import { TransactionHistory } from "./transactions/transactionhistory";
import transactions from "../transactions.json";
import { GlobalStyle } from "./globalstyle";
import { Layout } from "./layout";

export const App = () => {
  return (
   <Layout>
      <GlobalStyle/>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Friendlist friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Layout>
  );
};
