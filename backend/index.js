const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
const app = express ();
const cors = require('cors');
const dbConnect = require('./config/database')



dbConnect();
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  }));
app.use(bodyParser.json());

// Use the contact route
app.use('/contact', contactRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
    res.send("This is HOMEPAGE");
  });