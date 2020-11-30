import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "./SignUpActions";

const SignUp = ({ signUp, account }) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    signUp(data);
  };

  return (
    <div className="container h-100  pt-5">
      <h3>Sign Up</h3>
      <div className="d-flex flex-column h-100 ">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              placeholder="email@exemplo.com"
              type="email"
              className="form-control"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              placeholder="********"
              type="password"
              className="form-control"
              name="password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password Confirmation</label>
            <input
              placeholder="********"
              type="password"
              className="form-control"
              name="password_confirmation"
            />
          </div>
          <div>
            <button className="btn btn-primary btn-round" type="submit">
              ok
            </button>
          </div>
        </form>
        <div className="container text-center fixed-botto pb-5">
          <div className="text-muted">Already have an Account</div>
          <Link to="/sign-in">Sing In</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { account: state.signUp.account };
};
export default connect(mapStateToProps, { signUp })(SignUp);
