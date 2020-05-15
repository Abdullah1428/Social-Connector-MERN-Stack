import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

// nav bar
import Navbar from "./components/layout/Navbar";
// landing
import Landing from "./components/layout/Landing";
// login and register
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

// dashboard
import Dashboard from "./components/dashboard/Dashboard";
// all profiles
import Profiles from "./components/profiles/Profiles";
// profile by id
import Profile from "./components/profile/Profile";

// profile form
import CreateProfile from "./components/profile-forms/CreateProfile";
// edit profile
import EditProfile from "./components/profile-forms/EditProfile";
// add experience
import AddExperience from "./components/profile-forms/AddExperience";
// add education
import AddEducation from "./components/profile-forms/AddEducation";

// get posts
import Posts from "./components/posts/Posts";

// private Route
import PrivateRoute from "./components/routing/PrivateRoute";

// alert component
import Alert from "./components/layout/Alert";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
              <PrivateRoute exact path="/posts" component={Posts} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
