import React, { useEffect } from "react";
import Layout from "../../Layouts/Manage";
import { useParams } from "react-router-dom";
import { linkGet, linkUpdate } from "../../../actions/LinksActions";
import { connect } from "react-redux";
import { getFormData } from "../../../helpers/form";
import FormGroup from "../../../components/FormGroup";
import FormCheck from "../../../components/FormCheck";
const Edit = ({ link, linkGet, linkUpdate }) => {
  const { id } = useParams();

  useEffect(() => {
    linkGet(id);
  }, [id, linkGet]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = getFormData(e);
    linkUpdate(id, data);
  };

  return (
    <Layout>
      <h3>Edit</h3>
      <div>
        <form onSubmit={submitHandler}>
          <FormGroup label="Label" name="label" data={link} type="text" />
          <FormGroup label="Url" name="url" data={link} type="text" />
          <FormCheck label="isSocial" name="isSocial" data={link} />
          <div>
            <button className="btn btn-primary btn-round" type="submit">
              ok
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return {
    link: state.link.link,
  };
};

export default connect(mapStateToProps, { linkGet, linkUpdate })(Edit);
