import React from "react";
import { Link } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import AboutUs from "../../component/AboutUs";
import TabBox from "../../component/TabBox";
import TodoTable from "../../component/TodoTable";

const Home = ({ color }) => {
  
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="timer-sec pomo-bg">
          <div className="tabbable-responsive tabbable-position">
            <div className="container-fluid p-5">
              <div className="timer-sec pomo-bg">
                <div className="tabbable-responsive tabbable-position">
                  <TabBox color={color} />
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane active" id="pomodoro">
              <div className="d-md-flex d-block align-items-center justify-content-center main-width">
                <div className="skills_box">
                  <div className="row flex-wrap-no mx-0">
                    <div className="col text-center d-flex justify-content-center">
                      <div className="round-skills">
                        <div className="row flex-wrap-no mx-0">
                          <div className="col text-center d-flex justify-content-center">
                            <div className="round-skills">
                              <div className="progress blue">
                                <span className="progress-left">
                                  <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                  <span
                                    className={`progress-bar ${
                                      color === "#024A46"
                                        ? "progress-bar-green"
                                        : ""
                                    }`}
                                  ></span>
                                </span>
                                <div
                                  className="progress-value"
                                  style={{ color }}
                                >
                                  <div className="">
                                    <span>18:55</span>
                                    <p style={{ color }}>WORKING ON</p>
                                    <strong style={{ color }}>Laundry</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex d-md-block btns-pr">
                  <Link
                    to=""
                    className="btn rounded text-white mb-4"
                    style={{ backgroundColor: color }}
                  >
                    Resume
                  </Link>
                  <Link
                    to=""
                    className="btn rounded bg-white"
                    style={{ color }}
                  >
                    Reset
                  </Link>
                </div>
              </div>
              <TodoTable color={color} />
            </div>
          </div>
        </div>
      </div>
      <AboutUs color={color} />
    </div>
  );
};

export default Home;
