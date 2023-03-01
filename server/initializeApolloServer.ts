import { ApolloServer } from '@apollo/server';
import schema from './schema';
// import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

const initializeApolloServer = (httpServer): ApolloServer => {
  const enablePlayground = process.env.DEBUG === 'true';
  //   const serverCleanup = useServer({ schema });
  const server = new ApolloServer({
    schema,
    // plugins:[
    //     ApolloServerPluginDrainHttpServer(httpServer)
    // ],
    csrfPrevention: true,
    introspection: true,
  });

  return server;
};

export default initializeApolloServer;
