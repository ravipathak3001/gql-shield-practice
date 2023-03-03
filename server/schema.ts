import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { applyMiddleware } from 'graphql-middleware';
import { shield } from 'graphql-shield';
import { bookPermission, bookQueries } from './book/schema';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...bookQueries,
  },
});
// const mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {},
// });

export const schema = new GraphQLSchema({
  query,
  // mutation,
});

export const permissions = shield(
  {
    Query: {
      ...bookPermission.Query,
    },
  },
  {
    allowExternalErrors: true,
    // debug: false,
    // fallbackRule: undefined,
    // hashFunction: function (arg: { parent: any; args: any }): string {
    //   throw new Error('Function not implemented.');
    // },
  },
);

export default applyMiddleware(schema, permissions);
