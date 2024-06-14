import React from "react";
import "./addOfferingContentPage.css";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import AddOfferingSidebar from "../../Components/AddOfferingSidebar";
import AddOfferingContentForm from "../../Components/AddOfferingContentForm";
const AddOfferingContentPage = () => {
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
                    <AddOfferingContentForm/>
                </div>
            </div>
        </div>
    )
}
export default AddOfferingContentPage;