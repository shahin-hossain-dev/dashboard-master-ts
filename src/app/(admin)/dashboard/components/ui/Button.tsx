import { Button as AntButton } from "antd";
import { ButtonProps as AntButtonProps } from "antd/es/button/button";
import { FormEventHandler, MouseEventHandler, ReactNode } from "react";

interface TButton extends AntButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onSubmit?: FormEventHandler<HTMLButtonElement>;
  variant?: "filled" | "outlined" | "text";
}

const Button = ({
  children,
  type = "primary",
  size = "middle",
  icon,
  className = "!font-semibold hover:!bg-white hover:!border-black hover:!border hover:!text-black",
  onClick,
  onSubmit,
  variant = "filled",
  color,
  ...props
}: TButton) => {
  return (
    <AntButton
      color={color}
      variant={variant}
      type={type}
      size={size}
      icon={icon}
      className={className}
      onClick={onClick}
      onSubmit={onSubmit}
      {...props}
    >
      {children}
    </AntButton>
  );
};

export default Button;
