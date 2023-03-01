"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookPermission = exports.bookQueries = void 0;
const graphql_shield_1 = require("graphql-shield");
const booksResolver_1 = __importDefault(require("./resolver/booksResolver"));
const book_1 = require("./types/book");
exports.bookQueries = {
    getBooksList: {
        type: book_1.books,
        resolve: booksResolver_1.default,
    },
};
exports.bookPermission = {
    Query: {
        getBooksList: graphql_shield_1.allow,
    },
};
