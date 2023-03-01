import { allow } from 'graphql-shield';
import booksResolver from './resolver/booksResolver';
import { books } from './types/book';

export const bookQueries = {
  getBooksList: {
    type: books,
    resolve: booksResolver,
  },
};

export const bookPermission = {
  Query: {
    getBooksList: allow,
  },
};
