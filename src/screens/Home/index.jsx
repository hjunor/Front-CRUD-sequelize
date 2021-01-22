import React from "react";
import ButtonLink from "../../components/ButtonLink/index";

import { WraperButton, Container,Text } from "./styles";

const Home = () => {
  return (
    
      <Container>
        <Text>
          <h1>Hero Link</h1>
          <p>
            Melhor lugar para tem um portifolio de links dos seus trabalhos ou
            estudos, quardar lugares onde você nunca mais vai esquecer de
            lembrar de maneira fácil.
          </p>
        </Text>
        <WraperButton>
          <ButtonLink width='200px'  color="#FFF" name="sign-in" title="Sign In" />
          <div />
          <ButtonLink  width='200px'   color="#fff" name="sign-up" title="Sign Up" />
        </WraperButton>
      </Container>
    
  );
};

export default Home;
