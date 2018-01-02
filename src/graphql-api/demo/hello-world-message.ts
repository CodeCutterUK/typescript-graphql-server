let helloWorldMessage: string = "Hello World";

export function getHelloWorldMessage(): string {
  return helloWorldMessage;
}

export function updateHelloWorldMessage(message: string) {
  helloWorldMessage = message;
}
