import { Modal as AntModal, ModalProps as AntModalProps } from "antd";
import Button from "./Button";
import React from "react";

interface TModal extends AntModalProps {
  children?: React.ReactNode;
}

const Modal = ({
  title = "",
  open,
  onOk,
  onCancel,
  children,
  ...props
}: TModal) => {
  return (
    <>
      <AntModal
        title={title}
        closable={{ "aria-label": "Custom Close Button" }}
        open={open}
        onOk={onOk}
        footer={
          <Button onClick={onCancel} type="primary">
            Close
          </Button>
        }
        onCancel={onCancel}
        {...props}
      >
        {children}
      </AntModal>
    </>
  );
};

export default Modal;
