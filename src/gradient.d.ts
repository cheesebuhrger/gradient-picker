declare class Gradient {
  constructor();
  initGradient(selector: string): void;
  disconnect(): void;
  toggleColor(index: number): void;
  showGradientLegend(): void;
  hideGradientLegend(): void;
}

export default Gradient;
