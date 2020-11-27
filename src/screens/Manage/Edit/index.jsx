import React from "react";
import Layout from "../../Layouts/Manage";
// import { Container } from './styles';

const Edit = () => {
  return (
    <Layout>
      <h3>Edit</h3>
      <div>
        <form action="">
          <div className="form-group">
            <label htmlFor="">Label</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Url</label>
            <input type="url" className="form-control" />
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

export default Edit;
