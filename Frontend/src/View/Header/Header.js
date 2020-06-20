import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { setSignOut, setSignIn } from "../../actions/auth";

import "./Header.css";

// images
import Logo_black from "../Images/Logo/Logo2.png";
// import Logo_black from "../Images/Logo/Logo_black_sm.png";
// import Logo_white from '../Images/Logo/Logo_white_sm.png';
// import Logo_blue from '../Images/Logo/Logo_blue_sm.png';

import Lawyer_PH from "../Images/PlaceHolders/lawyer_male.jpg";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      // userData
      user_name: "Jennifer Anniston",
      user_designation: "Atorny at law",
      user_pp:
        "https://i.pinimg.com/736x/d0/f7/c7/d0f7c7195c3f786c548817ff249a629d.jpg",
    };
  }

  render() {
    return (
      <div className="app-header header-shadow">
        {/* ==================================== */}
        {/* =============== Logo =============== */}
        {/* ==================================== */}
        <div className="app-header__logo">
          {/* <div className="SL_header_logo logo-src"> */}
          <div className="SL_header_logo">
            <img alt="SmartLawyer" src={Logo_black} />
          </div>
        </div>

        <div className="app-header__mobile-menu">
          <div>
            <button
              type="button"
              className="hamburger hamburger--elastic mobile-toggle-nav"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>

        <div className="app-header__menu">
          <span>
            <button
              type="button"
              className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span className="btn-icon-wrapper">
                <i className="fa fa-ellipsis-v fa-w-6"></i>
              </span>
            </button>
          </span>
        </div>

        {/* ======================================== */}
        {/* ===============  Content =============== */}
        {/* ======================================== */}
        <div className="app-header__content">
          <div className="app-header-right">
            <div className="header-btn-lg pr-0">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    {this.props.auth.loggedIn ? (
                      <div className="btn-group">
                        <a
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          className="p-0 btn"
                        >
                          <img
                            width="42"
                            className="rounded-circle"
                            src={this.state.user_pp || Lawyer_PH}
                            alt=""
                          />
                          {/* <i className="fa fa-angle-down ml-2 opacity-8"></i> */}
                        </a>
                        <div
                          tabindex="-1"
                          role="menu"
                          aria-hidden="true"
                          className="dropdown-menu dropdown-menu-right"
                        >
                          <button
                            type="button"
                            tabindex="0"
                            className="dropdown-item"
                          >
                            User Account
                          </button>
                          <button
                            type="button"
                            tabindex="0"
                            className="dropdown-item"
                          >
                            SignOut
                          </button>

                          <div tabindex="-1" className="dropdown-divider"></div>
                          <button
                            type="button"
                            tabindex="0"
                            className="dropdown-item"
                            disabled
                          >
                            SmartLawyer v1.0.0
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        className="btn SL_C_font SL_C_bdr"
                        onClick={() => this.props.history.push("/signin")}
                      >
                        Sign In
                      </button>
                    )}
                  </div>
                  {this.props.auth.loggedIn ? (
                    <div className="widget-content-left ml-3 header-user-info">
                      <div className="widget-heading">
                        {this.state.user_name}
                      </div>
                      <div className="widget-subheading">
                        {this.state.user_designation || "N/A"}
                      </div>
                    </div>
                  ) : null}

                  {/* <div className="widget-content-right header-user-info ml-3">
                    <button
                      type="button"
                      className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example"
                    >
                      <i className="fa text-white fa-calendar pr-1 pl-1"></i>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth || {},
});

const mapDispatchToProps = {
  setSignOut,
  setSignIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
