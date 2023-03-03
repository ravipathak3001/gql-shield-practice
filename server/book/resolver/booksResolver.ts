import books from '../../data';

export const bookResolver = () => {
  return {
    books: books,
  };
};
