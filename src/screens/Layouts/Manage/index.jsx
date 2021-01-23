import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signOut } from "../../../actions/AccountActions";
import Button from "../../../components/Button";
import ButtonLink from "../../../components/ButtonLink";
import { Container, Wrapper, Links, WrapperChildren } from "./styles";


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
          <ButtonLink name="manage/links/create" title="Add" width="100px" min_width="70px"/>
          <Button
            name="Exit"
            title="Exit"
            width="100px"
            height="40px"
            min_width="70px" 
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
