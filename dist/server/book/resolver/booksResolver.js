"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookResolver = void 0;
const data_1 = __importDefault(require("../../data"));
const bookResolver = () => {
    return {
        books: data_1.default,
    };
};
exports.bookResolver = bookResolver;
