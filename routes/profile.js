const express = require('express');
const router = express.Router();

let userProfile = {
  name: "Fashionista",
  bio: "I love mixing trends with classics!",
  streak: 12,
  achievements: ["First Outfit", "7 Day Streak"]
};

// GET profile
router.get('/', (req, res) => {
  res.json(userProfile);
});

// POST update profile
router.post('/', (req, res) => {
  const { name, bio } = req.body;
  if (!name || !bio) {
    return res.status(400).json({ error: 'Name and bio are required.' });
  }

  userProfile.name = name;
  userProfile.bio = bio;

  res.json({ message: "Profile updated successfully!", profile: userProfile });
});

module.exports = router;

