import { allow, deny, shield } from 'graphql-shield';

export const permissions = shield({
  Query: {
    '*': deny,
    hello: allow,
  },
});
