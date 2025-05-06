declare module "*/Gradient.js" {
  export default class Gradient {
    constructor();
    initGradient(selector: string): void;
    disconnect(): void;
    pause(): void;
    play(): void;
    toggleColor(index: number): void;
    updateFrequency(freq: number): void;
  }
}
