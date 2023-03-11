"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const intializeDatabaseConnection = async () => {
    const MONGODB_URL = process.env.DATABASE;
    try {
        await mongoose_1.default.connect(MONGODB_URL);
        console.info('Database Connected...');
    }
    catch (err) {
        throw new Error(err);
    }
};
exports.default = intializeDatabaseConnection;
