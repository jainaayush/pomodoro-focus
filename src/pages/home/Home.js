import React, { useEffect, useState } from "react";
import { button } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import AboutUs from "../../component/AboutUs";
import TabBox from "../../component/TabBox";
import TodoTable from "../../component/TodoTable";
import { useStopwatch } from "react-timer-hook";

const Home = ({ color }) => {
  const [stopwatchbtntxt, setStopwatchbtntxt] = useState("start");

  const { seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

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
                                    <span>
                                      <span>
                                        {minutes < 10 ? `0${minutes}` : minutes}
                                      </span>
                                      :
                                      <span>
                                        {seconds < 10 ? `0${seconds}` : seconds}
                                      </span>
                                    </span>
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
                  {stopwatchbtntxt === "start" ? (
                    <button
                      className="btn rounded text-white mb-4"
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        start();
                        setStopwatchbtntxt("pause");
                      }}
                    >
                      Start
                    </button>
                  ) : stopwatchbtntxt === "pause" ? (
                    <button
                      className="btn rounded text-white mb-4"
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        pause();
                        setStopwatchbtntxt("start");
                      }}
                    >
                      Pause
                    </button>
                  ) : (
                    ""
                  )}
                  <button
                    className="btn rounded bg-white"
                    style={{ color }}
                    onClick={() => {
                      reset();
                      setStopwatchbtntxt("start");
                      pause();
                    }}
                  >
                    Reset
                  </button>
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
