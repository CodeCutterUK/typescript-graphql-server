import { demoResolver } from '../demo';

export const resolverMap = {
  RootQueryType: {
    demo() {
      return { };
    }
  },
  ...demoResolver
};
