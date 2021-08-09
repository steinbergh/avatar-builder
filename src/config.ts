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
  "#00BBF0",
  "#093470",
  // "#00204A",
  // "#EFF4F8",
  "#087F51",
  "#C65500",
  "#9E154D",
  "#014C63",
  "#186F9B",
  "#645BA5",
  "#251B68",
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
  inputs: [
    {
      label: "Skin Tone",
      values: new Array(skinTones.length - 1),
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
    { label: "Accessories", values: new Array(2), key: PartsKeys.ACCESSORY },
    {
      label: "Background",
      values: new Array(bgColors.length - 1),
      key: PartsKeys.BG,
    },
  ],
};
