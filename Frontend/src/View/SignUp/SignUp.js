import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./SignUp.css";

import Lawyer_PH from "../Images/PlaceHolders/lawyer_male.jpg";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="SL_SignUp_container">
        <div class="main-card mb-3 card SL_SignUp_card">
          <div class="card-body">
            {/* <h5 class="card-title">Grid Rows</h5> */}
            <div className="SL_SignUp_titleContainer">
              <img alt="" src={Lawyer_PH} />
              <h1 className="SL_C_font">Sign Up</h1>
              <p>Please Sign Up to Continue...</p>
              <hr />
            </div>
            <form class="">
              <div class="form-row">
                <div class="col-md-12">
                  <div class="position-relative form-group">
                    <label for="UserName" class="">
                      Full Name
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
                    <label for="UserName" class="">
                      Email Aaddress
                    </label>
                    <input
                      name="username"
                      id="UserName"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
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
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="password" class="">
                      Confirm Password
                    </label>
                    <input
                      name="cPassword"
                      id="cpassword"
                      type="password"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="position-relative form-check">
                <input
                  name="keepSignUp"
                  id="AgreeTOC"
                  type="checkbox"
                  class="form-check-input"
                />
                <label for="keepMeSignedIn" class="form-check-label">
                  By clicking Sign up you agree to our Terms and conditions
                </label>
              </div>
              <button class="mt-2 mb-4 btn SL_C_bg SL_C_bdr">Sign in</button>
              <div class="position-relative form-group">
                <label for="password" class="">
                  Alredy have an Account <Link to="/signin"> Sign In</Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
