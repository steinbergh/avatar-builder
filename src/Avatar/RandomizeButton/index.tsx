import React from "react";
import { useSpring, animated, config } from "react-spring";
import { ReactComponent as Refresh } from "assets/svg/refresh.svg";
import "./styles.css";

type RandomizeButtonProps = {
  onClick: () => void;
};

export const RandomizeButton = ({ onClick }: RandomizeButtonProps) => {
  const [isRandomizing, setRandomizing] = React.useState(false);
  const [{ rotateZ }, api] = useSpring(() => ({
    rotateZ: 0,
    config: config.wobbly,
    onRest: async (onRestResult, onRestSpring) => {
      if (onRestResult.finished) {
        setRandomizing(false);
        await onRestSpring.start({
          rotateZ: 0,
          immediate: true,
        });
      }
    },
  }));

  const handleClick = () => {
    onClick();
    if (isRandomizing) return;
    setRandomizing(true);
    api({
      to: async (next) => {
        return await next({
          rotateZ: 180,
        });
      },
    });
  };
  return (
    <button className="random-button" onClick={handleClick}>
      <animated.span
        style={{
          transformOrigin: "center center",
          lineHeight: 0,
          display: "inline-block",
          rotateZ,
        }}
      >
        <Refresh className="refresh-icon" />
      </animated.span>
      {" Randomize"}
    </button>
  );
};
