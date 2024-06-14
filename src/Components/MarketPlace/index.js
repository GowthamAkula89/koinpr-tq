import React, { useContext, useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import "./marketPlace.css";
import OfferingCard from "../OfferingCard";
import DataContext from "../DataContext";
import {config} from "../../App"
import { Link } from "react-router-dom";
const MarketPlace = () => {
    const {offeringsData, setOfferingsData} = useContext(DataContext);
    const [loading, setLoading] = useState(false);
    useEffect (() =>{
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await fetch(config.endpoint);
                const data = await response.json();
                setOfferingsData(data.offerings);
            } 
            catch (error) {
                console.error('Error fetching projects:', error);
            }
            finally{
                setLoading(false);
            }
          }
        fetchData()
      },[])
      console.log(offeringsData);
    return(
        <>
        {loading ? (<div className="loading-message">Loading please wait...</div>):(
            <div className="marketplace-container">
                <div className="marketplace-header">
                    <div className="marketplace-title">Koinpr Marketplace</div>
                    <div className="marketplace-search-add">
                        <div className="search-bar">
                            <input type="text" placeholder="Search" className="marketplace-search"/>
                            <IoMdSearch className="search-btn"/>
                        </div>
                        <Link to="/addoffering" className="nav-link">
                            <div className="marketplace-add-btn">Add Offering</div>
                        </Link>
                    </div>
                </div>
                <Link to="/cart" className="nav-link">
                    <div className="go-to-cart-btn">Go to Cart</div>
                </Link>
                <div className="offerings-container">
                    {offeringsData.map((data) => (
                        <div key={data._id}><OfferingCard data={data}/></div>
                    ))}
                </div>
                
            </div>
        )}
        </>
    )
}
export default MarketPlace;