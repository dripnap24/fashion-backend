const express = require('express');
const router = express.Router();

let calendarData = [];

router.post('/', (req, res) => {
  const { date, outfit } = req.body;

  if (!date || !outfit) {
    return res.status(400).json({ error: 'Date and outfit are required.' });
  }

  calendarData.push({ date, outfit });
  res.json({ message: 'Outfit planned successfully!', calendar: calendarData });
});

router.get('/', (req, res) => {
  res.json({ calendar: calendarData });
});

module.exports = router;


