import styled from "styled-components";

export const InputStyles = styled.input`
  background: "#222";
  border: none;
  width: ${(props) => (props.width ? props.width : "50vh")};
  height: ${(props) => (props.height ? props.height : "30px")};
  padding: 20px;
  border-radius: 8px;
  outline: none;

  @media screen and (max-width: 600px) {
    width: 40vh;
  }
`;
