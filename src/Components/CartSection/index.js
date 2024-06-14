import React, { useContext, useState } from "react";
import "./cartSection.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import DataContext from "../../Components/DataContext";
import DodoImg from "../Utils/dodo.png";
import Checkout from "../Checkout";

const CartSection = () => {
    const { cart, setCart } = useContext(DataContext);
    const [uploadedFiles, setUploadedFiles] = useState({});
    const [showUploadButton, setShowUploadButton] = useState(false);

    const handleFileUpload = (event, itemId) => {
        const file = event.target.files[0];
        setUploadedFiles((prevUploadedFiles) => ({
            ...prevUploadedFiles,
            [itemId]: file,
        }));
        setShowUploadButton(true);
    };
    
    const triggerFileInput = (itemId) => {
        document.getElementById(`file-input-${itemId}`).click();
    };

    const updateCartWithFile = (itemId) => {
        const updatedCart = cart.map((item) => {
            if (item._id === itemId) {
                return {
                    ...item,
                    uploadedFile: uploadedFiles[itemId] || null,
                };
            }
            return item;
        });
        
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setShowUploadButton(false);
    };
    console.log("updatedcart", cart)
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
                            {cart.length !== 0 &&
                                cart.map((data, index) => (
                                    <div className="cart-item" key={index}>
                                        <img src={DodoImg} alt="dodo_img" className="item-logo" />
                                        <div className="item-details-container">
                                            <div className="item-details">
                                                <div className="item-name">{data.websiteName}</div>
                                                <div className="item-description">{data.description}</div>
                                                <div className="item-price">${data.price}</div>
                                            </div>
                                            <div className="upload-details">
                                                <div className="upload-doc">
                                                    <input
                                                        type="file"
                                                        id={`file-input-${data._id}`}
                                                        onChange={(e) => handleFileUpload(e, data._id)}
                                                        className="file-input"
                                                        style={{ display: 'none' }}
                                                    />
                                                    <button
                                                        onClick={() => triggerFileInput(data._id)}
                                                        className="file-input-button"
                                                    >
                                                        {!uploadedFiles[data._id] ? "Choose File" : "File Selected"}
                                                    </button>
                                                </div>
                                                {uploadedFiles[data._id] && (
                                                    <button
                                                        onClick={() => updateCartWithFile(data._id)}
                                                        className="update-cart-button"
                                                        style={{ display: showUploadButton ? "block" : "none" }}
                                                    >
                                                        Update Cart
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="details-container">
                    <Checkout />
                </div>
            </div>
        </div>
    );
};

export default CartSection;
