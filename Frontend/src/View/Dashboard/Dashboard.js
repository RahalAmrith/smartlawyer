import React, { Component } from "react";

import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* Page Title */}
        <div className="app-page-title">
          <div className="page-title-wrapper">
            <div className="page-title-heading">
              <div className="page-title-icon">
                <i className="pe-7s-notebook icon-gradient bg-mean-fruit"> </i>
              </div>
              <div>
                Cases on next 7 Days
                <div className="page-title-subheading">
                  Bellow Are the Cases Sheduled in Next seven days
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cases in next seven days */}
        <div className="row">
          <div className="col-md-6 col-xl-4">
            <div className="card mb-3 widget-content bg-vicious-stance">
              <div className="widget-content-wrapper text-white">
                <div className="widget-content-left">
                  <div className="widget-heading">Total Cases</div>
                  <div className="widget-subheading">
                    Total Cases on next 7 Days
                  </div>
                </div>
                <div className="widget-content-right">
                  <div className="widget-numbers text-white">
                    <span>68</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card mb-3 widget-content bg-midnight-bloom">
              <div className="widget-content-wrapper text-white">
                <div className="widget-content-left">
                  <div className="widget-heading">Clients</div>
                  <div className="widget-subheading">Total Clients</div>
                </div>
                <div className="widget-content-right">
                  <div className="widget-numbers text-white">
                    <span>126</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card mb-3 widget-content bg-royal">
              <div className="widget-content-wrapper text-white">
                <div className="widget-content-left">
                  <div className="widget-heading">Courts</div>
                  <div className="widget-subheading">
                    Total Courts to attend
                  </div>
                </div>
                <div className="widget-content-right">
                  <div className="widget-numbers text-white">
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Categories */}
        <div className="row">
          <div className="col-md-8 row">
            <div className="col-md-6 col-lg-3">
              <div className="mb-3 widget-chart widget-chart2 text-left card">
                <div className="widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left pr-2 fsize-1">
                        <div className="widget-numbers mt-0 fsize-3 text-danger">
                          71%
                        </div>
                      </div>
                      <div className="widget-content-right w-100">
                        <div className="progress-bar-xs progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            aria-valuenow="71"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            //   style="width: 71%;"
                            style={{ width: "71%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left fsize-1">
                      <div className="text-muted opacity-6">Income Target</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="mb-3 widget-chart widget-chart2 text-left card">
                <div className="widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left pr-2 fsize-1">
                        <div className="widget-numbers mt-0 fsize-3 text-danger">
                          71%
                        </div>
                      </div>
                      <div className="widget-content-right w-100">
                        <div className="progress-bar-xs progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            aria-valuenow="71"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            //   style="width: 71%;"
                            style={{ width: "71%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left fsize-1">
                      <div className="text-muted opacity-6">Income Target</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="mb-3 widget-chart widget-chart2 text-left card">
                <div className="widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left pr-2 fsize-1">
                        <div className="widget-numbers mt-0 fsize-3 text-danger">
                          71%
                        </div>
                      </div>
                      <div className="widget-content-right w-100">
                        <div className="progress-bar-xs progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            aria-valuenow="71"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            //   style="width: 71%;"
                            style={{ width: "71%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left fsize-1">
                      <div className="text-muted opacity-6">Income Target</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="mb-3 widget-chart widget-chart2 text-left card">
                <div className="widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left pr-2 fsize-1">
                        <div className="widget-numbers mt-0 fsize-3 text-danger">
                          71%
                        </div>
                      </div>
                      <div className="widget-content-right w-100">
                        <div className="progress-bar-xs progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            aria-valuenow="71"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            //   style="width: 71%;"
                            style={{ width: "71%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left fsize-1">
                      <div className="text-muted opacity-6">Income Target</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="mb-3 widget-chart widget-chart2 text-left card">
                <div className="widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left pr-2 fsize-1">
                        <div className="widget-numbers mt-0 fsize-3 text-danger">
                          71%
                        </div>
                      </div>
                      <div className="widget-content-right w-100">
                        <div className="progress-bar-xs progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            aria-valuenow="71"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            //   style="width: 71%;"
                            style={{ width: "71%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left fsize-1">
                      <div className="text-muted opacity-6">Income Target</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="mb-3 widget-chart widget-chart2 text-left card">
                <div className="widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left pr-2 fsize-1">
                        <div className="widget-numbers mt-0 fsize-3 text-danger">
                          71%
                        </div>
                      </div>
                      <div className="widget-content-right w-100">
                        <div className="progress-bar-xs progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            aria-valuenow="71"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            //   style="width: 71%;"
                            style={{ width: "71%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left fsize-1">
                      <div className="text-muted opacity-6">Income Target</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="mb-3 widget-chart widget-chart2 text-left card">
                <div className="widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left pr-2 fsize-1">
                        <div className="widget-numbers mt-0 fsize-3 text-danger">
                          71%
                        </div>
                      </div>
                      <div className="widget-content-right w-100">
                        <div className="progress-bar-xs progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            aria-valuenow="71"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            //   style="width: 71%;"
                            style={{ width: "71%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left fsize-1">
                      <div className="text-muted opacity-6">Income Target</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="mb-3 widget-chart widget-chart2 text-left card">
                <div className="widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left pr-2 fsize-1">
                        <div className="widget-numbers mt-0 fsize-3 text-danger">
                          71%
                        </div>
                      </div>
                      <div className="widget-content-right w-100">
                        <div className="progress-bar-xs progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            aria-valuenow="71"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            //   style="width: 71%;"
                            style={{ width: "71%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left fsize-1">
                      <div className="text-muted opacity-6">Income Target</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default Dashboard;
