import React, { useContext, useState, useEffect } from "react";
import "./addOfferingContentForm.css";
import DataContext from "../DataContext";
import { useNavigate } from "react-router-dom";

const offeringList = ["Press Release", "Sponsored Content", "Banner Ad"];

const AddOfferingContentForm = () => {
    const { offeringDone,setOfferingDone, contentDone, setContentDone, reviewDone, setReviewDone, offeringData, setOfferingData } = useContext(DataContext);
    const [formValid, setFormValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        validateForm();
    }, [offeringData]);

    const validateForm = () => {
        const requiredFields = [
            "offering", "price", "discountPrice"
        ];
        const isValid = requiredFields.every(field => !!offeringData[field]);
        setFormValid(isValid);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setOfferingData({
                ...offeringData,
                [name]: checked
            });
        } else {
            setOfferingData({
                ...offeringData,
                [name]: value
            });
        }
    };
    const handleBack = () => {
        setOfferingDone({
            done: false,
            progress: true
        });
        setContentDone({
            done: false,
            progress: false
        });
        navigate("/addoffering");
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setContentDone({
            done: true,
            progress: false
        });
        setReviewDone((prevState) => ({
            ...prevState,
            progress: true
        }));
        navigate("/review");
    };

    return (
        <div className="add-offering-form">
            <div className="offering-section">
                {offeringDone.progress ? "Add Offering" : contentDone.progress ? "Add Content Offerings" : reviewDone.progress ? "Review" : ""}
            </div>
            <form className="form-container">
                <div className="form-input-details">
                    <label htmlFor="offering" className="input-title">Select Offering</label>
                    <select id="offering" name="offering" value={offeringData.offering} onChange={handleChange} className="input-value">
                        <option>Choose offering</option>
                        {offeringList.map((offering, index) => (
                            <option key={index} value={offering}>{offering}</option>
                        ))}
                    </select>
                </div>
                {offeringData.offering && (
                    <>
                        <div className="form-sub-details">
                            <div className="form-input-details">
                                <label htmlFor="price" className="input-title">Price</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    placeholder="Enter price"
                                    value={offeringData.price}
                                    onChange={handleChange}
                                    className="input-value"
                                    required
                                />
                            </div>
                            <div className="form-input-details">
                                <label htmlFor="discountPrice" className="input-title">Discount (%)</label>
                                <input
                                    type="number"
                                    id="discountPrice"
                                    name="discountPrice"
                                    placeholder="Enter discount percentage"
                                    value={offeringData.discountPrice}
                                    onChange={handleChange}
                                    className="input-value"
                                />
                            </div>
                        </div>
                    </>
                )}
                <div className="review-buttons">
                    <button className="back-btn" onClick={handleBack}>Back</button>
                    {formValid ? (
                    <button type="submit" className="next-btn" onClick={handleSubmit}>Next</button>
                    ) : (
                        <button type="button" className="next-btn disabled" disabled>Next</button>
                    )}
                </div>
                
            </form>
        </div>
    );
};

export default AddOfferingContentForm;
