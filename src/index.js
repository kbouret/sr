import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import projectRoutes from './routes/project.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

createConnection().then(() => {
    console.log('Database connection established');

    app.use('/', projectRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => console.error('Error establishing database connection:', error));
