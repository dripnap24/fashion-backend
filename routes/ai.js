const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { preferences, weather } = req.body;

  if (!preferences || !weather) {
    return res.status(400).json({ error: "Preferences and weather data are required." });
  }

  // Mocked AI logic
  const suggestion = `Since you like ${preferences.style} style and it's ${weather.condition} outside, we suggest wearing a ${weather.temperature > 20 ? "light denim jacket" : "trendy trench coat"} with your favorite ${preferences.color} top.`;

  res.json({ suggestion });
});

module.exports = router;

