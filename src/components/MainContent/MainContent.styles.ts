import styled, { css } from "styled-components";

export const MainBox = styled.div`
  background-color: #f1f1f1;
  margin: 48px auto;
  padding: 12px;
  width: 720px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserInfosBox = styled.div`
  padding: 8px;
  border-radius: 4px;
  box-shadow: 1px 1px 2px #000;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.6;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StarsBox = styled.div`
  margin: 12px 0;
  padding: 6px;
  box-shadow: 1px 1px 2px #000;
  width: 148px;
  border-radius: 4px;
  text-align: center;
  background-color: #ccc;
`;

export const Load = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #800080;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  margin-top: 24px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

type ErrorProps = {
  hasError: boolean;
};

export const Error = styled.span<ErrorProps>`
  ${({ hasError }) => css`
    color: ${hasError && "red"};
  `}
`;
