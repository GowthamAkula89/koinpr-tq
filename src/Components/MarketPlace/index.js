import React, { useContext, useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import "./marketPlace.css";
import OfferingCard from "../OfferingCard";
import DataContext from "../DataContext";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";

const MarketPlace = () => {
    const { offeringsData, isContentLoading } = useContext(DataContext);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredOfferings, setFilteredOfferings] = useState(offeringsData);

    useEffect(() => {
        setFilteredOfferings(offeringsData);
    }, [offeringsData]);

    const handleSearch = debounce((query) => {
        setSearchQuery(query);
        if (query) {
            const filtered = offeringsData.filter((data) =>
                data.websiteName.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredOfferings(filtered);
        } else {
            setFilteredOfferings(offeringsData);
        }
    }, 300);

    const handleInputChange = (event) => {
        handleSearch(event.target.value);
    };

    return (
        <>
            {isContentLoading ? (
                <div className="loading-message">Loading please wait...</div>
            ) : (
                <div className="marketplace-container">
                    <div className="marketplace-header">
                        <div className="marketplace-title">Koinpr Marketplace</div>
                        <div className="marketplace-search-add">
                            <div className="search-bar">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="marketplace-search"
                                    onChange={handleInputChange}
                                />
                                <IoMdSearch className="search-btn" />
                            </div>
                            <Link to="/addoffering" className="nav-link">
                                <div className="marketplace-add-btn">Add Offering</div>
                            </Link>
                        </div>
                    </div>
                    <Link to="/cart" className="nav-link">
                        <div className="go-to-cart-btn">Go to Cart</div>
                    </Link>
                    <div className="offerings-container">
                        {filteredOfferings.map((data) => (
                            <div key={data._id}>
                                <OfferingCard data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default MarketPlace;
