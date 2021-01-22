import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 980px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Text = styled.div`
  width: 70%;
  h1 {
    font-weight: bold;
    font-size: 6rem;
    color: ${(props) => props.theme.colors.text};
  }
  p {
    font-size: 22px;
    color: ${(props) => props.theme.colors.text};
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
