import { useEffect } from "react";
import confetti from "canvas-confetti";

const colors = ["#c78452", "#e9c18b", "#8f3a33", "#f2e1cc"];

function ConfettiOnLoad() {
  useEffect(() => {
    const launch = (angle: number, originX: number) => {
      void confetti({
        angle,
        colors,
        gravity: 0.85,
        origin: { x: originX, y: 0.62 },
        particleCount: 38,
        scalar: 0.9,
        spread: 58,
        startVelocity: 48,
        ticks: 220,
      });
    };

    const shootFromBothSides = () => {
      launch(45, 0.03);
      launch(135, 0.97);
    };

    const firstShot = window.setTimeout(shootFromBothSides, 50);
    const interval = window.setInterval(shootFromBothSides, 2000);

    return () => {
      window.clearTimeout(firstShot);
      window.clearInterval(interval);
    };
  }, []);

  return null;
}

export default ConfettiOnLoad;
