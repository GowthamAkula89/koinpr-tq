import React, { useContext, useState } from "react";
import "./addOfferingForm.css";
import DataContext from "../DataContext";
const categoryList = ["Content", "Distribution","Ads","Twitter Influencers","Telegram Influencers","Youtube Influencers","Instagram Influencer","ICO Listing","Exchange Listing"]
const AddOfferingFrom = () => {
    const {offeringDone, contentDone, reviewDone} = useContext(DataContext)
    const [offeringData, setOfferingData] = useState({
        category:"",
        websiteName: "",
        websiteUrl: "",
        description: "",
        email: "",
        telegramId: "",
        contentLang:"",
        regions:[],
        price: "",
        discountPrice: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setOfferingData({
            ...offeringData,
            [name]: value
        });
    };
    return(
        <div className="add-offering-form">
            <div className="offering-section">{offeringDone.progress ? "Add Offering": contentDone.progress ? "Add Content Offerings": reviewDone.progress ? "Review":""}</div>
            <form className="form-container">
                <div className="form-input-details">
                    <label htmlFor="category" className="input-title">Select Category</label>
                    <select id="category" name="category" value={offeringData.category} onChange={handleChange}>
                        <option>Choose category</option>
                        {categoryList.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                {offeringData.category !== "" && 
                <div>
                    <div className="form-input-details">
                        <label for="website-name" className="input-title">Website Name</label>
                        <input type="text" placeholder="type here" className="input-value" id="website-name"/>
                    </div>
                    <div className="form-input-details">
                        <label for="website-name" className="input-title">Website URL</label>
                        <input type="text" placeholder="type here" className="input-value" id="website-name"/>
                    </div>
                </div>
                }
            </form>
        </div>
    )
}
export default AddOfferingFrom;