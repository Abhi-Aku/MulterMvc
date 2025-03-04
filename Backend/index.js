const express = require('express');
require('dotenv').config();
require('./db');

const app = express();
const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/image', require('./Router/ImageRout'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
