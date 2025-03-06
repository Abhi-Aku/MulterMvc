const express = require('express');
const multer = require('multer');
const path = require('path'); 
const router = express.Router();
const StudentRouter = require('../Controller/Student');

// Multer configuration for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads')); 
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage });

// Student routes
router.post('/student', upload.single('image'), StudentRouter.StudentPost);
router.get('/student', StudentRouter.StudentGet);

module.exports = router;
