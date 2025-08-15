const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true // <-- no unique: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

const EnquiryModel = mongoose.model('enquiry', enquirySchema);

module.exports = EnquiryModel;
// This model can be used in other parts of the application to interact with the 'enquiries' collection