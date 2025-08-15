const EnquiryModel = require('../models/enquirymodel');

// Get all enquiries
const enquirylist = async (req, res) => {
    try {
        const enquiries = await EnquiryModel.find();
        res.status(200).json(enquiries);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch enquiries' });
    }
};

// Insert a new enquiry
const enquiryinsert = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const newEnquiry = new EnquiryModel({ name, email, phone, message });
        await newEnquiry.save();
        res.status(201).json(newEnquiry);
    } catch (err) {
        console.error('Insert error:', err); // <-- add this line
        res.status(400).json({ error: 'Failed to add enquiry', details: err.message });
    }
};

// Delete an enquiry by ID
const enquirydelete = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await EnquiryModel.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ error: 'Enquiry not found' });
        }
        res.status(200).json({ message: 'Enquiry deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete enquiry' });
    }
};

// Update an enquiry by ID
const enquiryupdate = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, message } = req.body;
        const updated = await EnquiryModel.findByIdAndUpdate(
            id,
            { name, email, phone, message },
            { new: true, runValidators: true }
        );
        if (!updated) {
            return res.status(404).json({ error: 'Enquiry not found' });
        }
        res.status(200).json(updated);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update enquiry', details: err.message });
    }
};

module.exports = {
    enquirylist,
    enquiryinsert,
    enquirydelete,
    enquiryupdate
};
// This controller can be used in the routes to handle enquiries