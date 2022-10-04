import styled, { keyframes } from "styled-components";

export const ReferencesUserContainer = styled.div`
  width: 340px;
  padding: 8px;
  box-shadow: 1px 1px 2px #000;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TagName = styled.span`
  margin-top: 8px;
  font-size: 1.4rem;
  text-shadow: 2px 2px 4px #000;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 3px 3px 6px #000;
`;

export const Span = styled.span`
  margin-top: 12px;
  width: 172px;
  word-wrap: break-word;
  font-size: 1.2rem;
`;
