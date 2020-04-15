import React from "react";
import Link from "react-router-dom/Link";

export default () => {
  return (
    <aside className="menu-sidebar d-none d-lg-block">
      <div className="logo">
        <Link to="/">
          <img src="images/icon/logo.png" alt="Expense Tracker" />
        </Link>
      </div>
      <div className="menu-sidebar__content js-scrollbar1">
        <nav className="navbar-sidebar">
          <ul className="list-unstyled navbar__list">
            <li className={window.location.pathname === "/" ? "active" : ""}>
              <Link to="/">
                <i className="fas fa-tachometer-alt" />
                Dashboard
              </Link>
            </li>
            <li
              className={window.location.pathname === "/stats" ? "active" : ""}
            >
              <Link to="/stats">
                <i className="fas fa-chart-bar" />
                Stats
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
