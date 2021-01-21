import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signIn } from "../../actions/AccountActions";
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
import Button from "../../components/Button";
const SignIn = ({ account, signIn }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = getFormData(e);
    signIn(data);
  };

  if (account) {
    return <Redirect to="/manage/links" />;
  }
  return (
    <Container>
      <Text>Sing In</Text>
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
        <WrapperButton>
          <Button name="ok" color="#FFF" title="Ok" type="submit" />
        </WrapperButton>
      </form>
      <WrapperText>
        <TextHelp>Don´t have an Account?</TextHelp>
        <Links to="/sign-up">Sing Up</Links>
      </WrapperText>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { account: state.account.account };
};

export default connect(mapStateToProps, { signIn })(SignIn);
