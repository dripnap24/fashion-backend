const express = require('express');
const router = express.Router();

let challenges = [
  { id: 1, title: "Summer Fashion", description: "Cool and breezy looks" },
  { id: 2, title: "Winter Wonderland", description: "Warm but stylish!" },
];

router.get('/', (req, res) => {
  res.json(challenges);
});

module.exports = router;
