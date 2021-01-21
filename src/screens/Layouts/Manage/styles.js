import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 8vh;
  background: ${(props) => props.theme.colors.secundary};

  div {
    display: flex;
    width: 250px;
    justify-content: space-between;
  }
`;

export const Links = styled(Link)`
  color: #fff;
  font-weight: bold;
  font-size: 2vh;
  :hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
export const WrapperChildren = styled.div`
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 55.5%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`;
