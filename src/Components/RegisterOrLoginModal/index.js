import React, { useState } from "react";
import "./registerOrLoginModal.css";

import { useSnackbar } from 'notistack';
const RegisterOrLoginModal = ({ showModal, closeModal, registerUser, loginUser }) => {
    const [isRegister, setIsRegister] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { enqueueSnackbar } = useSnackbar();
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            enqueueSnackbar('password does not match', { variant: 'error' });
            return;
        }
        registerUser(username, password);
        closeModal();
        enqueueSnackbar('Registered, Please login', { variant: 'success' });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        loginUser(username, password);
        closeModal();
       
    };

    return (
        <div className={`modal ${showModal ? "show" : ""}`}>
            <div className="modal-content">
                <div className="close" onClick={closeModal}>&times;</div>
                <div className="modal-tabs">
                    <button
                        className={`modal-tab ${isRegister ? "active" : ""}`}
                        onClick={() => setIsRegister(true)}
                    >
                        Register
                    </button>
                    <button
                        className={`modal-tab ${!isRegister ? "active" : ""}`}
                        onClick={() => setIsRegister(false)}
                    >
                        Login
                    </button>
                </div>
                {isRegister ? (
                    <form onSubmit={handleRegisterSubmit}>
                        <h2>Register</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Register</button>
                    </form>
                ) : (
                    <form onSubmit={handleLoginSubmit}>
                        <h2>Login</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RegisterOrLoginModal;
