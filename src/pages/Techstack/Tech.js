import React from "react";
import "./Tech.css";
import Techlist from "../../cmp/utils/Techlist";

const Tech = () => {
  return (
    <>
      <div className="container techstack">
        <h2 className="col-12 mt-3 mb-1 text-center">Technolgies Stack</h2>
        <hr />
        <p className="text-center mt-3">
          👌Incuding Technolgies React ,frnttend BAckrenf hdwfjhkjflvb
        </p>

        <div className="row">
          {Techlist.map((item) => {
            return (
              <>
                <div
                  className=" card cradstyle mb-4"
                  style={{ width: "13rem" }}
                  key={item.id}
                >
                  <div className="card-body d-flex align-items-center  gap-3 mb-3 pt-3 mb-4 ">
                    <h5 className="card-title">{item.name}</h5>
                    <h6
                      className="card-subtitle mb-2 text-muted"
                      style={{ fontSize: "40px", color: "green" }}
                    >
                      {item.icons}
                    </h6>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tech;
