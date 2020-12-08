import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { signOut } from "../../../actions/AccountActions";

const Layout = ({ children, signOut, account }) => {
  if (!account) {
    return <Redirect to="/sign-in" />;
  }
  const signOutHandler = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div className="layout">
      <nav className="navbar navbar-expand-lg bg-primary text-light">
        <div className="container d-flex w-100 justify-content-between">
          <div>
            <h4 className="font-weight-bold">GerLinks</h4>
          </div>
          <div className="text-center">
            <Link className="text-link font-weight-bold" to="/manege/links">
              Links
            </Link>
          </div>
          <div>
            <button
              className=" btn btn-clear font-weight-bold"
              onClick={signOutHandler}
            >
              Exit
            </button>
          </div>
        </div>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { account: state.account.account };
};
export default connect(mapStateToProps, { signOut })(Layout);
