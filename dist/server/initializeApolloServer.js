"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const schema_1 = __importDefault(require("./schema"));
const default_1 = require("@apollo/server/plugin/landingPage/default");
// import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
const initializeApolloServer = (httpServer) => {
    const enablePlayground = process.env.DEBUG === 'true';
    //   const serverCleanup = useServer({ schema });
    const server = new server_1.ApolloServer({
        schema: schema_1.default,
        plugins: [
            enablePlayground
                ? (0, default_1.ApolloServerPluginLandingPageProductionDefault)()
                : (0, default_1.ApolloServerPluginLandingPageLocalDefault)({ embed: false }),
        ],
        csrfPrevention: true,
        introspection: true,
    });
    return server;
};
exports.default = initializeApolloServer;
