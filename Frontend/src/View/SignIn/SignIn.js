import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { setSignOut, setSignIn } from "../../actions/auth";

import "./SignIn.css";

import Lawyer_PH from "../Images/PlaceHolders/lawyer_male.jpg";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleSignIn(e) {
    e.preventDefault();

    this.props.setSignIn("DummeyToken", "Rahal Amrith");

    this.props.history.push("/my/dashboard");
  }

  render() {
    return (
      <div className="SL_SignIn_container">
        <div class="main-card mb-3 card SL_SignIn_card">
          <div class="card-body">
            {/* <h5 class="card-title">Grid Rows</h5> */}
            <div className="SL_SignIn_titleContainer">
              <img alt="" src={Lawyer_PH} />
              <h1 className="SL_C_font">Sign In</h1>
              <p>Please Sign in to Continue</p>
              <hr />
            </div>
            <form onSubmit={(e) => this.handleSignIn(e)}>
              <div class="form-row">
                <div class="col-md-12">
                  <div class="position-relative form-group">
                    <label for="UserName" class="">
                      Username / Email Aaddress
                    </label>
                    <input
                      name="username"
                      id="UserName"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="position-relative form-group">
                    <label for="password" class="">
                      Password
                    </label>
                    <input
                      name="password"
                      id="password"
                      type="password"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="position-relative form-check">
                <input
                  name="keepSignIn"
                  id="keepMeSignedIn"
                  type="checkbox"
                  class="form-check-input"
                />
                <label for="keepMeSignedIn" class="form-check-label">
                  Keep Me Signed In
                </label>
              </div>
              <button class="mt-2 mb-4 btn SL_C_bg SL_C_bdr">Sign in</button>
              <div class="position-relative form-group">
                <label for="password" class="">
                  Do not have an Account <Link to="/signup"> Sign Up</Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// export default SignIn;

const mapStateToProps = (state) => ({
  auth: state.auth || {},
});

const mapDispatchToProps = {
  setSignOut,
  setSignIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
