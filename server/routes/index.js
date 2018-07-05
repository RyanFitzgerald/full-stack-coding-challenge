// Import required packages
const express = require('express');
const { catchErrors } = require('../handlers/errorHandlers');
const router = express.Router();

// --- Basic Static Home Route ---
router.get('/', (req, res) => {
  res.send('Welcome to The Ambyint Full-stack Coding Challenge Api');
});

// Export the router
module.exports = router;