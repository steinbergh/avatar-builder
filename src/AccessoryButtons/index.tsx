import "./style.css";
import classnames from "classnames";
import { accessoriesBtns } from "../assets/svg/accessory-buttons";

type AccessoryButtonProps = {
  values: number[];
  onClick: (accValue: number) => void;
  activeValues: number[];
};

const accsNames: { [index: number]: string } = {
  0: "hat",
  1: "beard",
  2: "mustache",
  3: "glasses",
  4: "mask",
  5: "earrings",
  6: "dog",
  7: "banner",
  8: "cat",
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
          id={`accessory-${accsNames[value]}`}
          key={`acc-btn-${value}-${index}`}
          onClick={() => onClick(value)}
          className={classnames("accs-btn", {
            active: activeValues.indexOf(value) > -1,
          })}
        >
          {accessoriesBtns[value]}
        </div>
      ))}
    </div>
  );
};
