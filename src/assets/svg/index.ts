import { BiSolidShow } from "react-icons/bi";
import { FaStarOfLife } from "react-icons/fa6";
import { GrHide } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

export const localIcons = {
  Hide: GrHide,
  Show: BiSolidShow,
  StarSign: FaStarOfLife,
  Logout: CiLogout,
  User: FaUser,
};
export type IconsType = keyof typeof localIcons;
