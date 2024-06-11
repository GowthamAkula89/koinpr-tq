import React, { createContext, useState } from 'react';
// Create a context
const DataContext = createContext();
// Create a provider component
export const DataProvider = ({ children }) => {
    
  return (
    <DataContext.Provider value={{  }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;