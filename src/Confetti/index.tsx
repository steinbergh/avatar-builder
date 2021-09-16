import ReactCanvasConfetti from "react-canvas-confetti";
import "./style.css";

export const Confetti = ({
  fireConfetti,
  setFireConfetti,
}: {
  fireConfetti: boolean;
  setFireConfetti: () => void;
}) => {
  return (
    <ReactCanvasConfetti
      fire={fireConfetti}
      reset={!fireConfetti}
      onDecay={setFireConfetti}
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
      decay={0.8}
      drift={0}
      gravity={1}
      origin={{
        x: 0.5,
        y: 0.5,
      }}
      particleCount={500}
      resize
      scalar={1}
      shapes={["circle", "square"]}
      spread={360}
      startVelocity={45}
      ticks={600}
      zIndex={-1}
    />
  );
};
