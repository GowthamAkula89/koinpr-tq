import React, { createContext, useEffect, useState } from 'react';
// Create a context
const DataContext = createContext();
// Create a provider component
export const DataProvider = ({ children }) => {
  const [offeringDone, setOfferingDone] = useState({
    done: false,
    progress: true
  });
  const [contentDone, setContentDone] = useState({
    done: false,
    progress: false
  });
  const [reviewDone, setReviewDone] = useState({
    done: false,
    progress: false
  });
  const [offeringData, setOfferingData] = useState({
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
  });
  const [checkoutDetails, setCheckoutDetails] = useState({
    cart:[],
    transactionDetails:null
  })
  const [offeringsData, setOfferingsData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        setCart(JSON.parse(storedCart));
    }
}, []);
  return (
    <DataContext.Provider value={{ 
      offeringDone, 
      setOfferingDone, 
      contentDone, 
      setContentDone, 
      reviewDone, 
      setReviewDone, 
      offeringData, 
      setOfferingData, 
      offeringsData, 
      setOfferingsData, 
      cart, 
      setCart,
      checkoutDetails, setCheckoutDetails
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;