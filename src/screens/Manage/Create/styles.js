import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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
  margin-top: 2rem;
  button {
    margin-right: 30px;
  }
`;
