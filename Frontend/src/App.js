import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import ProtectedRoute from "./View/ProtectedRoute/ProtectedRoute";
// Redux
import { connect } from "react-redux";
import { setSignOut, setSignIn } from "./actions/auth";

// redux
// import { useSelector, useDispatch } from "react-redux";
// redux actions
// import { setSignIn, setSignOut } from "./actions/auth";

// controllers
import C_User from "./Controllers/controller.user";

// styles
import "./App.css";
import "./default.css";
import "./View/Assets/main.css";

import Header from "./View/Header/Header";
import SideBar from "./View/SideBar/SideBar";
import SignIn from "./View/SignIn/SignIn";
import SignUp from "./View/SignUp/SignUp";

import Dashboard from "./View/Dashboard/Dashboard";

// redux states
// const auth = useSelector((state) => state.auth);
// const dispatch = useDispatch();

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <Router>
          <Route exact strict render={(props) => <Header {...props} />} />

          <div className="app-main">
            {this.props.auth.loggedIn ? (
              <Route exact strict render={(props) => <SideBar {...props} />} />
            ) : null}
            {/* <ProtectedRoute exact strict component={SideBar} /> */}
            <Switch>
              {/* ======================================= */}
              {/* =============== Sign In =============== */}
              {/* ======================================= */}
              <Route
                exact
                strict
                path="/signin"
                render={(props) => <SignIn {...props} />}
              />
              <Route
                exact
                strict
                path="/signup"
                render={(props) => <SignUp {...props} />}
              />

              {/* Components with sidebar */}
              <div className="app-main__outer">
                <div className="app-main__inner">
                  {/* ====================================== */}
                  {/* =============== Routes =============== */}
                  {/* ====================================== */}

                  <ProtectedRoute
                    path="/my/dashboard"
                    exact
                    strict
                    component={Dashboard}
                  />
                </div>
              </div>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

// export default App;

const mapStateToProps = (state) => ({
  auth: state.auth || {},
});

const mapDispatchToProps = {
  setSignOut,
  setSignIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
