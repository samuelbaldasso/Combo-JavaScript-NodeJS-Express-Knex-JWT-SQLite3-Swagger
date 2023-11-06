exports.uploadImage = (req, res) => {
    if (req.file) {
        res.json({
            success: true,
            message: 'Image uploaded successfully!',
            data: {
                filename: req.file.filename,
                path: req.file.path
            }
        });
    } else {
        res.status(400).json({ success: false, message: 'No image file selected.' });
    }
};
