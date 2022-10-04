import { FC } from "react";
import { ISearchButton } from "../../types";
import { Button } from "./SearchButton.styles";

export const SearchButton: FC<ISearchButton> = ({
  children,
  onClick,
}) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
};
