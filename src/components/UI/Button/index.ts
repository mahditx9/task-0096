export * from "./Button";
import { IconsType } from "@/assets";
import { ReactNode } from "react";

export interface ButtonProps {
  path?: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: "success" | "danger" | "info" | "normal" | "orangeGold";
  btnType?: "button" | "submit" | "reset";
  disable?: boolean;
  icon?: IconsType;
  iconClass?: string;
}

export * from "./Button";
