import styled from "styled-components";
import { Link } from "react-router-dom";

export const GetButton = styled.button`
  color: ${(props) => props.theme.colors.buttonText};
  background-color: ${(props) => props.theme.colors.button};
  border: none;
  padding: 9px;
  border-radius: 8px;
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "40px")};
  font-weight: bold;
  @media screen and (max-width: 600px) {
    width: ${(props) => (props.width ? props.width : "700px")};
  }

`;
export const GetLink = styled(Link)`
  color: ${(props) => props.theme.colors.buttonText};
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "40px")};
  @media screen and (max-width: 600px) {
    width: ${(props) => (props.width ? props.width : "70px")};
  }
`;
