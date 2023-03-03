"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookType = void 0;
const graphql_1 = require("graphql");
exports.bookType = new graphql_1.GraphQLObjectType({
    name: 'bookType',
    fields: () => ({
        title: {
            type: graphql_1.GraphQLString,
        },
        author: {
            type: graphql_1.GraphQLString,
        },
    }),
});
