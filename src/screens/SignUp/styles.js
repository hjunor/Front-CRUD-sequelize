import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Label = styled.label`
  margin: 0.6rem 0 0.6rem 0;

  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
`;
export const WrapperLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
`;
export const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  font-size: 4vh;
  margin-top: 30px;
`;
export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const WrapperText = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const TextHelp = styled.div`
  color: ${(props) => props.theme.colors.text};
  margin-right: 5px;
`;

export const Links = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  :hover {
    color: ${(props) => props.theme.colors.secundary};
  }
`;
