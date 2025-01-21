import {User} from "../models/User.js";

// Seed initial users
export const seedUsers = async (req, res) => {
  const sampleUsers = ["Rahul", "Kamal", "Sanaki", "Rajiv", "Arjun", "Nitin", "Maano", "Marselvam", "Chikaogwu", "Thadaka"];
  const existingUsers = await User.find();
  if (existingUsers.length === 0) {
    const users = sampleUsers.map((name) => ({ name }));
    await User.insertMany(users);
    return res.status(201).send("Users seeded");
  }
  res.status(200).send("Users already exist");
};

// Get all users with rankings
export const getUsers = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  users.forEach((user, index) => (user.rank = index + 1));
  res.json(users);
};

// Claim random points
export const claimPoints = async (req, res) => {
  const { userId } = req.body;
  const randomPoints = Math.floor(Math.random() * 10) + 1;
  const user = await User.findById(userId);

  if (user) {
    user.totalPoints += randomPoints;
    user.history.push({ points: randomPoints });
    await user.save();
    res.json({ message: "Points claimed", points: randomPoints });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
