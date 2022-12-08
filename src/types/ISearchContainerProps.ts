import React from "react";

export interface ISearchContainerProps {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
