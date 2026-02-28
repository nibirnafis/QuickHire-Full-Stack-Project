require('dotenv').config();
import cors from "cors"
const express = require('express');
const connectDB = require('./config/db');

const app = express(); 

// 1. Connect to Database
connectDB();


app.use(cors({
    origin: "https://quickhire-full-stack-project.onrender.com",
    credentials: true
}
))

// 2. Middleware
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Express is running!');
});


app.post('/api/jobs', (req, res) => {
    console.log("Hi")
})


// 3. Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
