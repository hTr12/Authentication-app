const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

router.post('/login', async (req, res) => {
  
});

router.post('/register', async (req, res) => {
  
});

module.exports = router;
