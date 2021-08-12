import { PartsKeys } from "./Parts";

export type AvatarState = Record<
  Exclude<PartsKeys, PartsKeys.ACCESSORY>,
  number
> &
  Record<PartsKeys.ACCESSORY, number[]>;
