import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layouts/Manage";
import { connect } from "react-redux";
import {
  linkList,
  setLinkToRemove,
  linkRemove,
} from "../../../actions/LinksActions";

const Links = ({
  links,
  linkList,
  linkToRemove,
  linkRemove,
  setLinkToRemove,
}) => {
  useEffect(() => {
    linkList();
  }, [linkList]);

  const cancelDelete = (e) => setLinkToRemove(null);
  const confirmDelete = (e) => {
    if (linkToRemove) {
      linkRemove(linkToRemove);
    }
  };

  return (
    <Layout>
      <div className="row">
        <div className="col">
          <h2 className="text-primary font-weight-bold">Your Links</h2>
        </div>
        <div className="col text-right align-self-bottom pt-2">
          <Link
            to="/manage/links/create"
            className="btn btn-primary font-weight-bold"
          >
            Add
          </Link>
        </div>
      </div>
      {links && links.length
        ? links.map((link) => {
            const deleteClick = (e) => setLinkToRemove(link);

            const boder =
              linkToRemove && linkToRemove.id === link.id
                ? "border border-danger rounded"
                : "border border-transparent";

            return (
              <div className="mt-2" key={link.id}>
                <div
                  className={`shadow pb-2 pt-2 pl-3 pr-3 d-flex flex-row justify-content-between ${boder}`}
                >
                  {/* <div className="pr-3">
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Link icon"
                    />
                  </div> */}
                  <div className="align-self-center">
                    <a href={link.url} target="_blank" rel="noreferrer">
                      <strong className="text-primary clearfix">
                        {link.label}
                      </strong>
                    </a>
                  </div>
                  <div className="ml-auto p-2 clearfix">
                    <Link
                      className="btn btn-primary font-weight-bold"
                      to={`/manage/links/edit/${link.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="ml-2 btn btn-primary font-weight-bold"
                      onClick={deleteClick}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : null}
      {!!linkToRemove ? (
        <div className="alert alert-danger rounded float-center shadow-bold">
          <h4 className="alert-heading">Delete Confirmation!</h4>
          <p>Are you sure you want do delete, this action cannot be undone</p>
          <hr />
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-light" onClick={cancelDelete}>
              Cancel
            </button>
            <button className="btn btn-danger" onClick={confirmDelete}>
              Delete
            </button>
          </div>
        </div>
      ) : null}
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return {
    links: state.link.links,
    linkToRemove: state.link.linkToRemove,
  };
};

export default connect(mapStateToProps, {
  linkList,
  setLinkToRemove,
  linkRemove,
})(Links);
