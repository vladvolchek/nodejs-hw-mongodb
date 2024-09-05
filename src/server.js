import dotenv from 'dotenv';
import express from 'express';
import { env } from './utils/env.js';
import pino from 'pino-http';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.js';
import contactsRouter from './routers/contacts.js';
import notFoundHandler from './middlewares/notFoundHandler.js';


dotenv.config();
const PORT = Number(env('PORT', 3000));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use('/contacts', contactsRouter);

  
  app.use('*', notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
