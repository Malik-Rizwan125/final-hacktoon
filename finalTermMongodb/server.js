import express from 'express'
import bodyParser from 'body-parser';
import cors  from 'cors'
import eventsRoutes from './routes/events.js'
import userRoutes from './routes/userRoutes.js'
import {mainConection} from './config/dbConfig.js'
import dotenv from 'dotenv'

dotenv.config();

mainConection()
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/', eventsRoutes)

app.use('/auth', userRoutes)
app.all('*', (req, res)=> res.send('That route does not exists'))

app.listen(port, (req, res)=>{
    console.log(`Server  is running on Port: ${port}`);
})



app.get('/', (req, res)=>res.send('Hello from get'))