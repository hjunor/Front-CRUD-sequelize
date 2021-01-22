import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

 html{
       font-size: 65.5%;

 }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  a{
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  }
  body{
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: sans-serif;
    width: 100%;
    font-size: 1.6rem;

  }
`;
