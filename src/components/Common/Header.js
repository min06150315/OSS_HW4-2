import React from "react";
import { Link } from "react-router-dom";
import "./Common.css";
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            {/* Edit */}
            <span className="navbar-text">민경빈(22300265)의 오픈소스 스튜디오 Assignment#4-2</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="create-user">
                  {/* Edit */}
                  Create Student
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="show-user">
                  {/* Edit */}
                  Show Student
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
