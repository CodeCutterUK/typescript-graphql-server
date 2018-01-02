import { makeExecutableSchema } from 'graphql-tools';

import { demoSchema } from '../demo';

import { rootQuery } from './root-query';
import { rootMutation } from './root-mutation';
import { resolverMap } from './resolvers';

const schemaDefinition = `
schema {
  query: RootQuery,
  mutation: RootMutation
}
`;

export default makeExecutableSchema({
  typeDefs: [
    schemaDefinition,
    rootQuery,
    rootMutation,
    demoSchema
  ],
  resolvers: resolverMap
} as any);
