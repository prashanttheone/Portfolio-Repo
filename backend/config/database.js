const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://praytoprashant:QAp2ZtnbjFDJ9vY1@cluster0.jleg6fn.mongodb.net/dbb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected successfully");
  } catch (error) {
    console.error('DB connection error:', error.message);
    process.exit(1); // Exit the application only on database connection error
  }
};

module.exports = dbConnect;
