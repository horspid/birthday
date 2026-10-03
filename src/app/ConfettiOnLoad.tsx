import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const colors = ["#c78452", "#e9c18b", "#8f3a33", "#f2e1cc"];

function ConfettiOnLoad() {
  const hasLaunched = useRef(false);

  useEffect(() => {
    if (hasLaunched.current) {
      return;
    }

    hasLaunched.current = true;

    const launchBurst = (angle: number, originX: number, delay: number) => {
      window.setTimeout(() => {
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
      }, delay);
    };

    [0, 240, 480].forEach((delay) => {
      launchBurst(45, 0.03, delay);
      launchBurst(135, 0.97, delay);
    });
  }, []);

  return null;
}

export default ConfettiOnLoad;
