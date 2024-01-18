const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected successfully"))
  .catch((error) => {
    console.error('DB connection error:', error.message);
    process.exit(1); // Move this line inside the catch block
  });
};

module.exports = dbConnect;
