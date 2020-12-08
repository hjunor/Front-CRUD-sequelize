import React from "react";
import { connect } from "react-redux";
import { getFormData } from "../../../helpers/form";
import Layout from "../../Layouts/Manage";
import { linkCreate, linkCreateClear } from "../../../actions/LinksActions";
import { Redirect } from "react-router-dom";
import FormGroup from "../../../components/FormGroup";
import FormCheck from "../../../components/FormCheck";

const Create = ({ linkNew, linkCreate, linkCreateClear }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = getFormData(e);
    linkCreate(data);
  };
  console.log("*** Link new 2", linkNew);

  if (!!linkNew) {
    linkCreateClear(linkNew);

    return <Redirect to="/manage/links" />;
  }

  return (
    <Layout>
      <h2 className="text-primary font-weight-bold">Create</h2>
      <div>
        <form onSubmit={submitHandler}>
          <FormGroup label="Label" name="label" type="text" />
          <FormGroup label="Url" name="url" type="text" />
          <FormCheck label="isSocial" name="isSocial" />

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
  return { linkNew: state.link.linkNew };
};
export default connect(mapStateToProps, { linkCreateClear, linkCreate })(
  Create
);
