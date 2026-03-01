import express, { Router } from 'express'
import dotenv from 'dotenv';
dotenv.config()
import { connectDB } from "./config/db.js"
import { routes } from './routes/index.js';

export const app = express();

connectDB();


app.use(express.json());

app.use('/', routes)

app.get('/', (req, res) => {
    res.send("Welcome To Quick Hire Backend")
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));