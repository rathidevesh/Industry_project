const express = require('express');
const user = express();
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

user.use(bodyParser.urlencoded({ extended: true }));
user.use(express.static(path.resolve(__dirname, 'backpublic')));

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

const userController = require('../controllers/userControllers');

// Handle file upload
user.post('/importuser', upload.single('file'), (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ success: false, msg: "No file uploaded" });
    }
    next(); // Pass control to the next middleware
}, userController.importUser);

module.exports = user;


