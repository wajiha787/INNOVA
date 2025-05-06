const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
mongoose.connect('YOUR_MONGODB_ATLAS_URI', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("DB error:", err));

// Team schema
const teamSchema = new mongoose.Schema({
  name: String,
  description: String,
  code: { type: String, unique: true },
  members: [String] // optional
});

const Team = mongoose.model('Team', teamSchema);

// GET all teams
app.get('/api/teams', async (req, res) => {
  const teams = await Team.find();
  res.json(teams);
});

// POST create a team
app.post('/api/teams', async (req, res) => {
  const { name, description, code } = req.body;

  if (!name || !description || !code)
    return res.status(400).json({ error: "Missing data" });

  try {
    const team = new Team({ name, description, code });
    await team.save();
    res.status(201).json({ message: "Team created", code });
  } catch (err) {
    res.status(500).json({ error: "Team code already exists or server error" });
  }
});

// POST join a team using code
app.post('/api/teams/join/:code', async (req, res) => {
  const team = await Team.findOne({ code: req.params.code });
  if (!team) return res.status(404).json({ error: "Invalid team code" });

  // Optional: Add user to team.members
  res.json({ message: "Joined team", name: team.name });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
