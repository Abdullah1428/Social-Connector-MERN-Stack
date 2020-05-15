import React from "react";
import { Route, Switch } from "react-router-dom";

// login and register
import Login from "../auth/Login";
import Register from "../auth/Register";

// dashboard
import Dashboard from "../dashboard/Dashboard";
// all profiles
import Profiles from "../profiles/Profiles";
// profile by id
import Profile from "../profile/Profile";

// profile form
import CreateProfile from "../profile-forms/CreateProfile";
// edit profile
import EditProfile from "../profile-forms/EditProfile";
// add experience
import AddExperience from "../profile-forms/AddExperience";
// add education
import AddEducation from "../profile-forms/AddEducation";

// get posts
import Posts from "../posts/Posts";
// get single post
import Post from "../post/Post";

// private Route
import PrivateRoute from "../routing/PrivateRoute";

// alert component
import Alert from "../layout/Alert";

// not found component
import NotFound from "../layout/NotFound";

export const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};
