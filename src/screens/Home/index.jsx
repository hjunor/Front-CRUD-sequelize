import React from "react";
import ButtonLink from "../../components/ButtonLink/index";

import { WraperButton, Container, Image, Text } from "./styles";

const Home = () => {
  return (
    <Image>
      <Container>
        <Text>
          <h1>Hero Link</h1>
          <p>
            Melhor lugar para tem um portifolio de links dos seus trabalhos ou
            estudos, quardar lugares onde você nunca mais vai esquecer de
            lembrar de maneira facil.
          </p>
        </Text>
        <WraperButton>
          <ButtonLink color="#FFF" name="sign-in" title="Sign In" />
          <div />
          <ButtonLink color="#fff" name="sign-up" title="Sign Up" />
        </WraperButton>
      </Container>
    </Image>
  );
};

export default Home;
