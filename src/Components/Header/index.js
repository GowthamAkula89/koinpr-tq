import React, { useState, useEffect } from "react";
import RegisterOrLoginModal from "../RegisterOrLoginModal";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const location = useLocation();
    const [activeNavItem, setActiveNavItem] = useState(location.pathname);

    useEffect(() => {
        const storedUser = localStorage.getItem("username");
        if (storedUser) {
            setIsLoggedIn(true);
            setUsername(storedUser);
        }
    }, []);

    useEffect(() => {
        setActiveNavItem(location.pathname);
    }, [location.pathname]);

    const registerUser = (username, password) => {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    };

    const loginUser = (username, password) => {
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            setIsLoggedIn(true);
            setUsername(username);
        } else {
            alert("Invalid username or password!");
        }
    };

    const logoutUser = () => {
        setIsLoggedIn(false);
        setUsername("");
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    };

    return (
        <div className="header-container">
            <Link to="/" className="logo-link">
                <div className="header-title-container">
                    <div className="header-name">Koinpr</div>
                    <div className="header-descrip">A <span className="header-prod">Todayq</span> Product</div>
                </div>
            </Link>
            <div className="header-navbar">
                <Link
                    to="/" className="nav-link"
                >
                    <div className="header-navbar-item1">
                        <span className="item1-star">✨</span>360º Marketing
                    </div>
                </Link>
                <Link
                    to="/"
                    className={`nav-link ${activeNavItem === '/marketplace' ? 'active' : ''}`}
                    onClick={() => setActiveNavItem('/marketplace')}
                >
                    <div className="header-navbar-item2">Marketplace</div>
                </Link>
                <Link
                    to="/"
                    className={`nav-link ${activeNavItem === '/packages' ? 'active' : ''}`}
                    onClick={() => setActiveNavItem('/packages')}
                >
                    <div className="header-navbar-item2">Packages</div>
                </Link>
            </div>
            <div className="header-auth">
                {isLoggedIn ? (
                    <div className="header-logged-in">
                        <span>Welcome, {username}</span>
                        <button onClick={logoutUser}>Logout</button>
                    </div>
                ) : (
                    <div className="header-login-register">
                        <button onClick={() => setShowModal(true)}>Login / Register</button>
                    </div>
                )}
            </div>
            <RegisterOrLoginModal
                showModal={showModal}
                closeModal={() => setShowModal(false)}
                registerUser={registerUser}
                loginUser={loginUser}
            />
        </div>
    );
};

export default Header;
