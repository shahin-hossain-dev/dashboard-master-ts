import { Card as AntCard, CardProps as AntCardProps } from "antd";
import { ReactNode } from "react";

interface TCardProps extends AntCardProps {
  children?: ReactNode;
  title?: string;
  className?: string;
}

const Card = ({
  title = "",
  children,
  extra,
  variant = "outlined",
  className = "",
  ...props
}: TCardProps) => {
  return (
    <AntCard
      title={title}
      extra={extra}
      className={`!shadow ${className}`}
      variant={variant}
      {...props}
    >
      {children}
    </AntCard>
  );
};

export default Card;
