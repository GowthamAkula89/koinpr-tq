import React from "react";
import "./offeringCard.css";
import { CiGlobe } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import OfferingImg from"../Utils/offeringImg.com.png"
import { FaExternalLinkAlt } from "react-icons/fa";

const OfferingCard = ({data}) => {
    return(
        <div className="offering-card">
            <a href={data.websiteUrl} className="offering-link">
                <div className="web-link">website link</div>
                <FaExternalLinkAlt />
            </a>
            <div  className="offering-card-details">
                <img src={OfferingImg} alt="offeringImg" className="offering-img"/>
                <div className="offering-name">{data.websiteName}</div>
                <div className="offering-details">
                { data.regions.length > 0 && 
                    <div className="offering-detail">
                        <CiGlobe />
                        <div>{data.regions.map((region, index) => (
                            <span>{index !== 0 ? `, ${region}`:`${region}`}</span>
                        ))}</div>
                    </div>
                }
                    <div  className="offering-detail">
                        <div>Press Release</div>
                    </div>
                </div>
            </div>
            <div>
                <hr/>
                <div className="offering-card-buy-cost">
                    <div className="cost-section">
                        <div className="cost-text">Starting from</div>
                        <div className="cost-value">₹5000</div>
                    </div>
                    <FaCartPlus className="cart-btn"/>
                </div>
            </div>
        </div>
    )
}
export default OfferingCard;