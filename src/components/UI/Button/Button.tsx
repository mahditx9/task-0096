import { FC } from "react";
import { ButtonProps } from ".";
import { LocalIcon } from "../LocalIcon";
import { Link } from "react-router-dom";
export const Button: FC<ButtonProps> = ({
  path,
  className = "",
  children,
  onClick = () => {},
  type = "normal",
  btnType = "button",
  disable = false,
  icon,
  iconClass,
}) => {
  // Base button class that each button should have
  const baseClass = `max-mobile:text-sm text-base font-semibold font-medium text-center text text-white  rounded-ld p-1 transition ease-in duration-300 cursor-pointer ${
    disable
      ? "disabled:!cursor-not-allowed disabled:!bg-gray-dark text-dark"
      : ""
  } ${className}`;

  // Button styles
  const successBtn = `bg-green-dark hover:bg-green-light ${baseClass}`;
  const dangerBtn = `bg-danger-light hover:bg-danger-dark ${baseClass}`;
  const infoBtn = `bg-gradient-to-b from-blue-dark to-blue-light hover:from-blue-light hover:to-blue-dark ${baseClass}`;
  const orangeGold = `bg-gradient-to-b from-[#FFC107] from-[14%] to-[#FD7E14] to-[75%] hover:from-[#FD7E14]  hover:to-[#FFC107]  ${baseClass}`;

  // Styles by button type
  const ButtonStyles: Record<string, string> = {
    success: successBtn,
    normal: `${baseClass} ${className}`,
    danger: dangerBtn,
    info: infoBtn,
    orangeGold: orangeGold,
  };

  if (path) {
    return icon ? (
      <Link
        to={path || "#"}
        className={`flex items-center gap-1.5 ${
          ButtonStyles[type] || ButtonStyles["normal"]
        }`}
      >
        <LocalIcon iconType={icon} className={iconClass} />
        {children && children}
      </Link>
    ) : (
      <Link
        to={path || "#"}
        className={ButtonStyles[type] || ButtonStyles["normal"]}
      >
        {children && children}
      </Link>
    );
  } else {
    return icon ? (
      <button
        className={`flex items-center gap-1.5 ${
          ButtonStyles[type] || ButtonStyles["normal"]
        }`}
        onClick={onClick}
        disabled={disable}
        type={btnType}
      >
        <LocalIcon iconType={icon} className={iconClass} />
        {children && children}
      </button>
    ) : (
      <button
        className={ButtonStyles[type] || ButtonStyles["normal"]}
        onClick={onClick}
        disabled={disable}
        type={btnType}
      >
        {children && children}
      </button>
    );
  }
};
