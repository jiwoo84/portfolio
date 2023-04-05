import { atom } from "recoil";

export const modalContentState = atom<string>({
  key: "modalContentState",
  default: "기본값",
});
