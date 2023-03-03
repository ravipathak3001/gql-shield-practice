"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.books = void 0;
const graphql_1 = require("graphql");
const bookType_1 = require("./bookType");
exports.books = new graphql_1.GraphQLObjectType({
    name: 'Books',
    fields: () => ({
        books: { type: new graphql_1.GraphQLList(bookType_1.bookType) },
    }),
});
