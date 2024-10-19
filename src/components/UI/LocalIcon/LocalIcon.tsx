import { IconsType, localIcons } from "@/assets";

interface LocalIconInterface {
  iconType: IconsType;
  className?: string;
  onClick?: () => void;
}
export const LocalIcon = ({
  iconType,
  className,
  onClick,
}: LocalIconInterface) => {
  const IconComponent = localIcons[iconType];
  if (!IconComponent) return null;
  return <IconComponent className={` ${className}`} onClick={onClick} />;
};
