import { FC } from "react";
import { Input } from "./InputSearch.styles";
import { IInputSeacrhProps } from "../../types";

export const InputSearch: FC<IInputSeacrhProps> = ({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <Input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
