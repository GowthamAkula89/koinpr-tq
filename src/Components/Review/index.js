import React, { useContext, useState } from "react";
import "./review.css";
import DataContext from "../DataContext";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from 'react-spinners';
import { useSnackbar } from 'notistack';
const Review = () => {
    const { offeringData,setOfferingDone, setContentDone, setReviewDone,offeringsData,setOfferingData, setOfferingsData } = useContext(DataContext);
    const[isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
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
        setIsLoading(true);
        try{
            const response = await fetch(`https://koinpr-tq-ag.onrender.com/v1/offerings`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(offeringData)
            })
            if(response.ok){
                const data = await response.json();
                setOfferingsData([...offeringsData, data]);
                setOfferingData({
                    category: "",
                    websiteName: "",
                    websiteUrl: "",
                    description: "",
                    companyLogo: null,
                    email: "",
                    telegramId: "",
                    contentLang: [],
                    regions: [],
                    allowedContent: {
                        gambling: null,
                        adultContent: null,
                        cryptoWeb3: null
                    },
                    offering:"",
                    price: 0,
                    discountPrice: 0
                })
                setOfferingDone({done: false,progress: true});
                setContentDone({done: false,progress: false});
                setReviewDone({done: false,progress: false});
                console.log("offeringData", data);
                enqueueSnackbar('Successfully created Offering', { variant: 'success' });
                navigate("/");
                
            }else{
                enqueueSnackbar('Website name already exists', { variant: 'warning' });
            }

        }catch(error){
            enqueueSnackbar('Unexpected Error', { variant: 'error' });
            console.error('Error:', error);
        }finally{
            setIsLoading(false);
        }
        
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
                <button className="next-btn" onClick={handleConfirm}>{isLoading ? <ClipLoader size={24} color="#ffffff" /> : "Check Out"}</button>
            </div>
        </div>
    );
};

export default Review;
