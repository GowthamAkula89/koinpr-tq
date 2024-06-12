import React from "react";
import { IoMdSearch } from "react-icons/io";
import "./marketPlace.css";
import OfferingCard from "../OfferingCard";
const MarketPlace = () => {
    return(
        <div className="marketplace-container">
            <div className="marketplace-header">
                <div className="marketplace-title">Koinpr Marketplace</div>
                <div className="marketplace-search-add">
                    <div className="search-bar">
                        <input type="text" placeholder="Search" className="marketplace-search"/>
                        <IoMdSearch className="search-btn"/>
                    </div>
                    <div className="marketplace-add-btn">Add Offering</div>
                </div>
            </div>
             <OfferingCard/>
        </div>
    )
}
export default MarketPlace;