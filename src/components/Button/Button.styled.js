import styled from "styled-components";

export const MyButton = styled.button`
  background-color: white;
  border: 1px solid black;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.3s;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: black;
    color: white;
  }
`;
