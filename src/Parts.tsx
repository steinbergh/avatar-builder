import { ReactComponent as Accessory1 } from "./assets/svg/accessory-1.svg";
import { ReactComponent as Accessory2 } from "./assets/svg/accessory-2.svg";
import { ReactComponent as Body1 } from "./assets/svg/body-1.svg";
import { ReactComponent as Body2 } from "./assets/svg/body-2.svg";
import { ReactComponent as Eyes1 } from "./assets/svg/eyes-1.svg";
import { ReactComponent as Eyes2 } from "./assets/svg/eyes-2.svg";
import { ReactComponent as Face1 } from "./assets/svg/face-1.svg";
import { ReactComponent as Face2 } from "./assets/svg/face-2.svg";
import { ReactComponent as Hair1 } from "./assets/svg/hair-1.svg";
import { ReactComponent as Hair2 } from "./assets/svg/hair-2.svg";
import { ReactComponent as Mouth1 } from "./assets/svg/mouth-1.svg";
import { ReactComponent as Mouth2 } from "./assets/svg/mouth-2.svg";
import { ReactComponent as Nose1 } from "./assets/svg/nose-1.svg";
import { ReactComponent as Nose2 } from "./assets/svg/nose-2.svg";
import React from "react";

export enum PartsKeys {
  BG = "bg",
  BODY = "body",
  FACE = "face",
  HAIR = "hair",
  EYES = "eyes",
  NOSE = "nose",
  MOUTH = "mouth",
  ACCESSORY = "accessory",
  SKIN_TONE = "skinTone",
}

type PartsKeysParams = Exclude<PartsKeys, PartsKeys.SKIN_TONE | PartsKeys.BG>;

type PartsMap = Record<PartsKeysParams, React.ReactNode[]>;

const partsMap = (key: PartsKeys, index: number): PartsMap => ({
  accessory: [
    <Accessory1 key={`${key}-${index}`} />,
    <Accessory2 key={`${key}-${index}`} />,
  ],
  body: [<Body1 key={`${key}-${index}`} />, <Body2 key={`${key}-${index}`} />],
  eyes: [<Eyes1 key={`${key}-${index}`} />, <Eyes2 key={`${key}-${index}`} />],
  face: [<Face1 key={`${key}-${index}`} />, <Face2 key={`${key}-${index}`} />],
  hair: [<Hair1 key={`${key}-${index}`} />, <Hair2 key={`${key}-${index}`} />],
  mouth: [
    <Mouth1 key={`${key}-${index}`} />,
    <Mouth2 key={`${key}-${index}`} />,
  ],
  nose: [<Nose1 key={`${key}-${index}`} />, <Nose2 key={`${key}-${index}`} />],
});

export const getPart = (key: PartsKeysParams, index: number) =>
  partsMap(key, index)?.[key]?.[index];
