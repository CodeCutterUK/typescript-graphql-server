const demo = `
type Demo {
  helloWorld: String
}
`;

const demoMutation = `
type DemoMutation {
  updateHelloWorldMessage(message: String): Boolean
}
`;

export const demoSchema = () => [
  demo,
  demoMutation
];
