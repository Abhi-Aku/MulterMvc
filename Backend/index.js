const express = require('express');
const cors = require('cors');
const path = require('path'); 
require('dotenv').config();
require('./db');

const app = express(); 
const port = process.env.PORT || 4000;

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Serve static files (uploads)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import and use student routes
const StudentRouter = require('./Router/Student');
app.use('/api', StudentRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
