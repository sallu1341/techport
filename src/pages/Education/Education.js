import React from "react";
import "./Education.css";
import { FcGraduationCap } from "react-icons/fc";

const Education = () => {
  return (
    <>
      <div className=" education">
        <h2 className="col-12 mt-3 mb-1 text-center">Top Recent Educations </h2>
        <hr />
        <div className="container">
          <div className="row">
            <div
              className="card text-center"
              style={{ width: "85%", margin: " 0 auto" }}
            >
              <div className="card-header">
                {" "}
                <FcGraduationCap className="me-1 fs-1" /> MCA
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">2022-2024</li>
                <li className="list-group-item">Mumbai University</li>
              </ul>
            </div>

            <div
              className="card text-center mt-4"
              style={{ width: "85%", margin: " 0 auto" }}
            >
              <div className="card-header">
                {" "}
                <FcGraduationCap className="me- fon fs-1" />
                BCA
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">2019-2021</li>
                <li className="list-group-item">Mumbai University</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
