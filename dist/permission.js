"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = void 0;
const graphql_shield_1 = require("graphql-shield");
exports.permissions = (0, graphql_shield_1.shield)({
    Query: {
        '*': graphql_shield_1.deny,
        hello: graphql_shield_1.allow,
    },
});
