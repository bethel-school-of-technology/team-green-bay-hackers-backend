import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';

import { db } from './models';

import userRoutes from './routes/userRoutes';
import listRoutes from './routes/listRoutes';


const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// configuring cors middleware
const cors = require('cors');
app.use(cors());

// routes
app.use('/api/list', listRoutes);
app.use('/api/users', userRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

// Syncing our database
db.sync({ alter: true }).then(() => {
    console.info("Connected to the database!")
});

app.listen(3000);

