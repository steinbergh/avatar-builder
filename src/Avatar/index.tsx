import React from "react";
import { skinTones, bgColors, shirtColors, hairColors } from "../config";
import { getPart, PartsKeys } from "../Parts";
import { AvatarState } from "types";
import { useSpring, animated } from "react-spring";
import { ReactComponent as SaaStrLogo } from "assets/svg/lo_saastr-2021.svg";
import { ReactComponent as QPLogo } from "assets/svg/logo-dark.svg";
import "./style.css";

const parts = Object.values(PartsKeys);

export const Avatar = React.forwardRef<HTMLDivElement, AvatarState>(
  (props, ref) => {
    const bg = useSpring({ to: { fill: bgColors[props.bg] } });

    const mostParts = React.useMemo(
      () =>
        parts.map(
          (key) =>
            key !== "skinTone" &&
            key !== "bg" &&
            key !== "accessory" &&
            key !== "shirtColor" &&
            key !== "hairColor" &&
            key !== "badge" &&
            getPart(key, props[key])
        ),
      [props]
    );

    const accessoryParts = React.useMemo(
      () =>
        props[PartsKeys.ACCESSORY].map((acc) =>
          getPart(PartsKeys.ACCESSORY, acc)
        ),
      [props]
    );

    const badgeParts = React.useMemo(
      () => getPart(PartsKeys.BADGE, props[PartsKeys.BADGE]),
      [props]
    );

    return (
      <div className="avatar-border">
        <div id="avatar" className="avatar-frame">
          <div
            ref={ref}
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
            {mostParts}
            {accessoryParts}
            {badgeParts}
          </div>
          <QPLogo className="qp-logo" />
          <SaaStrLogo className="conference-logo" />
        </div>
      </div>
    );
  }
);
