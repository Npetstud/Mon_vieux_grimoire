const sharp = require('sharp');
const fs = require("fs");


module.exports = (req, res, next) => {
    if (req.file){
        console.log(req.file)
        try {
            const newFilename = req.file.filename.replace(/\.[^/.]+$/, ".webp")
            sharp(req.file.path)
            .webp({quality: 50}).toFile(`images/${newFilename}`);
            fs.unlinkSync(req.file.path);
            req.file.path = `images/${newFilename}`;
            req.file.filename = newFilename
            req.file.mimetype = "image/webp"
            console.log(req.file)
        } catch (error) {
                return res.status(500).json({ message: 'Failed to compress image', error });
        }
    }
    next();
};

