import React from "react";
import { connect } from "react-redux";
import { getFormData } from "../../../helpers/form";
import Layout from "../../Layouts/Manage";
import { linkCreate } from "../../../actions/LinksActions";
import { Redirect } from "react-router-dom";
const Create = ({ link, linkCreate }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = getFormData(e);
    linkCreate(data);
  };
  if (link) {
    return <Redirect to="/manage/links" />;
  }

  console.log("*** create.link", link);
  return (
    <Layout>
      <h3>Create</h3>
      <div>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="">Label</label>
            <input type="text" className="form-control" name="label" required />
          </div>
          <div className="form-group">
            <label htmlFor="">Url</label>
            <input type="url" className="form-control" name="url" required />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input type="checkbox" name="isSocial" />
              <span className="form-check-sign"></span>
              isSocial
            </label>
          </div>
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
  return { link: state.link.link };
};
export default connect(mapStateToProps, { linkCreate })(Create);
