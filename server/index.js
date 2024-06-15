import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

import routes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json({ limig: '50mb' }));

app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from API v1' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));
