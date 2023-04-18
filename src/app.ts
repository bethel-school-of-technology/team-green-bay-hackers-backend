import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';

import { db } from './models';

import userRoutes from './routes/userRoutes';
import listRoutes from './routes/listRoutes';


const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// configuring cors middleware (allows ALL incoming requests)
// const cors = require('cors');
// app.use(cors());

// configuring cors to only allow requests from specific client domain
const cors = require('cors');
const corsOptions = {
    origin: [ 'http://localhost:4200', 'http://localhost:3000' ]
};
app.use(cors(corsOptions));

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

// import express, { Request, Response } from 'express'

// const app = express();

// const port = 3000

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
