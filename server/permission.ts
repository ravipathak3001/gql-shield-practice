import { allow, deny, shield } from 'graphql-shield';

export const permissions = shield({
  Query: {
    '*': allow,
    hello: allow,
  },
});
