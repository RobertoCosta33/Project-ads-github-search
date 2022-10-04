import styled from "styled-components";

export const Button = styled.button`
  padding: 8px;
  width: 100px;
  border: none;
  background-color: #800080;
  border-radius: 4px;
  color: #fff;
  transition: 0.6s;
  &:hover {
    background-color: #ff00ff;
    color: #00ffff;
    cursor: pointer;
  }
`;
