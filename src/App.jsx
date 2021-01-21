import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import ManageLinksCreate from "./screens/Manage/Create";
import ManageLinksEdit from "./screens/Manage/Edit";
import ManageLinks from "./screens/Manage/Links";

import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

import { connect } from "react-redux";

import { initAccount } from "./actions/AccountActions";
import { ThemeProvider } from "styled-components";

import useTheme from "./utils/useTheme";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyles from "./styles/global";
import Header from "./components/Header";

const App = ({ initAccount }) => {
  useEffect(() => {
    initAccount();
  }, [initAccount]);

  const [theme, setTheme] = useTheme("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />

      <Router>
        <div>
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
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return { account: state.account.account };
};

export default connect(mapStateToProps, { initAccount })(App);
