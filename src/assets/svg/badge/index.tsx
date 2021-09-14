import { ReactComponent as Badge1 } from "./badge-1.svg";
import { ReactComponent as Badge2 } from "./badge-2.svg";
import { ReactComponent as Badge3 } from "./badge-3.svg";
import { ReactComponent as Badge4 } from "./badge-4.svg";
import { ReactComponent as Badge5 } from "./badge-5.svg";
import { ReactComponent as Badge6 } from "./badge-6.svg";

export const badges = [
  null,
  Badge1,
  Badge2,
  Badge3,
  Badge4,
  Badge5,
  Badge6,
].map((C, i) => C && <C key={`badge-${i}`} />);
