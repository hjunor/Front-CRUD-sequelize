import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 30vh auto;
  max-width: 980px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 980px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    margin: 3vh auto;
    flex-direction: column;
    width: 100%;
  }
`;


export const Text = styled.div`
  width: 70%;
  h1 {
    font-weight: bold;
    font-size: 6rem;
    color: ${(props) => props.theme.colors.text};
    @media screen and (max-width: 600px) {
      font-size: 4rem;
    }
  }
  p {
    font-size: 22px;
    color: ${(props) => props.theme.colors.text};
    @media screen and (max-width: 600px) {
      margin-top: 12px;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;
export const WraperButton = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  div {
    height: 30px;
  }
`;
