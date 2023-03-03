"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const express4_1 = require("@apollo/server/express4");
const body_parser_1 = require("body-parser");
const initializeApolloServer_1 = __importDefault(require("./initializeApolloServer"));
const context = async ({ req }) => {
    //await parseJwt(req);
    return {
        user: 'ADMIN',
    };
};
const init = async () => {
    (0, dotenv_1.config)();
    const PORT = process.env.PORT || 8000;
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    app.enable('trust proxy');
    app.options('*', (0, cors_1.default)());
    app.all('/healthCheck', (_req, res) => res.status(200).send('Healthy'));
    // await initiateMongoServer();
    const apolloServer = (0, initializeApolloServer_1.default)(httpServer);
    await apolloServer.start();
    app.use('/graphql', (0, cors_1.default)(), (0, body_parser_1.json)(), (0, express4_1.expressMiddleware)(apolloServer, {
        context,
    }));
    httpServer.listen(PORT, () => {
        console.log(`🚀 query endpoint running at http://localhost:${PORT}/graphql`);
    });
};
init();
