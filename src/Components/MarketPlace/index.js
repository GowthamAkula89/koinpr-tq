import React from "react";
import "./marketPlace.css";
const MarketPlace = () => {
    return(
        <div className="marketplace-container">
            <div className="marketplace-header">
                <div className="marketplace-title">Koinpr Marketplace</div>
                <div className="marketplace-search-add">
                    <input type="text" placeholder="Search" className="marketplace-search"/>
                    <div className="marketplace-add">Add Offering</div>
                </div>
            </div>
            
        </div>
    )
}
export default MarketPlace;