const express = require('express');
const router = express.Router();

let planner = [];

router.get('/', (req, res) => {
  res.json(planner);
});

router.post('/', (req, res) => {
  const outfitPlan = req.body;
  planner.push(outfitPlan);
  res.status(201).json({ message: 'Outfit planned!', outfitPlan });
});

module.exports = router;
