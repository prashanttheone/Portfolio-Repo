const express = require('express');
const router = express.Router();
const { saveContact } = require('../controllers/saveContact'); 


// POST route for form submission
router.post('/save', saveContact);

module.exports = router;
