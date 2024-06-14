import React, { useContext } from "react";
import "./offeringCard.css";
import { CiGlobe } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import OfferingImg from "../Utils/offeringImg.com.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import DataContext from "../DataContext";
import { useSnackbar } from 'notistack';

const OfferingCard = ({ data }) => {
    const { cart, setCart } = useContext(DataContext);
    const { enqueueSnackbar } = useSnackbar();

    const handleAddCart = () => {
        const existingItem = cart.find((item) => item._id === data._id);
        if (!existingItem) {
            const newCart = [...cart, data];
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart) ||[]);
            enqueueSnackbar('Offering added to the cart', { variant: 'success' });
        } else {
            enqueueSnackbar('Offering already added in the cart', { variant: 'warning' });
        }
    };

    console.log(cart);

    return (
        <div className="offering-card">
            <a href={data.websiteUrl} target="_blank" rel="noopener noreferrer" className="offering-link">
                <div className="web-link">website link</div>
                <FaExternalLinkAlt />
            </a>
            <div className="offering-card-details">
                <img src={OfferingImg} alt="offeringImg" className="offering-img" />
                <div className="offering-name">{data.websiteName}</div>
                <div className="offering-details">
                    {data.regions.length > 0 && 
                        <div className="offering-detail">
                            <CiGlobe />
                            <div>
                                {data.regions.map((region, index) => (
                                    <span key={index}>{index !== 0 ? `, ${region}` : `${region}`}</span>
                                ))}
                            </div>
                        </div>
                    }
                    <div className="offering-detail">
                        <div>Press Release</div>
                    </div>
                </div>
            </div>
            <div>
                <hr />
                <div className="offering-card-buy-cost">
                    <div className="cost-section">
                        <div className="cost-text">Starting from</div>
                        <div className="cost-value">₹5000</div>
                    </div>
                    <FaCartPlus className="cart-btn" onClick={handleAddCart} />
                </div>
            </div>
        </div>
    );
};

export default OfferingCard;
