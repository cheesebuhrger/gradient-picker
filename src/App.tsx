import { useEffect, useRef } from "react";
import "./App.css";
import Gradient from "./gradient.js";
import "./grained.js";
import { gradientColors } from "./data/gradientColors";

var grainOptions = {
  animate: false,
  patternWidth: 100,
  patternHeight: 100,
  grainOpacity: 0.075,
  grainDensity: 1,
  grainWidth: 0.75,
  grainHeight: 0.75,
};

function App() {
  const gradientRef = useRef<Gradient | null>(null);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
    gradientRef.current = gradient;

    // Initialize grained effect
    grained("#grained-texture", grainOptions);

    const canvas = document.getElementById("gradient-canvas");
    if (canvas) {
      const randomIndex = Math.floor(Math.random() * gradientColors.length);
      const initialGradient = gradientColors[randomIndex].gradient;
      canvas.style.setProperty("--gradient-color-1", initialGradient[0]);
      canvas.style.setProperty("--gradient-color-2", initialGradient[1]);
      canvas.style.setProperty("--gradient-color-3", initialGradient[2]);
      canvas.style.setProperty("--gradient-color-4", initialGradient[3]);
    }

    return () => {
      gradient.disconnect();
    };
  }, []);

  const updateGradient = (id: number) => {
    const canvas = document.getElementById("gradient-canvas");
    if (canvas) {
      // Get the gradient set by ID
      const selectedGradient = gradientColors.find(
        (g) => g.id === id
      )?.gradient;
      if (!selectedGradient) return;

      // Update CSS variables with the selected gradient set
      canvas.style.setProperty("--gradient-color-1", selectedGradient[0]);
      canvas.style.setProperty("--gradient-color-2", selectedGradient[1]);
      canvas.style.setProperty("--gradient-color-3", selectedGradient[2]);
      canvas.style.setProperty("--gradient-color-4", selectedGradient[3]);

      // Reinitialize gradient with new colors
      if (gradientRef.current) {
        gradientRef.current.disconnect();
        const newGradient = new Gradient();
        newGradient.initGradient("#gradient-canvas");
        gradientRef.current = newGradient;
      }
    }
  };

  return (
    <>
      <div id="main-container">
        <canvas id="gradient-canvas" data-transition-in />
        <div
          id="grained-texture"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />

        <h1>Gradient Controls</h1>
        <div id="button-container">
          {gradientColors.map((gradient) => (
            <button
              key={gradient.id}
              onClick={() => updateGradient(gradient.id)}
            >
              <span>{gradient.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
