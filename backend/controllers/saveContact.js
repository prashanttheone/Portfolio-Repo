const ContactModel = require('../models/ContactModel');


const saveContact = async (req, res) => {
  try {
    const { user_name, user_email, message } = req.body;

    // Validate the data (add more validation as needed)
    if (!user_name || !user_email || !message) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    // Create a new ContactModel instance
    const newContact = new ContactModel({
      fullName: user_name,
      email: user_email,
      message,
    });

    // Save the data to the MongoDB database
    const savedContact = await newContact.save();
    res.status(201).json({
      message: 'Contact form submitted successfully',
      contact: savedContact,
    });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  saveContact,
};
