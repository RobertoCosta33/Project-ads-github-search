import styled from "styled-components";

export const UserBodyBox = styled.div`
  margin-top: 16px;
  padding: 24px;
  box-shadow: 1px 1px 3px #c1c1c1;
  width: 600px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: #bbb;
  word-wrap: break-word;

  overflow-y: scroll;
  height: 100vh;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #bbb;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
  }
`;
