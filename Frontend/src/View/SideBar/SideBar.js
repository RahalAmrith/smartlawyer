import React, { Component } from "react";

import "./SideBar.css";

// images
import Logo_black from "../Images/Logo/Logo_black_sm.png";
import { NavLink } from "react-router-dom";

class SideBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app-sidebar sidebar-shadow">
        {/* ========================= */}
        {/* Mobile menu Toggle button */}
        {/* ========================= */}
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

        {/* =============== */}
        {/* SideBar Content */}
        {/* =============== */}
        <div className="scrollbar-sidebar">
          <div className="app-sidebar__inner">
            <ul className="vertical-nav-menu">
              <li className="app-sidebar__heading">Dashboard</li>
              <li>
                <NavLink to="/my/dashboard" activeClassName="mm-active"  activeClassName="mm-active">
                  <i className="metismenu-icon fas fa-chart-line"></i>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/my/search" activeClassName="mm-active" >
                  <i className="metismenu-icon fas fa-search"></i>
                  Search
                </NavLink>
              </li>

              <li className="app-sidebar__heading">Office</li>

              <li>
                <NavLink to="/my/cases" activeClassName="mm-active" >
                  <i className="metismenu-icon far fa-folder-open"></i>
                  Cases
                </NavLink>
              </li>
              <li>
                <NavLink to="/my/clients" activeClassName="mm-active" >
                  <i className="metismenu-icon fas fa-user"></i>
                  Clients
                </NavLink>
              </li>
              <li>
                <NavLink to="/my/calender" activeClassName="mm-active" >
                  <i className="metismenu-icon far fa-calendar-alt"></i>
                  Calender
                </NavLink>
              </li>
              <li className="app-sidebar__heading">Account</li>
              <li>
                <NavLink to="/my/settings" activeClassName="mm-active" >
                  <i className="metismenu-icon fas fa-user-cog"></i>
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink to="/signout" activeClassName="mm-active">
                  <i className="metismenu-icon fas fa-sign-out-alt"></i>
                  Sign Out
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
