require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

mongoose.connect('mongodb+srv://kharatsaurav12345:12345@crud1.auqjere.mongodb.net/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

app.use(express.json());
app.use('/api', routes);

app.listen(8000, '127.0.0.1', () => {
  console.log('Server Started at 8000');
});
