import React, { useState } from "react";
import UserClaim from "./Components/UserClaim";
import Leaderboard from "./Components/Leaderboard";

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
