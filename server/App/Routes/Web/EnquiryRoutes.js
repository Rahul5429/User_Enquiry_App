const express = require('express');
const router = express.Router();

const EnquiryController = require('../../controller/Enquirycontroller');

// Get all enquiries
router.get('/list', EnquiryController.enquirylist);

// Insert a new enquiry
router.post('/insert', EnquiryController.enquiryinsert);

// Delete an enquiry by ID
router.delete('/delete/:id', EnquiryController.enquirydelete);

// Update an enquiry by ID
router.put('/update/:id', EnquiryController.enquiryupdate);

module.exports = router;
// This router can be used in the main application to handle enquiry-related requests
// It defines routes for listing, inserting, deleting, and updating enquiries
