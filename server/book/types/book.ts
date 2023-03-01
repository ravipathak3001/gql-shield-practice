import { GraphQLList, GraphQLObjectType } from 'graphql';
import { bookType } from './bookType';

export const books = new GraphQLObjectType({
  name: 'Books',
  fields: () => ({
    books: { type: new GraphQLList(bookType) },
  }),
});
