import { ApolloServer } from '@apollo/server';
import { applyMiddleware } from 'graphql-middleware';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import { json } from 'body-parser';
import cors from 'cors';

import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { permissions } from './permission';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema: applyMiddleware(schema, permissions),
  resolvers,
  context: ({ req }) => {
    return {
      user: req.headers.user || '',
    };
  },
});

const app = express();
// const httpServer = http.createServer(app);
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
// });

const start = async () => {
  // await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  );

  // app.use(
  //   '/graphql',
  //   cors<cors.CorsRequest>({
  //     origin: [
  //       'https://www.your-app.example',
  //       'https://studio.apollographql.com',
  //     ],
  //   }),
  //   json(),
  //   expressMiddleware(server),
  // );

  // await new Promise<void>((resolve) =>
  //   httpServer.listen({ port: 4000 }, resolve),
  // );
  // console.log(`🚀 Server ready at http://localhost:4000/graphql`);
};
start();
