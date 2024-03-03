import React from "react";
import { FcAbout } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { FcReading } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import "./Menu.css";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
              alt="not "
            />
          </div>

          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FaHome />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About
              </div>
              <div className="nav-link">
                <MdOutlineWork />
                Work Experince
              </div>
              <div className="nav-link">
                <FcBiotech />
                Tech Stack
              </div>
              <div className="nav-link">
                <FcReading />
                Education
              </div>
              <div className="nav-link">
                <GoProjectSymlink />
                Projects
              </div>
              <div className="nav-link">
                <FaHome />
                Home
              </div>
              <div className="nav-link">
                <IoIosContact />
                Contact Us{" "}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-item">
            <div className="nav-link">
              <FaHome title="Home" size={25} />
            </div>
            <div className="nav-link">
              <FcAbout size={25} />
            </div>
            <div className="nav-link">
              <MdOutlineWork title="Home" size={25} />
            </div>
            <div className="nav-link">
              <FcBiotech size={25} />
            </div>
            <div className="nav-link">
              <FcReading size={25} />
            </div>
            <div className="nav-link">
              <GoProjectSymlink size={25} />
            </div>
            <div className="nav-link">
              <FaHome size={25} />
            </div>
            <div className="nav-link">
              <IoIosContact size={25} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
