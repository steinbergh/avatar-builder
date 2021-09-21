import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import "./style.css";

export const Confetti = ({
  fireConfetti,
}: {
  fireConfetti: boolean | number;
}) => {
  const animationInstance = React.useRef<any>(null);

  const makeShot = (particleRatio: number, opts: object) => {
    animationInstance.current &&
      animationInstance.current({
        ...opts,
        origin: {
          x: 0.5,
          y: 0.5,
        },
        particleCount: Math.floor(400 * particleRatio),
      });
  };

  const handleFire = () => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <ReactCanvasConfetti
      fire={fireConfetti}
      onFire={handleFire}
      angle={90}
      className="canvas"
      colors={[
        "#645BA5",
        "#FF9C4A",
        "#EA2A74",
        "#25C191",
        "#2E97CC",
        "#7D77C9",
        "#FCB17E",
        "#E25495",
        "#2BE28A",
        "#4BBDEA",
      ]}
      refConfetti={(confetti) => {
        animationInstance.current = confetti;
      }}
      decay={0.8}
      drift={0}
      gravity={1}
      origin={{
        x: 0.5,
        y: 0.5,
      }}
      resize
      shapes={["circle", "square"]}
      ticks={600}
    />
  );
};
