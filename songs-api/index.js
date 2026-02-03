import { connectDB } from './db.js';
import server from './server.js';
import logger from './logger.js';

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';

// Connect to MongoDB before starting the server
connectDB().then(() => {
  server.deploy(env).catch(err => { logger.error(err); });
}).catch(err => {
  logger.error('Failed to connect to MongoDB:', err);
  process.exit(1);
});

// quit on ctrl-c when running docker in terminal
process.on('SIGINT', function onSigint() {
  logger.info(`Got SIGINT (aka ctrl-c in docker). Graceful shutdown`);
  shutdown();
});

// quit properly on docker stop
process.on('SIGTERM', function onSigterm() {
  logger.info(`Got SIGTERM (docker container stop). Graceful shutdown`);
  shutdown();
});

const shutdown = () => {
  server.undeploy();
};
