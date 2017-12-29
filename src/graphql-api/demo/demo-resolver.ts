import { configuration } from '../../configuration';

function hellowWorldResolver(): string {
  return "Hello World"
}

export const demoResolver = {
  Demo: {
    helloWorld: hellowWorldResolver
  }
};
