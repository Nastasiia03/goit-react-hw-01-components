import { Profile } from "./profile";
import user from '../user.json'; 
import { Statistics } from "./statistics";
import data from "../data.json"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
