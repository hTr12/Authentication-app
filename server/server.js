// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const dummyRoutes = require('./routes/dummy');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

// Authentication routes
app.use('/auth', authRoutes);

// Dummy page route
app.use('/api', dummyRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
