import React from "react";
import { ReactComponent as Hair1 } from "./hair-1.svg";
import { ReactComponent as Hair2 } from "./hair-2.svg";
import { ReactComponent as Hair3 } from "./hair-3.svg";
import { ReactComponent as Hair4 } from "./hair-4.svg";
import { ReactComponent as Hair5 } from "./hair-5.svg";
import { ReactComponent as Hair6 } from "./hair-6.svg";
import { ReactComponent as Hair7 } from "./hair-7.svg";
import { ReactComponent as Hair8 } from "./hair-8.svg";

export const hair = [
  Hair1,
  Hair2,
  Hair3,
  Hair4,
  Hair5,
  Hair6,
  Hair7,
  Hair8,
].map((C, i) => <C key={`hair-${i}`} />);
