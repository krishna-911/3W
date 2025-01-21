import React, { useState, useEffect } from "react";
import { fetchUsers, claimPoints } from "../Api";

const UserClaim = ({ onClaim }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers().then((res) => setUsers(res.data));
  }, []);

  const handleClaim = async () => {
    if (selectedUser) {
      const { data } = await claimPoints(selectedUser);
      onClaim();
      alert(`You earned ${data.points} points!`);
    }
  };

  return (
    <div className="p-4">
      <select
        onChange={(e) => setSelectedUser(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleClaim}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Claim
      </button>
    </div>
  );
};

export default UserClaim;
