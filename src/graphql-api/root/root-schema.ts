import { makeExecutableSchema } from 'graphql-tools';

import { demoSchema } from '../demo';

import { rootQueryType } from './root-query';
import { resolverMap } from './resolvers';

const schemaDefinition = `
schema {
  query: RootQueryType
}
`;

export default makeExecutableSchema({
  typeDefs: [
    schemaDefinition,
    rootQueryType,
    demoSchema
  ],
  resolvers: resolverMap
});
