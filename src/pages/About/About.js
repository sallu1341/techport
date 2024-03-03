import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="row   seem">
          <div className="col-md-6  col-12  about-image">
            <img
              src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
              alt="yui"
            />
          </div>
          <div className="col-md-6  col-12 ">
            <h1>About Me</h1>
            <p>
              loremmLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est labor
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
