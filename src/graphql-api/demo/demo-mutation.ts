import { configuration } from '../../configuration';

import { updateHelloWorldMessage } from './hello-world-message';

function updateHelloWorldMessageMutation(_, input: {message: string}): boolean {
  updateHelloWorldMessage(input.message);

  return true;
}

export const demoMutation = {
  DemoMutation: {
    updateHelloWorldMessage: updateHelloWorldMessageMutation
  }
};
