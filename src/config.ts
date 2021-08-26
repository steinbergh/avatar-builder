import { PartsKeys } from "Parts";
import { mouths } from "./assets/svg/mouth";
import { bodies } from "./assets/svg/body";
import { eyes } from "./assets/svg/eyes";
import { faces } from "./assets/svg/face";
import { noses } from "./assets/svg/nose";
import { hair } from "./assets/svg/hair";

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
    title: "Building comp plans in QuotaPath is this fun & simple.",
    body: [
      "Create a Naviagtor to unlock lorem ipsum dolor sit amet. This is placeholder copy our plan builder is just as easy as our plug and play character creator.",
      "The value of QuotaPath is undeniable, give it a go.",
    ],
    buttons: {
      saveAndEmail: "Save & Email",
      printNow: "Print now",
    },
  },
  buttons: [{ label: "Accessories", values: [0, 1], key: PartsKeys.ACCESSORY }],
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
    { label: "Mouth", values: new Array(mouths.length), key: PartsKeys.MOUTH },
    // { label: "Facial Hair", values: new Array(2), key: "facial-hair" },
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
