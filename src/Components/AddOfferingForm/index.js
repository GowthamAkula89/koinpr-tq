import React, { useContext } from "react";
import "./addOfferingForm.css";
import DataContext from "../DataContext";
import { Link } from "react-router-dom";
const categoryList = ["Content", "Distribution", "Ads", "Twitter Influencers", "Telegram Influencers", "Youtube Influencers", "Instagram Influencer", "ICO Listing", "Exchange Listing"];
const languageList = [
    "English", "Spanish", "French", "German", "Chinese",
    "Japanese", "Korean", "Russian", "Portuguese", "Arabic",
    "Italian", "Dutch", "Swedish", "Turkish", "Hindi",
    "Bengali", "Urdu", "Punjabi", "Vietnamese", "Thai",
    "Indonesian", "Persian", "Polish", "Romanian", "Greek"
];

const regionList = [
    "United States", "Canada", "Mexico", "Brazil", "Argentina",
    "United Kingdom", "Germany", "France", "Italy", "Spain",
    "Russia", "China", "Japan", "India", "South Korea",
    "Australia", "New Zealand", "South Africa", "Egypt", "Nigeria",
    "Kenya", "Saudi Arabia", "United Arab Emirates", "Turkey", "Israel",
    "Indonesia", "Thailand", "Vietnam", "Malaysia", "Philippines",
    "Bangladesh", "Pakistan", "Nepal", "Sri Lanka", "Kazakhstan",
    "Ukraine", "Poland", "Netherlands", "Belgium", "Sweden",
    "Norway", "Denmark", "Finland", "Greece", "Portugal"
];


const AddOfferingForm = () => {
    const {offeringDone, setOfferingDone, contentDone, setContentDone, reviewDone, offeringData, setOfferingData} = useContext(DataContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOfferingData({
            ...offeringData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setOfferingData({
            ...offeringData,
            companyLogo: file
        });
    };

    const handleMultiSelectChange = (e) => {
        const { name, value } = e.target;
        setOfferingData(prevState => {
            const selectedOptions = prevState[name];
            if (selectedOptions.includes(value)) {
                return {
                    ...prevState,
                    [name]: selectedOptions.filter(option => option !== value)
                };
            } else {
                return {
                    ...prevState,
                    [name]: [...selectedOptions, value]
                };
            }
        });
    };

    const handleNext = () => {
        setOfferingDone({
            done: true,
            progress: false
        })
        setContentDone((prevState) => {
            return{
                ...prevState,
                progress: true
            }
        })
    }
    console.log(offeringData.companyLogo);
    return (
        <div className="add-offering-form">
            <div className="offering-section">{offeringDone.progress ? "Add Offering" : contentDone.progress ? "Add Content Offerings" : reviewDone.progress ? "Review" : ""}</div>
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
                    <>
                        <div className="form-sub-details">
                            <div className="form-input-details">
                                <label htmlFor="websiteName" className="configuration-name">Website Name</label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input-value"
                                    id="websiteName"
                                    name="websiteName"
                                    value={offeringData.websiteName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-input-details">
                                <label htmlFor="websiteUrl" className="configuration-name">Website URL</label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input-value"
                                    id="websiteUrl"
                                    name="websiteUrl"
                                    value={offeringData.websiteUrl}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-input-details">
                            <label htmlFor="description" className="configuration-name">Description</label>
                            <textarea
                                placeholder="Type here"
                                className="input-text"
                                id="description"
                                name="description"
                                value={offeringData.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-input-details">
                            <label htmlFor="companyLogo" className="configuration-name">
                                Company Logo
                            </label>
                            <input
                                type="file"
                                id="companyLogo"
                                name="companyLogo"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="form-sub-details">
                            <div className="form-input-details">
                                <label htmlFor="email" className="configuration-name">Official Email</label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input-value"
                                    id="email"
                                    name="email"
                                    value={offeringData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-input-details">
                                <label htmlFor="telegramId" className="configuration-name">Telegram ID</label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input-value"
                                    id="telegramId"
                                    name="telegramId"
                                    value={offeringData.telegramId}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-input-details">
                                <label htmlFor="contentLang" className="configuration-name">Select Content Language</label>
                                <select id="contentLang" name="contentLang" className="input-value" onChange={handleMultiSelectChange}>
                                    <option>Select languages</option>
                                    {languageList.map((lang, index) => (
                                        <option key={index} value={lang}>{lang}</option>
                                    ))}
                                </select>
                                <div className="selected-languages">
                                    {offeringData.contentLang.map((lang, index) => (
                                        <span key={index} className="selected-item">
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="form-input-details">
                                <label htmlFor="regions" className="configuration-name">Select 5 GEO’s</label>
                                <select id="regions" name="regions" className="input-value" onChange={handleMultiSelectChange}>
                                    <option>Select geo locations</option>
                                    {regionList.map((region, index) => (
                                        <option key={index} value={region}>{region}</option>
                                    ))}
                                </select>
                                <div className="selected-regions">
                                    {offeringData.regions.map((region, index) => (
                                        <span key={index} className="selected-item">
                                            {region}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="allowed-content">
                            <div className="allowed-content-heading">Allowed Content</div>
                            <div className="allowed-content-container">
                                <div>
                                    <div className="content-name">Gambling</div>
                                    <div className="radio-btns">
                                        <div>
                                            <input type="radio" id="gambling-yes" name="gambling-content" value="Gambling"/>
                                            <label htmlFor="gambling-yes">Yes</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="gambling-no" name="gambling-content" value="Gambling"/>
                                            <label htmlFor="gambling-no">No</label><br></br>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="content-name">Adult Content</div>
                                    <div className="radio-btns">
                                        <div>
                                            <input type="radio" id="adult-yes" name="adult-content" value="Adult Content"/>
                                            <label htmlFor="adult-yes">Yes</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="adult-no" name="adult-content" value="Adult Content"/>
                                            <label htmlFor="adult-no">No</label><br></br>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="content-name">Crypto/Web3.0</div>
                                    <div className="radio-btns">
                                        <div>
                                            <input type="radio" id="crypto-yes" name="crypto-content" value="Crypto/Web3.0"/>
                                            <label htmlFor="crypto-yes">Yes</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="crypto-no" name="crypto-content" value="Crypto/Web3.0"/>
                                            <label htmlFor="crypto-no">No</label><br></br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/addofferingcontent" className="nav-link">
                            <div className="next-btn" onClick={handleNext}>Next</div>
                        </Link>
                        
                    </>
                }
            </form>
        </div>
    );
}

export default AddOfferingForm;
