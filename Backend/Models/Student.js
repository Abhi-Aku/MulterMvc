const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: { type: String, },
    image: { type: String } // Changed 'Image' to 'image' for consistency
});

module.exports = mongoose.model('Student', studentSchema);
