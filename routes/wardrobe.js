const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log('Received POST request to /api/wardrobe'); // debug
  console.log('Body:', req.body); // debug

  const { name, type, color } = req.body;

  if (!name || !type || !color) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  return res.status(200).json({
    message: 'Wardrobe item added successfully!',
    item: { name, type, color }
  });
});

module.exports = router;






