import React from "react";
import { ReactComponent as AccessoryBtn1 } from "./btn-accessory-1.svg";
import { ReactComponent as AccessoryBtn2 } from "./btn-accessory-2.svg";
import { ReactComponent as AccessoryBtn3 } from "./btn-accessory-3.svg";
import { ReactComponent as AccessoryBtn4 } from "./btn-accessory-4.svg";
import { ReactComponent as AccessoryBtn5 } from "./btn-accessory-5.svg";
import { ReactComponent as AccessoryBtn6 } from "./btn-accessory-6.svg";
import { ReactComponent as AccessoryBtn7 } from "./btn-accessory-7.svg";
import { ReactComponent as AccessoryBtn8 } from "./btn-accessory-8.svg";

export const accessoriesBtns = [
  AccessoryBtn1,
  AccessoryBtn2,
  AccessoryBtn3,
  AccessoryBtn4,
  AccessoryBtn5,
  AccessoryBtn6,
  AccessoryBtn7,
  AccessoryBtn8,
].map((C, i) => C && <C key={`accessory-${i}`} />);
