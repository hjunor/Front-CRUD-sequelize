import styled from "styled-components";

export const GetButton = styled.button`
  color: ${(props) => props.theme.colors.buttonText};
  background-color: ${(props) => props.theme.colors.button};
  border: none;
  padding: 9px;
  border-radius: 8px;
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "40px")};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
