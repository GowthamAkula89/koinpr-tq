import React from "react";
import "./offeringCard.css";
import { CiGlobe } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import OfferingImg from"../Utils/offeringImg.com.png"

const OfferingCard = () => {
    return(
        <div className="offering-card-container">
            <img src={OfferingImg} alt="offeringImg" className="offering-img"/>
            <div className="offering-name">Todayq News</div>
            <div className="offering-details">
                <div className="offering-detail">
                    <CiGlobe />
                    <div>USA, India, Dubai</div>
                </div>
                <div  className="offering-detail">
                    <div>Press Release</div>
                </div>
            </div>
            <hr/>
            <div className="offering-card-buy-cost">
                <div className="cost-section">
                    <div className="cost-text">Starting from</div>
                    <div className="cost-value">₹5000</div>
                </div>
                <FaCartPlus className="cart-btn"/>
            </div>
        </div>
    )
}
export default OfferingCard;