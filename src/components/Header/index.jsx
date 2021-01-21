import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Container, WraperMenu, TextLogo } from "./styles";
import { shade } from "polished";
import logo from "../../styles/assets/logo.svg";

const Header = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <WraperMenu>
        <TextLogo>
          <img src={logo} />
          <p>Hero Link</p>
        </TextLogo>
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          offHandleColor="#333"
          onHandleColor="#fff"
          handleDiameter={20}
          offColor={shade(0.19, colors.primary)}
          onColor={colors.secundary}
        />
      </WraperMenu>
    </Container>
  );
};

export default Header;
