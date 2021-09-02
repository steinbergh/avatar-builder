import React from "react";
import { ReactComponent as Accessory4 } from "./accessory-4.svg";
import { ReactComponent as Accessory5 } from "./accessory-5.svg";
import { ReactComponent as Accessory6 } from "./accessory-6.svg";
import { ReactComponent as Accessory7 } from "./accessory-7.svg";
import { ReactComponent as Accessory8 } from "./accessory-8.svg";
import { ReactComponent as Accessory9 } from "./accessory-9.svg";

export const accessories = [
  null,
  null,
  null,
  Accessory4,
  Accessory5,
  Accessory6,
  Accessory7,
  Accessory8,
  Accessory9,
].map((C, i) => C && <C key={`accessory-${i}`} />);
