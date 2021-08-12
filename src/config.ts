import { PartsKeys } from "Parts";

export const skinTones = [
  "#F9D0B4",
  "#F2BE97",
  "#E0A585",
  "#CC816D",
  "#BF6F52",
  "#A85845",
  "#5E362B",
  "#563128",
];

export const bgColors = [
  "#7D77C9",
  "#645BA5",
  "#FCB17E",
  "#FF9C4A",
  "#E25495",
  "#EA2A74",
  "#2BE28A",
  "#25C191",
  "#4BBDEA",
  "#2E97CC",
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
    { label: "Face Shape", values: new Array(2), key: PartsKeys.FACE },
    { label: "Hair Syle", values: new Array(2), key: PartsKeys.HAIR },
    // { label: "Hair Color", values: new Array(2), key: "hair-color" },
    { label: "Eyes & Brows", values: new Array(2), key: PartsKeys.EYES },
    { label: "Nose", values: new Array(2), key: PartsKeys.NOSE },
    { label: "Mouth", values: new Array(2), key: PartsKeys.MOUTH },
    // { label: "Facial Hair", values: new Array(2), key: "facial-hair" },
    { label: "Body", values: new Array(2), key: PartsKeys.BODY },
    // { label: "Shirt Color", values: new Array(2), key: "shirt-color" },
    {
      label: "Background",
      values: new Array(bgColors.length),
      key: PartsKeys.BG,
    },
  ],
};
