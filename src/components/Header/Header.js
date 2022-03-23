import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Header() {
    return (
        <div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            data-widget="pushmenu"
                            to="#"
                        >
                            <i className="fas fa-bars" />
                        </Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown user-menu">
                        <Link
                            to="#"
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                        >
                            <span className="d-none d-md-inline">
                                {" "}
                                <AccountCircleIcon /> User Profile
                            </span>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <li className="user-header bg-primary">
                                <p>
                                    Alexander Pierce - Web Developer
                                    <small>Member since Nov. 2012</small>
                                </p>
                            </li>

                            <li className="user-footer">
                                <Link
                                    to="#"
                                    className="btn btn-default btn-flat"
                                >
                                    Profile
                                </Link>
                                <Link
                                    to="#"
                                    className="btn btn-default btn-flat float-right"
                                >
                                    Sign out
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
