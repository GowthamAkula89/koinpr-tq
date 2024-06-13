import React from "react";
import Header from "../../Components/Header";
import { FaArrowLeft } from "react-icons/fa6";
import "./addOfferingPage.css";
import { Link } from "react-router-dom";
import AddOfferingSidebar from "../../Components/AddOfferingSidebar";
import AddOfferingFrom from "../../Components/AddOfferingForm";

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
                    <AddOfferingFrom/>
                </div>
            </div>
        </div>
    )
}
export default AddOfferingPage