const express = require('express');
require('dotenv').config();
require('./db');

const app = express();


const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const StudentData=require('./Router/Student');
app.use('/api',StudentData);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
