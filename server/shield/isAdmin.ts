import { rule } from 'graphql-shield';
export default rule({ cache: 'contextual' })(async (_parent, _args, ctx) => {
  const userRoles = ctx.user;
  return userRoles.includes('ADMIN');
});
