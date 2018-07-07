const express = require('express');
const { catchErrors } = require('../handlers/errorHandlers');
const router = express.Router();

// Import controllers
const addressController = require('../controllers/addressController');

// --- Basic Static Home Route ---
router.get('/', (req, res) => {
  res.send('Welcome to The Ambyint Full-stack Coding Challenge Api');
});

// --- Handle Address Routes ---
router.get('/api/v1/addresses', catchErrors(addressController.getAddresses));
router.post('/api/v1/addresses', addressController.uploadCSV, catchErrors(addressController.addAddresses));

// Export the router
module.exports = router;