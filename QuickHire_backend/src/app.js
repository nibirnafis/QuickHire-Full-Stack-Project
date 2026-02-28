const express = require('express');
const app = express();
// const connectDB = require('./config/db');


// connectDB();

app.get('/', (req, res) => {
  res.send('Express is running!');
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
