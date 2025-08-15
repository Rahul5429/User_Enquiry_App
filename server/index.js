const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Enable CORS
app.use(cors());

// Import enquiry router
const enquiryRouter = require('./App/Routes/Web/EnquiryRoutes');

// Use enquiry routes
app.use('/api/enquiry', enquiryRouter);

// Connect to MongoDB and start server
mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
})
.catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
});