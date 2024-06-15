import React, { useContext } from "react";
import "./review.css";
import DataContext from "../DataContext";
import { useNavigate } from "react-router-dom";

const Review = () => {
    const { offeringData, setContentDone, setReviewDone } = useContext(DataContext);
    const navigate = useNavigate();

    const handleBack = () => {
        setContentDone({
            done: false,
            progress: true
        });
        setReviewDone({
            done: false,
            progress: false
        });
        navigate("/addofferingcontent");
    };

    const handleConfirm = async () => {
        // Assuming you have an API call or any async operation to save the data
        // await saveOfferingData(offeringData);

        setReviewDone({
            done: true,
            progress: false
        });
        navigate("/success");
    };

    return (
        <div className="review-container">
            <div className="review-section">Review Your Offering</div>
            <div className="review-item">
                <span className="review-item-label">Category:</span>
                <span className="review-item-value">{offeringData.category}</span>
            </div>
            <div className="review-item">
                <span className="review-item-label">Website Name:</span>
                <span className="review-item-value">{offeringData.websiteName}</span>
            </div>
            <div className="review-item">
                <span className="review-item-label">Website URL:</span>
                <span className="review-item-value">{offeringData.websiteUrl}</span>
            </div>
            <div className="review-item">
                <span className="review-item-label">Description:</span>
                <span className="review-item-value">{offeringData.description}</span>
            </div>
            <div className="review-item">
                <span className="review-item-label">Official Email:</span>
                <span className="review-item-value">{offeringData.email}</span>
            </div>
            <div className="review-item">
                <span className="review-item-label">Telegram ID:</span>
                <span className="review-item-value">{offeringData.telegramId}</span>
            </div>
            <div className="review-item">
                <span className="review-item-label">Content Language(s):</span>
                <span className="review-item-value">{offeringData.contentLang.join(", ")}</span>
            </div>
            <div className="review-item">
                <span className="review-item-label">Regions:</span>
                <span className="review-item-value">{offeringData.regions.join(", ")}</span>
            </div>
            <div className="review-item">
                <span className="review-item-label">Gambling Allowed:</span>
                <span className="review-item-value">{offeringData.allowedContent.gambling ? "Yes" : "No"}</span>
            </div>
            <div className="review-item">
                <span className="review-item-label">Adult Content Allowed:</span>
                <span className="review-item-value">{offeringData.allowedContent.adultContent ? "Yes" : "No"}</span>
            </div>
            <div className="review-item">
                <span className="review-item-label">Crypto/Web3.0 Allowed:</span>
                <span className="review-item-value">{offeringData.allowedContent.cryptoWeb3 ? "Yes" : "No"}</span>
            </div>
            <div className="review-item">
                <span className="review-item-label">Offering:</span>
                <span className="review-item-value">{offeringData.offering}</span>
            </div>
            <div className="review-item">
                <span className="review-item-label">Price:</span>
                <span className="review-item-value">{offeringData.price}</span>
            </div>
            <div className="review-item">
                <span className="review-item-label">Discount:</span>
                <span className="review-item-value">{offeringData.discountPrice}%</span>
            </div>
            <div className="review-buttons">
                <button className="back-btn" onClick={handleBack}>Back</button>
                <button className="next-btn" onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
    );
};

export default Review;
