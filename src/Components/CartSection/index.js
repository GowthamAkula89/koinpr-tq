import React, { useContext, useState } from "react";
import "./cartSection.css";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DataContext from "../../Components/DataContext";
import DodoImg from "../Utils/dodo.png";

const CartSection = () => {
    const { cart } = useContext(DataContext);
    const data = cart[0];
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setUploadedFile(file);
        console.log("Uploaded file:", file);
    };

    const handleGetItWritten = () => {
        if (uploadedFile) {
            console.log("Proceeding with Get it Written for:", uploadedFile);
        } else {
            console.log("No file uploaded");
        }
    };

    const triggerFileInput = () => {
        document.getElementById('file-input').click();
    };

    return (
        <div className="cart-section-container">
            <div className="cart-nav">
                <Link to="/" className="nav-link" style={{ color: "#18171C" }}>
                    <FaArrowLeft />
                </Link>
                <div className="page-name">My Cart</div>
            </div>
            <div className="cart-section">
                <div className="details-container">
                    <div className="cart-items-container">
                        <div className="items-name">Items</div>
                        <div className="cart-items">
                        {cart.map((data, index) => (
                            <div className="cart-item">
                                <img src={DodoImg} alt="dodo_img" className="item-logo" />
                                <div className="item-details">
                                    <div className="item-name">{data.websiteName}</div>
                                    <div className="item-description">{data.description}</div>
                                    <div className="item-price">${data.price}</div>
                                </div>
                                <div className="upload-details">
                                    <div className="upload-doc">
                                        <input 
                                            type="file" 
                                            id="file-input"
                                            onChange={handleFileUpload}
                                            className="file-input"
                                            style={{ display: 'none' }}
                                        />
                                        <button onClick={triggerFileInput} className="file-input-button">
                                            Choose File
                                        </button>
                                        {uploadedFile && <span className="file-name">{uploadedFile.name}</span>}
                                    </div>
                                    <div>or</div>
                                    <div className="get-it-written">
                                        <button onClick={handleGetItWritten} className="get-it-written-button">
                                            Get it Written
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                <div className="details-container">
                        Hi
                </div>
            </div>
        </div>
    );
};

export default CartSection;
