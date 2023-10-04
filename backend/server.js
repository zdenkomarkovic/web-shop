const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const dbUrl = require('./config/configDb');
const UserModel = require('./model/userModel');
app.use(cors());

mongoose
  .connect(dbUrl)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./routes'));

app.listen(4000, () => {
  console.log('server running...');
});
