import { Form, FormItemProps, Input, InputProps } from "antd";
import { Rule } from "rc-field-form/lib/interface";

interface TFormItemProps extends Omit<FormItemProps, "rules"> {
  label?: string;
  name?: string;
  rules?: Rule[];
  required?: boolean;
  message?: string;
  className?: string;
  inputClassName?: string;
  onChange?: InputProps["onChange"];
  placeholder?: string;
  size?: InputProps["size"];
  disabled?: boolean;
  readOnly?: boolean;
  value?: string;
}

const FormItem = ({
  label = "",
  name = "",
  rules,
  required = false,
  message = "",
  className = "",
  inputClassName = "",
  onChange,
  placeholder = "",
  size = "middle",
  disabled = false,
  readOnly = false,
  value = "",
}: TFormItemProps) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: required, message: message, ...rules }]}
      className={`!w-full ${className} `}
    >
      <Input
        name={name}
        size={size}
        className={`!w-full ${inputClassName}`}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        value={value}
      />
    </Form.Item>
  );
};

export default FormItem;
