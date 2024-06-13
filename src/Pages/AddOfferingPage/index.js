import React from "react";
import Header from "../../Components/Header";
import { FaArrowLeft } from "react-icons/fa6";
import "./addOfferingPage.css";
import { Link } from "react-router-dom";
import AddOfferingSidebar from "../../Components/AddOfferingSidebar";

const AddOfferingPage = () => {
    return(
        <div>
            <Header/>
            <div className="add-offering-page">
                <div className="add-offering-nav">
                    <Link to="/" className="nav-link" style={{color:"#18171C"}}>
                        <FaArrowLeft />
                    </Link>
                    <div className="add-offering-name">Add Offering</div>
                </div>
                <div className="add-offering-page-container">
                    <AddOfferingSidebar/>
                </div>
            </div>
        </div>
    )
}
export default AddOfferingPage