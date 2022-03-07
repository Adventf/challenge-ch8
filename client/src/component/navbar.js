import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/players" className="navbar-brand">
          RPS-Rock-Paper-Scissor
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/Players"} className="nav-link">
              Players
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Search"} className="nav-link">
              Search Players
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Edit"} className="nav-link">
              Edit
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
}
