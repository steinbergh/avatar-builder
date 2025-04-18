import { mouths } from "./assets/svg/mouth";
import { bodies } from "./assets/svg/body";
import { eyes } from "./assets/svg/eyes";
import { faces } from "./assets/svg/face";
import { noses } from "./assets/svg/nose";
import { hair } from "./assets/svg/hair";
import React from "react";
import { accessories } from "assets/svg/accessory";
import { badges } from "assets/svg/badge";

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
  SHIRT_COLOR = "shirtColor",
  HAIR_COLOR = "hairColor",
  BADGE = "badge",
}

type PartsKeysParams = Exclude<
  PartsKeys,
  | PartsKeys.SKIN_TONE
  | PartsKeys.BG
  | PartsKeys.SHIRT_COLOR
  | PartsKeys.HAIR_COLOR
>;

type PartsMap = Record<PartsKeysParams, React.ReactNode[]>;

const partsMap = (key: PartsKeys, index: number): PartsMap => ({
  accessory: accessories,
  body: bodies,
  eyes: eyes,
  face: faces,
  hair: hair,
  mouth: mouths,
  nose: noses,
  badge: badges,
});

export const getPart = (key: PartsKeysParams, index: number) =>
  partsMap(key, index)?.[key]?.[index];
