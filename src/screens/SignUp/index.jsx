import React from "react";
import { Link } from "react-router-dom";
// import { Container } from './styles';

const SignUp = () => {
  return (
    <div className="container h-100  pt-5">
      <h3>Sing Up</h3>
      <div className="d-flex flex-column h-100 ">
        <form action="">
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              placeholder="email@exemplo.com"
              type="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Senha</label>
            <input
              placeholder="********"
              type="password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Confirmar senha</label>
            <input
              placeholder="********"
              type="password"
              className="form-control"
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

export default SignUp;
