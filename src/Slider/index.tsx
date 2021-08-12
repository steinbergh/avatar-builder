import React, { useRef, useState } from "react";
import "./style.css";
import { useSpring, animated, config } from "react-spring";
import { useDrag } from "react-use-gesture";
import useBoundingclientrect from "@rooks/use-boundingclientrect";

type SliderProps = {
  label: string;
  values: unknown[];
  onChange: (value: number) => void;
  value: number;
};

// const getScale = (value: number, max: number) => value / max;

const getValuePos = (w: number, vs: number) => (n: number) =>
  w !== 0 ? Math.round((n / w) * (vs - 1)) : 0;

const getPosFromValue = (w: number, vs: number) => (n: number) =>
  w !== 0 ? (w / (vs - 1)) * n : 0;

const Slider = ({ label, onChange, value, values }: SliderProps) => {
  const [inputValue, setInputValue] = useState(0);
  const [touchDown, setTouchDown] = useState(false);

  const sliderRef = useRef<HTMLInputElement>(null);
  const sliderBounds = useBoundingclientrect(sliderRef);

  const [{ x, scale }, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    config: config.default,
  }));

  const getNextPos = React.useMemo(
    () => getValuePos(sliderBounds?.width || 0, values.length),
    [sliderBounds?.width, values.length]
  );

  const posFromValue = React.useMemo(
    () => getPosFromValue(sliderBounds?.width || 0, values.length),
    [sliderBounds?.width, values.length]
  );

  React.useEffect(() => {
    if (!touchDown) {
      api.start({ x: posFromValue(value) });
    }
  }, [api, value, posFromValue, touchDown]);

  React.useEffect(() => {
    if (sliderRef && sliderRef.current && Object) {
      const nativeSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      )?.set;

      if (nativeSetter) {
        console.log(inputValue.toString());
        nativeSetter.call(sliderRef.current, String(inputValue));
        sliderRef.current.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  }, [inputValue]);

  const bind = useDrag(
    ({ active, movement: [_x], down }) => {
      const nextPos = getNextPos(_x);
      setInputValue(nextPos);
      setTouchDown(down);

      const nextXPos = sliderBounds?.width
        ? (sliderBounds?.width / (values.length - 1)) * nextPos
        : 0;

      api({
        to: async (next) => {
          await next({
            x: active ? _x : nextXPos,
            scale: active ? 1.1 : 1,
            immediate: (name) => active && name === "x",
          });
        },
      });
    },
    {
      initial: () => [x.get(), 0],
      axis: "x",
      bounds: { left: 0, right: sliderBounds?.width },
      rubberband: false,
    }
  );

  console.log(label, values.length - 1);
  return (
    <div className="slider">
      <animated.label htmlFor={label}>{label}</animated.label>
      <input
        ref={sliderRef}
        type="range"
        min="0"
        max={values.length - 1}
        name={label}
        defaultValue={inputValue}
        onChange={(e) => {
          onChange(Number(e.target.value));
        }}
      ></input>
      <animated.div
        {...bind()}
        style={{ x, scale }}
        className="handle"
      ></animated.div>
    </div>
  );
};

export { Slider };
