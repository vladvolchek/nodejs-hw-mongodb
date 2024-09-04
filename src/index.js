import { setupServer } from './server.js mongodb://127.0.0.1:27017/';
import { initMongoConnection } from "./db/initMongoConnection.js";

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};

bootstrap();
