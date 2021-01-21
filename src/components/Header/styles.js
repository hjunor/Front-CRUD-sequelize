import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.primary === "#7E2E84" ? "#fff" : "#333"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const WraperMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 980px;
  height: 60px;
`;
export const TextLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 30px;
  }
  p {
    margin-left: -5px;
    color: ${(props) =>
      props.theme.colors.primary === "#7E2E84" ? "#7E3E84" : "#FFF"};
    font-size: 3vh;
    font-weight: bold;
    margin-bottom: 0px;
  }
`;
