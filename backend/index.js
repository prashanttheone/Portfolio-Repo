const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
const app = express();
const cors = require('cors');
const dbConnect = require('./config/database');

// Enable CORS for all origins during development
app.use(cors({
  origin: "*",
  credentials: true
}));

// Parse JSON requests using built-in Express middleware
app.use(express.json());

// Use the contact route
app.use('/contact', contactRoutes);

// Generic error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000 ;
dbConnect(); // Connect to the database
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Default route
app.get("/", (req, res) => {
  res.send("This is HOMEPAGE");
});
