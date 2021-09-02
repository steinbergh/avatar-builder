import { bgColors, skinTones, shirtColors, hairColors } from "config";
import randomItem from "random-item";
import uniqueRandom from "unique-random";
import randomInteger from "random-int";
import { mouths } from "../assets/svg/mouth";
import { bodies } from "../assets/svg/body";
import { eyes } from "../assets/svg/eyes";
import { faces } from "../assets/svg/face";
import { noses } from "../assets/svg/nose";
import { hair } from "../assets/svg/hair";
import { accessories } from "assets/svg/accessory";

const accessoryIds = accessories.map((_, i) => i);
const randomBg = uniqueRandom(0, bgColors.length - 1);
const randomSkinTone = uniqueRandom(0, skinTones.length - 1);
const randomShirtColor = uniqueRandom(0, shirtColors.length - 1);
const randomMouth = uniqueRandom(0, mouths.length - 1);
const randomFace = uniqueRandom(0, faces.length - 1);
const randomBody = uniqueRandom(0, bodies.length - 1);
const randomEyes = uniqueRandom(0, eyes.length - 1);
const randomNose = uniqueRandom(0, noses.length - 1);
const randomHair = uniqueRandom(0, hair.length - 1);
const randomHairColor = uniqueRandom(0, hairColors.length - 1);

export const randomizedAvatar = () => ({
  bg: randomBg(),
  body: randomBody(),
  face: randomFace(),
  hair: randomHair(),
  eyes: randomEyes(),
  nose: randomNose(),
  mouth: randomMouth(),
  accessory: randomItem
    .multiple(accessoryIds, randomInteger(0, accessories.length))
    .filter((item, index) => accessoryIds.indexOf(item) === index),
  skinTone: randomSkinTone(),
  shirtColor: randomShirtColor(),
  hairColor: randomHairColor(),
});
