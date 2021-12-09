import React from "react";

const AboutUs = ({ color }) => {
  
  return (
    <div className="feature-bg">
      <div className="feature-sec mt-5 main-width">
        <div className="row">
          <div className="col">
            <div className="head mb-5">
              <h3 style={{ color }}>What is this</h3>
            </div>
            <p className="mb-5 pb-2">
              The <strong style={{ color }}>Pomodoro Technique</strong> was
              created by Francesco Cirillo for a more productive way to work and
              study. The technique uses a timer to break down work into
              intervals, traditionally 25 minutes in length, separated by short
              breaks. Each interval is known as a pomodoro, from the Italian
              word for 'tomato', after the tomato-shaped kitchen timer that
              Cirillo used as a university student.
            </p>
            <div className="head mb-5">
              <h3 style={{ color }}>Features</h3>
            </div>
            <ul className="list-unstyled pl-2 mb-0" style={{ color }}>
              <li className="pl-2 pb-2 pt-2">
                <strong style={{ color }}>Responsive design</strong> that works
                with desktop and mobile
              </li>
              <li className="pl-2 pb-2 pt-2">
                <strong style={{ color }}>Color transition</strong> to switch
                moods between work time and rest time
              </li>
              <li className="pl-2 pb-2 pt-2">
                <strong style={{ color }}>Audio notification</strong> at the end
                of a timer period
              </li>
              <li className="pl-2 pb-2 pt-2">
                <strong style={{ color }}>Customizable timer</strong> intervals
                to suit your preference
              </li>
              <li className="pl-2 pb-2 pt-2">
                <strong style={{ color }}>Charts</strong> with stats and
                progress
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
