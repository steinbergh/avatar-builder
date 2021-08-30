import React from "react";
import { skinTones, bgColors, shirtColors, hairColors } from "../config";
import { getPart, PartsKeys } from "../Parts";
import { AvatarState } from "types";
import { useSpring, animated } from "react-spring";
import SaaStrLogo from "assets/SaaStrBlue.png";
import { ReactComponent as QPLogo } from "assets/svg/logo-dark.svg";
import "./style.css";

const parts = Object.values(PartsKeys);

export const Avatar = React.forwardRef<HTMLDivElement, AvatarState>(
  (props, ref) => {
    const bg = useSpring({ to: { fill: bgColors[props.bg] } });

    return (
      <div className="avatar-border">
        <div ref={ref} id="avatar" className="avatar-frame">
          <div
            style={
              {
                "--skin-tone": skinTones[props.skinTone],
                "--shirt-color": shirtColors[props.shirtColor],
                "--hair-color": hairColors[props.hairColor],
              } as React.CSSProperties
            }
            className="avatar"
          >
            <animated.svg viewBox="0 0 235 235">
              <animated.rect width="235" height="235" style={bg} />
            </animated.svg>
            {parts.map(
              (key) =>
                key !== "skinTone" &&
                key !== "bg" &&
                key !== "accessory" &&
                key !== "shirtColor" &&
                key !== "hairColor" &&
                getPart(key, props[key])
            )}
            {props[PartsKeys.ACCESSORY].map((acc) =>
              getPart(PartsKeys.ACCESSORY, acc)
            )}
          </div>
          <QPLogo className="qp-logo" />
          <img
            className="conference-logo"
            src={SaaStrLogo}
            alt="the SaaStr Logo"
          />
        </div>
      </div>
    );
  }
);
