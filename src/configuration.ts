export type Configuration = {
  nodeEnvironment: string;
  apiAccessToken: string;
  networking: {
    port: string;
    ipFilter: string;
    responseDebuglogging: string;
  };
  graphQlApi: {
    enableIntrospective: boolean;
  };
};

export const configuration: Configuration = {
  nodeEnvironment: process.env.NODE_ENV,
  apiAccessToken: process.env.API_ACCESS_TOKEN,
  networking: {
    port: process.env.PORT || '3100',
    ipFilter: process.env.IPFILTER || '[\'::1\', \'::ffff:127.0.0.1\', \'127.0.0.1\']',
    responseDebuglogging: process.env.RESPONSE_DEBUG_LOGGING
  },
  graphQlApi: {
    enableIntrospective: false
  }
};

configuration.networking.responseDebuglogging = configuration.nodeEnvironment === 'development' && 'short';
configuration.graphQlApi.enableIntrospective = configuration.nodeEnvironment === 'development' || process.env.ENABLE_GRAPHIQL !== undefined;
