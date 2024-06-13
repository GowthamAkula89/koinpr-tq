import React, { useState, useEffect } from "react";
import RegisterOrLoginModal from "../RegisterOrLoginModal";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const storedUser = localStorage.getItem("username");
        if (storedUser) {
            setIsLoggedIn(true);
            setUsername(storedUser);
        }
    }, []);

    const registerUser = (username, password) => {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        setIsLoggedIn(true);
        setUsername(username);
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
                <div className="header-navbar-item1"><span className="item1-star">✨</span>360º Marketing</div>
                <div className="header-navbar-item2">Marketplace</div>
                <div className="header-navbar-item2">Packages</div>
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
