import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import ManageLinksCreate from "./screens/Manage/Create";
import ManageLinksEdit from "./screens/Manage/Edit";
import ManageLinks from "./screens/Manage/Links";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { connect } from "react-redux";
import { initAccount } from "./actions/AccountActions";
const App = ({ initAccount }) => {
  useEffect(() => {
    initAccount();
  }, [initAccount]);

  return (
    <Router>
      <div>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/sign-in">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/sign-up">
                Sign up
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/manage/links/create">
                Create Link
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/manage/links/edit">
                Edit Link
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/manage/links">
                Links
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/manage/links/create">
            <ManageLinksCreate />
          </Route>
          <Route path="/manage/links/edit/:id">
            <ManageLinksEdit />
          </Route>
          <Route path="/manage/links">
            <ManageLinks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return { account: state.account.account };
};

export default connect(mapStateToProps, { initAccount })(App);
