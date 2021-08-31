import React from "react";
import { ReactComponent as Nose1 } from "./nose-1.svg";
import { ReactComponent as Nose2 } from "./nose-2.svg";
import { ReactComponent as Nose3 } from "./nose-3.svg";
import { ReactComponent as Nose4 } from "./nose-4.svg";
import { ReactComponent as Nose5 } from "./nose-5.svg";
import { ReactComponent as Nose6 } from "./nose-6.svg";
import { ReactComponent as Nose7 } from "./nose-7.svg";
import { ReactComponent as Nose8 } from "./nose-8.svg";

export const noses = [
  Nose1,
  Nose2,
  Nose3,
  Nose4,
  Nose5,
  Nose6,
  Nose7,
  Nose8,
].map((C, i) => <C key={`nose-${i}`} />);
