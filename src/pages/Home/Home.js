import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/SalmanGoregaon.pdf";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h1> Hi✌ i am </h1>
          <h2>
            <Typewriter
              options={{
                strings: ["React Js Developer!", "Mern Stack Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="two-btn">
            <button className="btn btn-primary hire">Hire me</button>
            <a
              className="btn btn-success ms-2 cv"
              href={Resume}
              download="salman.pdf"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
