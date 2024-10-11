const express = require('express');
const router = express.Router();

// Default list in memory
let creatures = [
  { name: 'Dragon', description: 'A powerful, fire-breathing reptile' },
  { name: 'Phoenix', description: 'A bird that rises from its own ashes' },
  { name: 'Unicorn', description: 'Horse with a horn' },
  { name: 'Pegasus', description: 'A horse with wings' }
];

// GET route to display creatures
router.get('/', (req, res) => {
  res.render('index', { title: 'Mythical Creatures Encyclopedia', creatures });
});

// POST route to add a new creature
router.post('/creature', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).send('Name and description are required');
  }
  creatures.push({ name, description });
  res.redirect('/');
});

// DELETE route to remove a creature
router.post('/delete-creature', (req, res) => {
  const { name } = req.body;
  // Filter out the creature to be deleted
  creatures = creatures.filter(creature => creature.name !== name);
  res.redirect('/');
});

module.exports = router;


