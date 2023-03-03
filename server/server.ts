import { BaseContext } from '@apollo/server';
import { config } from 'dotenv';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';
import { json } from 'body-parser';
import initializeApolloServer from './initializeApolloServer';

export type Context = BaseContext & {
  user: Partial<string>;
};

const context = async ({ req }): Promise<Context> => {
  //await parseJwt(req);
  return {
    user: 'ADMIN',
  };
};

const init = async (): Promise<void> => {
  config();
  const PORT = process.env.PORT || 8000;
  const app: express.Application = express();
  const httpServer = http.createServer(app);
  app.enable('trust proxy');
  app.options('*', cors());
  app.all('/healthCheck', (_req, res) => res.status(200).send('Healthy'));

  // await initiateMongoServer();

  const apolloServer = initializeApolloServer(httpServer);
  await apolloServer.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(apolloServer, {
      context,
    }),
  );

  httpServer.listen(PORT, () => {
    console.log(
      `🚀 query endpoint running at http://localhost:${PORT}/graphql`,
    );
  });
};
init();
