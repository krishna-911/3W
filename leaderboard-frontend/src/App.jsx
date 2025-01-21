import React, { useState } from "react";
import UserClaim from "./components/UserClaim";
import Leaderboard from "./components/Leaderboard";

const App = () => {
  const [update, setUpdate] = useState(false);

  return (
    <div>
      <UserClaim onClaim={() => setUpdate(!update)} />
      <Leaderboard />
    </div>
  );
};

export default App;
