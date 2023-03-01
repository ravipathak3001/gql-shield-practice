import books from '../../data';

export default async (_source: any, args: any) => {
  return [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];
};
