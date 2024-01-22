const express = require('express');
const router = express.Router();

router.get('/dummy', (req, res) => {
  res.json({ message: 'This is a dummy page!' });
});

module.exports = router;
