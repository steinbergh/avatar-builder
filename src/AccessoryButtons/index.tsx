import { getPart, PartsKeys } from "Parts";
import React, { useRef, useState } from "react";
import "./style.css";
import classnames from "classnames";

type AccessoryButtonProps = {
  values: number[];
  onClick: (accValue: number) => void;
  activeValues: number[];
};

export const AccessoryButtons = ({
  values,
  onClick,
  activeValues,
}: AccessoryButtonProps) => {
  return (
    <div className="accs-btns">
      {values.map((value, index) => (
        <div
          key={`acc-btn-${value}-${index}`}
          onClick={() => onClick(value)}
          className={classnames("accs-btn", {
            active: activeValues.indexOf(value) > -1,
          })}
        >
          {getPart(PartsKeys.ACCESSORY, value)}
        </div>
      ))}
    </div>
  );
};
