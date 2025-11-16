import { Drawer as AntDrawer, DrawerProps as AntDrawerProps } from "antd";
import { ReactNode } from "react";

interface TDrawerProps extends AntDrawerProps {
  children?: ReactNode;
}

const Drawer = ({
  width = "80%",
  title,
  children,
  open,
  onClose,
  placement = "right",
  ...props
}: TDrawerProps) => {
  return (
    <>
      <AntDrawer
        width={width}
        title={title}
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
        placement={placement}
        {...props}
      >
        {children}
      </AntDrawer>
    </>
  );
};
export default Drawer;
