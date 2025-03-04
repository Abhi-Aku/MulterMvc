const Image = require("../Models/Image");

module.exports.ImagePost = async (req, res) => {
    try {
        const { name } = req.body;
        const image = req.file?.filename;

        if (!name || !image) {
            return res.status(400).json({ message: "Name and image file are required" });
        }

        const newImage = await Image.create({ name: name.trim(), image });

        res.status(201).json({ message: "Image uploaded successfully", newImage });
    } catch (error) {
        console.error("Image upload error:", error);
        res.status(500).json({ message: "Error uploading image" });
    }
};
