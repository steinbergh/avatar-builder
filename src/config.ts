import { PartsKeys } from "Parts";
import { mouths } from "./assets/svg/mouth";
import { bodies } from "./assets/svg/body";
import { eyes } from "./assets/svg/eyes";
import { faces } from "./assets/svg/face";
import { noses } from "./assets/svg/nose";
import { hair } from "./assets/svg/hair";
import { accessories } from "./assets/svg/accessory";

export const skinTones = [
  "#f9d0b4",
  "#f2be97",
  "#e0a585",
  "#cc816d",
  "#bf6f52",
  "#a85845",
  "#5e362b",
  "#563128",
];

export const bgColors = [
  "#645ba5",
  "#ff9c4a",
  "#ea2a74",
  "#25c191",
  "#00bbf0",
  "#c65500",
  "#9e154d",
  "#251b68",
];

export const shirtColors = [
  "#ffffff",
  "#b6c7d4",
  "#186f9b",
  "#7d77c9",
  "#00204a",
  "#087f51",
  "#e25495",
  "#0f1d2b",
];

export const hairColors = [
  "#91a3b0",
  "#edca96",
  "#ddb95f",
  "#e5955e",
  "#bc221b",
  "#6d3f19",
  "#3a2522",
  "#000000",
  "#e25495",
  "#4bbdea",
  "#993d810",
];

export const config = {
  copy: {
    title: "Commission tracking made for you",
    body: [
      "Create your avatar to experience what it’s like to build comp plans and forecast sales in QuotaPath – easy as a few clicks!  Whether you’re a sales rep, sales leader, revenue operations, or finance, our solution is as custom and creative as you are.",
    ],
    buttons: {
      saveAndEmail: "Email",
      printNow: "Print Sticker →",
    },
  },
  buttons: [
    {
      label: "Accessories",
      values: accessories.map((_, i) => i),
      key: PartsKeys.ACCESSORY,
    },
  ],
  sliders: [
    {
      label: "Skin Tone",
      values: new Array(skinTones.length),
      key: PartsKeys.SKIN_TONE,
    },
    {
      label: "Face Shape",
      values: new Array(faces.length),
      key: PartsKeys.FACE,
    },
    {
      label: "Hair Style",
      values: new Array(hair.length),
      key: PartsKeys.HAIR,
    },
    {
      label: "Hair Color",
      values: new Array(hairColors.length),
      key: PartsKeys.HAIR_COLOR,
    },
    {
      label: "Eyes & Brows",
      values: new Array(eyes.length),
      key: PartsKeys.EYES,
    },
    { label: "Nose", values: new Array(noses.length), key: PartsKeys.NOSE },
    {
      label: "Mouth",
      values: new Array(mouths.length),
      key: PartsKeys.MOUTH,
    },
    { label: "Body", values: new Array(bodies.length), key: PartsKeys.BODY },
    {
      label: "Shirt Color",
      values: new Array(shirtColors.length),
      key: PartsKeys.SHIRT_COLOR,
    },
    {
      label: "Background",
      values: new Array(bgColors.length),
      key: PartsKeys.BG,
    },
  ],
};
