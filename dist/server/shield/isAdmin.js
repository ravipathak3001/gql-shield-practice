"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_shield_1 = require("graphql-shield");
exports.default = (0, graphql_shield_1.rule)({ cache: 'contextual' })(async (_parent, _args, ctx) => {
    const userRoles = ctx.user;
    return userRoles.includes('ADMIN');
});
