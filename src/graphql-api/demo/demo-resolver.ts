import { configuration } from '../../configuration';

import { getHelloWorldMessage } from './hello-world-message';

function helloWorldResolver(): string {
  return getHelloWorldMessage();
}

export const demoResolver = {
  Demo: {
    helloWorld: helloWorldResolver
  }
};
