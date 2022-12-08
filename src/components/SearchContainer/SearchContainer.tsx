import { FC } from "react";
import { ISearchContainerProps } from "../../types/ISearchContainerProps";
import { InputSearch } from "../InputSearch";
import { SearchButton } from "../SearchButton";
import { SearchBox } from "./SearchContainer.styles";

export const SearchContainer: FC<ISearchContainerProps> = ({
  type,
  name,
  placeholder,
  id,
  value,
  onChange,
  onClick,
  onKeyDown,
}) => {
  return (
    <SearchBox>
      <InputSearch
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <SearchButton onClick={onClick}>Buscar</SearchButton>
    </SearchBox>
  );
};
