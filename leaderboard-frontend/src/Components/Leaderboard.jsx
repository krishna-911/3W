import React, { useState, useEffect } from "react";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch user data (mock API call)
    setUsers([
      { id: 1, name: "Thadakapelli", points: 1514, prize: 15 },
      { id: 2, name: "Rajib", points: 1081, prize: 8 },
      { id: 3, name: "Augustine", points: 899, prize: 7 },
      { id: 4, name: "Maano", points: 718, prize: 6 },
      { id: 5, name: "Nitin", points: 716, prize: 5 },
      { id: 6, name: "Marselvam", points: 710, prize: 3 },
      { id: 7, name: "Chikaogwu", points: 684, prize: 3 },
    ]);
  }, []);

  const handleClaimPoints = () => {
    if (!selectedUser) return alert("Please select a user");
    setLoading(true);

    // Mock random point assignment
    const randomPoints = Math.floor(Math.random() * 10) + 1;
    setUsers((prevUsers) => {
      return prevUsers
        .map((user) => {
          if (user.id === selectedUser) {
            return { ...user, points: user.points + randomPoints };
          }
          return user;
        })
        .sort((a, b) => b.points - a.points);
    });
    setLoading(false);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">Leaderboard</h1>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <select
            className="p-2 border rounded-md"
            onChange={(e) => setSelectedUser(parseInt(e.target.value))}
            value={selectedUser || ""}
          >
            <option value="" disabled>
              Select a User
            </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleClaimPoints}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {loading ? "Claiming..." : "Claim Points"}
          </button>
        </div>

        <div className="text-sm text-gray-600">Ends in 07h 40m 30s</div>
      </div>

      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <div className="p-4 border-b text-center font-semibold bg-yellow-100">
          Daily Leaderboard
        </div>

        <div>
          {users.map((user, index) => (
            <div
              key={user.id}
              className={`flex items-center justify-between p-4 border-b ${
                index < 3 ? "bg-yellow-50" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">#{index + 1}</span>
                <span className="text-md font-medium">{user.name}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold">Prize: ₹{user.prize}</div>
                <div className="text-sm text-gray-600">{user.points} points</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;