import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signIn } from "../../actions/AccountActions";

const SignIn = ({ account, signIn }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);
    signIn(data);
  };

  if (account) {
    return <Redirect to="/manage/links" />;
  }
  return (
    <div className="container h-100 pt-5">
      <h3>Sing In</h3>
      <div className="d-flex flex-column h-100">
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
            <label htmlFor="">Senha</label>
            <input
              placeholder="********"
              type="password"
              className="form-control"
              name="password"
            />
          </div>
          <div>
            <button className="btn btn-primary btn-round" type="submit">
              ok
            </button>
          </div>
        </form>
        <div className="container text-center fixed-botto pb-5">
          <div className="text-muted">Don´t have an Account?</div>
          <Link to="/sign-up">Sing Up</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { account: state.account.account };
};

export default connect(mapStateToProps, { signIn })(SignIn);
