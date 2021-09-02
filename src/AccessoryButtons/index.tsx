import "./style.css";
import classnames from "classnames";
import { accessoriesBtns } from "../assets/svg/accessory-buttons";

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
          {accessoriesBtns[value]}
        </div>
      ))}
    </div>
  );
};
