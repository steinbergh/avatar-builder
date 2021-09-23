import React, { useRef, useState } from "react";
import "./style.css";
import { useSpring, animated, config } from "react-spring";
import { useDrag } from "@use-gesture/react";
import useBoundingclientrect from "@rooks/use-boundingclientrect";

type SliderProps = {
  Icon?: React.ReactNode;
  label: string;
  values: unknown[];
  onChange: (value: number) => void;
  value: number;
};

// const getScale = (value: number, max: number) => value / max;

const getValuePos = (w: number, vs: number) => (n: number) => {
  return w !== 0 ? Math.round((n / w) * (vs - 1)) : 0;
};

const getPosFromValue = (w: number, vs: number) => (n: number) =>
  w !== 0 ? (w / (vs - 1)) * n : 0;

const nativeSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  "value"
)?.set;

const Slider = ({ Icon, label, onChange, value, values }: SliderProps) => {
  // const [inputValue, setInputValue] = useState(0);
  const [touchDown, setTouchDown] = useState(false);

  const sliderRef = useRef<HTMLInputElement>(null);
  const sliderBounds = useBoundingclientrect(sliderRef);

  const getNextPos = React.useMemo(
    () => getValuePos(sliderBounds?.width || 0, values.length),
    [sliderBounds?.width, values.length]
  );

  const posFromValue = React.useMemo(
    () => getPosFromValue(sliderBounds?.width || 0, values.length),
    [sliderBounds?.width, values.length]
  );

  const [{ x, scale }, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    config: config.default,
  }));

  React.useLayoutEffect(() => {
    if (!touchDown) {
      api.start({ x: posFromValue(value) });
    }
  }, [api, value, posFromValue, touchDown]);

  const setValue = React.useCallback(
    (inputValue: number) => {
      if (sliderRef && sliderRef.current && Object && nativeSetter) {
        nativeSetter.call(sliderRef.current, String(inputValue));
        sliderRef.current.dispatchEvent(new Event("change", { bubbles: true }));
      }
    },
    [sliderRef]
  );

  const bind = useDrag(
    ({ active, offset: [ox], lastOffset: [lx], down }) => {
      const nextPos = getNextPos(ox);
      const prevPos = getNextPos(lx);

      if (nextPos !== value && nextPos !== prevPos) {
        setValue(nextPos);
      }

      if (!active) {
        setTouchDown(down);
      }

      api.start({
        x: active
          ? ox
          : sliderBounds?.width
          ? (sliderBounds?.width / (values.length - 1)) * nextPos
          : 0,
        scale: active ? 1.1 : 1,
        immediate: (name) => active && name === "x",
      });
    },
    {
      from: () => [x.get(), 0],
      axis: "x",
      bounds: sliderRef,
      rubberband: false,
      preventDefault: true,
      preventScroll: true,
    }
  );

  return (
    <div className="slider">
      <label htmlFor={label}>
        <span className="icon">{Icon}</span>
        {label}
      </label>
      <animated.input
        ref={sliderRef}
        type="range"
        min="0"
        max={values.length - 1}
        name={label}
        value={value}
        onChange={(e) => {
          onChange(Number(e.target.value));
        }}
      ></animated.input>
      <animated.div className="ticks">
        {[...new Array(values.length - 1)].map(
          (_, i) =>
            i !== 0 &&
            1 !== values.length - 1 && (
              <span
                // style={{ left: `${(100 / values.length) * i}%` }}
                className="tick-mark"
                key={`${label}-tick-${i}`}
              ></span>
            )
        )}
      </animated.div>

      <animated.div
        {...bind()}
        style={{ x, scale }}
        className="handle"
      ></animated.div>
    </div>
  );
};

export { Slider };
