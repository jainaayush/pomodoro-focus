import React, { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import AboutUs from "../../component/AboutUs";
import TabBox from "../../component/TabBox";
import TodoTable from "../../component/TodoTable";
import { useTimer } from "react-timer-hook";

const Home = ({ color }) => {
  const [stopwatchbtntxt, setStopwatchbtntxt] = useState("start");
  const [stop, setStop] = useState(false);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 1500);

  let expiryTimestamp = time;

  const { seconds, minutes, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => console.warn("onExpire called"),
  });

  const startTimer = () => {
    if (stop === true) {
      resume();
    } else {
      start();
    }
    setStopwatchbtntxt("pause");
    setStop(false);
  };

  const reset = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 1500);
    restart(time);
    pause();
    setStop(true);
  };

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
                      onClick={() => startTimer()}
                    >
                      Start
                    </button>
                  ) : stopwatchbtntxt === "pause" ? (
                    <button
                      className="btn rounded text-white mb-4"
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        pause();
                        setStopwatchbtntxt("resume");
                      }}
                    >
                      Pause
                    </button>
                  ) : stopwatchbtntxt === "resume" ? (
                    <button
                      className="btn rounded text-white mb-4"
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        resume();
                        setStopwatchbtntxt("pause");
                      }}
                    >
                      Resume
                    </button>
                  ) : (
                    ""
                  )}
                  <button
                    className="btn rounded bg-white"
                    style={{ color }}
                    onClick={() => {
                      // restart(time);
                      // pause();
                      reset();
                      setStopwatchbtntxt("start");
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
