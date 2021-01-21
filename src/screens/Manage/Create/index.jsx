import React from "react";
import { connect } from "react-redux";
import { getFormData } from "../../../helpers/form";
import Layout from "../../Layouts/Manage";
import { linkCreate, linkCreateClear } from "../../../actions/LinksActions";
import { Redirect } from "react-router-dom";
import FormGroup from "../../../components/FormGroup";
import FormCheck from "../../../components/FormCheck";
import { Container, Text, WrapperButton } from "./styles";
import Button from "../../../components/Button";
import ButtonLink from "../../../components/ButtonLink";
const Create = ({ linkNew, linkCreate, linkCreateClear }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = getFormData(e);
    linkCreate(data);
  };

  if (!!linkNew) {
    linkCreateClear(linkNew);

    return <Redirect to="/manage/links" />;
  }

  return (
    <Layout>
      <Container>
        <Text>Create</Text>
        <div>
          <form onSubmit={submitHandler}>
            <FormGroup label="Label" name="label" type="text" width="75vh" />
            <FormGroup label="Url" name="url" type="text" width="75vh" />
            <FormCheck label="isSocial" name="isSocial" />

            <WrapperButton>
              <Button
                name="ok"
                color="#FFF"
                title="Ok"
                type="submit"
                width="15vh"
              />
              <ButtonLink
                name="manage/links"
                color="#FFF"
                title="voltar"
                width="15vh"
              />
            </WrapperButton>
          </form>
        </div>
      </Container>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return { linkNew: state.link.linkNew };
};
export default connect(mapStateToProps, { linkCreateClear, linkCreate })(
  Create
);
