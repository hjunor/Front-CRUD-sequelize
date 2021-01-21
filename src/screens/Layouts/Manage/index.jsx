import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signOut } from "../../../actions/AccountActions";
import { Container, Wrapper, Links, WrapperChildren } from "./styles";
import Button from "../../../components/Button";
import ButtonLink from "../../../components/ButtonLink";

const Layout = ({ children, signOut, account }) => {
  if (!account) {
    return <Redirect to="/home" />;
  }
  const signOutHandler = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <Container>
      <Wrapper>
        <Links to="/manage/links">Links: {account.email}</Links>
        <div>
          <ButtonLink name="manage/links/create" title="Add" width="100px" />
          <Button
            name="Exit"
            title="Exit"
            width="100px"
            height="40px"
            handler={signOutHandler}
          />
        </div>
      </Wrapper>
      <WrapperChildren>{children}</WrapperChildren>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { account: state.account.account };
};
export default connect(mapStateToProps, { signOut })(Layout);
