import express, { urlencoded } from 'express'
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  credentials: true // Allow credentials
}));

app.use(express.json());
app.use(urlencoded({ extended: true }));

import userRoutes from './routes/user.routes';
import contentRoutes from './routes/content.routes';

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/content', contentRoutes);

export {
  app
}
