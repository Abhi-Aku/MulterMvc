const mongoose = require('mongoose');
require('dotenv').config();

module.exports.db = mongoose.connect(process.env.MONGO_URL, {
   
}).then(() => {
    console.log('DB connected');
}).catch((err) => {
    console.error('Mongoose connection error:', err);
});
