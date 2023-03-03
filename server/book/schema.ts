import { allow } from 'graphql-shield';
import isAdmin from '../shield/isAdmin';
import { bookResolver } from './resolver/booksResolver';
import { books } from './types/book';

export const bookQueries = {
  getBooksList: {
    type: books,
    resolve: bookResolver,
  },
};

export const bookPermission = {
  Query: {
    // '*': allow,
    getBooksList: isAdmin,
  },
};
