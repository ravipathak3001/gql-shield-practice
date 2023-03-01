"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const data_1 = __importDefault(require("./data"));
exports.resolvers = {
    Query: {
        books: () => data_1.default,
    },
};
