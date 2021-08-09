import React from "react";
import { skinTones, bgColors } from "../config";
import { getPart, PartsKeys } from "../Parts";
import { AvatarState } from "types";
import { useSpring, animated } from "react-spring";

const parts = Object.values(PartsKeys);

// const excludedParts = [PartsKeys.SKIN_TONE, PartsKeys.BG];

export const Avatar = (props: AvatarState) => {
  const bg = useSpring({ to: { fill: bgColors[props.bg] } });

  console.log(bg);
  return (
    <div
      style={
        {
          "--skin-tone": skinTones[props.skinTone],
        } as React.CSSProperties
      }
      className="avatar"
    >
      <animated.svg viewBox="0 0 235 235">
        <animated.rect width="235" height="235" style={bg} />
      </animated.svg>
      {parts.map(
        (key) => key !== "skinTone" && key !== "bg" && getPart(key, props[key])
      )}
    </div>
  );
};
