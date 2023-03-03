"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    overwrite: true,
    schema: '',
    generates: {
        'server/generated/graphql.ts': {
            plugins: ['typpescript', 'typescript-resolvers'],
            config: {
                useIndexSignature: true,
                mappers: {},
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};
exports.default = config;
