import { IconType } from "react-icons";

type TIconProps = {
  icon: IconType;
  className: string;
  size?: string | number;
};

const Icon = ({
  icon: IconComponent,
  className = "",
  size = "1rem",
  ...props
}: TIconProps) => {
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} {...props} />;
};

export default Icon;
