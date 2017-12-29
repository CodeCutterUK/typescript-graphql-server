import * as graphqlHTTP from 'express-graphql';
import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import * as express from 'express';
import { configuration } from '../configuration';

import executableSchema from './root/root-schema';

export function attachGraphQlServer(app: express.Express): void {
  app.use('/api', graphqlHTTP({
    schema: executableSchema,
    graphiql: configuration.graphQlApi.enableIntrospective
  }));
}
