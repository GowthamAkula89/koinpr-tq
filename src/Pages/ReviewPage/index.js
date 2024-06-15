import React from "react";
import Header from "../../Components/Header";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AddOfferingSidebar from "../../Components/AddOfferingSidebar";
import Review from "../../Components/Review";

const ReviewPage = () => {
    return(
        <div>
            <Header/>
            <div className="add-offering-page">
                <div className="add-offering-nav">
                    <Link to="/" className="nav-link" style={{color:"#18171C"}}>
                        <FaArrowLeft />
                    </Link>
                    <div className="add-offering-name">Review</div>
                </div>
                <div className="add-offering-page-container">
                    <AddOfferingSidebar/>
                    <Review/>
                </div>
            </div>
        </div>
    )
}
export default ReviewPage;