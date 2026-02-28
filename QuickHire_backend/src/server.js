require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express(); 

// 1. Connect to Database
connectDB();

// 2. Middleware
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Express is running!');
});


app.post('/api/jobs', (req, res) => {
    console.log(req.body)
})


// 3. Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
