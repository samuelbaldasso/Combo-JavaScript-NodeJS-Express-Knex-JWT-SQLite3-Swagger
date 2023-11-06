const express = require('express');
const uploadController = require('../controllers/uploadImagesController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb('Please upload only images.', false);
    }
};

const upload = multer({ storage: storage, fileFilter: imageFilter });

const router = express.Router();

router.post('/upload', upload.single('image'), uploadController.uploadImage);

module.exports = router;