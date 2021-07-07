import React, { useEffect } from "react";
import Layout from "../../Layouts/Manage";
import { useParams, Redirect } from "react-router-dom";
import {
  linkGet,
  linkUpdate,
  linkCreateClear,
} from "../../../actions/LinksActions";
import { connect } from "react-redux";
import { getFormData } from "../../../helpers/form";
import FormGroup from "../../../components/FormGroup";
import FormCheck from "../../../components/FormCheck";
import { Container, Text, WrapperButton } from "./styles";
import Button from "../../../components/Button";
const Edit = ({ link, linkNew, linkGet, linkUpdate, linkCreateClear }) => {
  const { id } = useParams();

  useEffect(() => {
    linkGet(id);
  }, [id, linkGet]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = getFormData(e);
    linkUpdate(id, data);
  };

  if (linkNew) {
    linkCreateClear(linkNew);
    return <Redirect to="/manage/links" />;
  }
  return (
    <Layout>
      <Container>
        <Text>Editar Link</Text>

        <form onSubmit={submitHandler}>
          <FormGroup
            label="Label"
            name="label"
            data={link}
            type="text"
            width="75vh"
          />
          <FormGroup
            label="Url"
            name="url"
            data={link}
            type="text"
            width="75vh"
          />
          <FormCheck label="isSocial" name="isSocial" data={link} />
          <WrapperButton>
            <Button
              name="ok"
              color="#FFF"
              title="Ok"
              type="submit"
              width="25vh"
            />
          </WrapperButton>
        </form>
      </Container>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return {
    link: state.link.link,
    linkNew: state.link.linkNew,
  };
};

export default connect(mapStateToProps, {
  linkCreateClear,
  linkGet,
  linkUpdate,
})(Edit);
