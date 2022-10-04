import { FC } from "react";
import { IUserBodyProps } from "../../types";
import { UserBodyBox } from "./UserBody.styles";

export const UserBody: FC<IUserBodyProps> = ({ children }) => {
  return (
    <UserBodyBox>
      {children}
    </UserBodyBox>
  );
};
