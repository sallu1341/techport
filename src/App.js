import React from "react";
// import Pr from "./cmp/practce/Pr";
import Layout from "./cmp/Layout/Layout";
import About from "./pages/About/About";
import Tech from "./pages/Techstack/Tech";
import Project from "./pages/Projec/project";
import "./App.css";
import Education from "./pages/Education/Education";

const App = () => {
  return (
    <>
      <Layout />
      <div className="container ">
        <About />
        <Education />
        <Tech />
        <Project />
      </div>

      {/* <Pr /> */}
    </>
  );
};

export default App;
