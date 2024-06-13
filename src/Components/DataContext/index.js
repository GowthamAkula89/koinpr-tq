import React, { createContext, useState } from 'react';
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
  return (
    <DataContext.Provider value={{ offeringDone, setOfferingDone, contentDone, setContentDone, reviewDone, setReviewDone }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;