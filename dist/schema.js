"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.schema = void 0;
const graphql_1 = require("graphql");
const graphql_middleware_1 = require("graphql-middleware");
const graphql_shield_1 = require("graphql-shield");
const schema_1 = require("./book/schema");
const query = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        ...schema_1.bookQueries,
    },
});
// const mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {},
// });
exports.schema = new graphql_1.GraphQLSchema({
    query,
    // mutation,
});
exports.permissions = (0, graphql_shield_1.shield)({
    Query: {
        ...schema_1.bookPermission.Query,
    },
}, {
    allowExternalErrors: true,
    // debug: false,
    // fallbackRule: undefined,
    // hashFunction: function (arg: { parent: any; args: any }): string {
    //   throw new Error('Function not implemented.');
    // },
});
exports.default = (0, graphql_middleware_1.applyMiddleware)(exports.schema, exports.permissions);
