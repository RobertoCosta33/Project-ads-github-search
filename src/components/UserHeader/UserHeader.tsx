import { FC } from "react";
import {
  NameImageContainer,
  TagName,
  ReferencesUserContainer,
  Image,
  Span,
} from "./UserHeader.styles";
import { IUserHeaderProps } from "../../types";

export const UserHeader: FC<IUserHeaderProps> = ({ location, name, image }) => {
  return (
    <ReferencesUserContainer>
      <NameImageContainer>
        <Image src={image} alt="Foto do usuário" />
        <TagName>{name}</TagName>
      </NameImageContainer>
      <Span>{location}</Span>
    </ReferencesUserContainer>
  );
};
