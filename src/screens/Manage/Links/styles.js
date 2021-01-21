import styled from "styled-components";
import { Edit } from "@styled-icons/boxicons-regular";
import { Delete } from "@styled-icons/material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  font-size: 24px;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 120%;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  height: 70px;
  background: ${(props) => props.theme.colors.card};
  margin: 10px;
  border-radius: 8px;

  div {
    width: 100px;
    display: flex;
    justify-content: space-around;
  }
`;
export const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
`;
export const ButtonIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  width: 24px;
  height: 24px;
`;
export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(250, 0, 99);
  width: 60%;
  height: 30%;
  border-radius: 8px;
  position: fixed;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const LinkUp = styled.a`
  width: 70%;
  height: 65px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  border: 4px;
  border-color: ${(props) => props.theme.colors.text};
  border-radius: 8px;
  strong {
    color: ${(props) => props.theme.colors.text};
    font-weight: bold;
    font-size: 20px;
  }
`;

export const IconEdit = styled(Edit)`
  color: ${(props) => props.theme.colors.text};
  :hover {
    color: ${(props) => props.theme.colors.secundary};
  }
`;
export const IconDelete = styled(Delete)`
  color: ${(props) => props.theme.colors.text};
  :hover {
    color: ${(props) => props.theme.colors.secundary};
  }
`;
