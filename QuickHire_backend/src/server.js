import express, { Router } from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config()
import { connectDB } from "./config/db.js"
import { routes } from './routes/index.js';

export const app = express();

connectDB();


app.use(cors({
  origin: ['http://localhost:3000', `${process.env.FORNTEND_BASE_URL}`],
  credentials: true,
}))


app.use(express.json());

app.use('/', routes)

app.get('/', (req, res) => {
    res.send("Welcome To Quick Hire Backend")
})



const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));