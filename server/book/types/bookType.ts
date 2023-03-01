import { GraphQLObjectType, GraphQLString } from 'graphql';

export const bookType = new GraphQLObjectType({
  name: 'bookType',
  fields: () => ({
    title: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
    },
  }),
});
