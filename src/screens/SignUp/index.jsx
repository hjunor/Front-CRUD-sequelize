import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../actions/AccountActions";
import { getFormData } from "../../helpers/form";
import {
  Container,
  Label,
  WrapperLabel,
  WrapperButton,
  WrapperText,
  Text,
  TextHelp,
  Links,
} from "./styles";
import Input from "../../components/Input";
import Button from "../../components/ButtonLink";
const SignUp = ({ signUp, account }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = getFormData(e);
    signUp(data);
  };

  if (account) {
    return <Redirect to="/manage/links" />;
  }

  return (
    <Container>
      <Text>Sign Up</Text>
      <form onSubmit={submitHandler}>
        <WrapperLabel>
          <Label>Email</Label>
          <Input
            placeholder="email@exemplo.com"
            type="email"
            name="email"
            width="75vh"
          />
        </WrapperLabel>
        <WrapperLabel>
          <Label>Senha</Label>
          <Input
            placeholder="********"
            type="password"
            name="password"
            width="75vh"
          />
        </WrapperLabel>
        <WrapperLabel>
          <Label>Confirmar Senha</Label>
          <Input
            placeholder="********"
            type="password"
            name="password_confirmation"
            width="75vh"
          />
        </WrapperLabel>
        <WrapperButton>
          <Button name="ok" color="#FFF" title="Ok" type="submit">
            ok
          </Button>
        </WrapperButton>
      </form>
      <WrapperText>
        <TextHelp>Already have an Account</TextHelp>
        <Links to="/sign-in">Sing in</Links>
      </WrapperText>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { account: state.account.account };
};
export default connect(mapStateToProps, { signUp })(SignUp);
