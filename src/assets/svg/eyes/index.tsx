import React from "react";
import { ReactComponent as Eyes1 } from "./eyes-1.svg";
import { ReactComponent as Eyes2 } from "./eyes-2.svg";
import { ReactComponent as Eyes3 } from "./eyes-3.svg";
import { ReactComponent as Eyes4 } from "./eyes-4.svg";
import { ReactComponent as Eyes5 } from "./eyes-5.svg";
import { ReactComponent as Eyes6 } from "./eyes-6.svg";
import { ReactComponent as Eyes7 } from "./eyes-7.svg";
import { ReactComponent as Eyes8 } from "./eyes-8.svg";

export const eyes = [
  Eyes1,
  Eyes2,
  Eyes3,
  Eyes4,
  Eyes5,
  Eyes6,
  Eyes7,
  Eyes8,
].map((C, i) => <C key={`eyes-${i}`} />);
