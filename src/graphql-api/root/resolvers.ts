import { demoResolver, demoMutation } from '../demo';

export const resolverMap = {
  RootQuery: {
    demo() {
      return { };
    }
  },
  RootMutation: {
    demoMutation() {
      return { };
    }
  },
  ...demoResolver,
  ...demoMutation
};
