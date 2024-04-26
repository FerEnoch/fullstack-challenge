
declare global {
  interface window {
    ethereum: {
      isMetaMask: boolean;
      request: (...args: any[]) => Promise<any>;
    };
  }
}