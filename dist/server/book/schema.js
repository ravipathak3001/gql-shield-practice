"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookPermission = exports.bookQueries = void 0;
const graphql_shield_1 = require("graphql-shield");
const booksResolver_1 = require("./resolver/booksResolver");
const book_1 = require("./types/book");
exports.bookQueries = {
    getBooksList: {
        type: book_1.books,
        resolve: booksResolver_1.bookResolver,
    },
};
exports.bookPermission = {
    Query: {
        '*': graphql_shield_1.allow,
        // getBooksList: allow,
    },
};
