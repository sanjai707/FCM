import React, { createContext, useState } from 'react';

// Create the context
export const OrderContext = createContext();

// Create the provider component
export const OrderProvider = ({ children }) => {
  const [orderList, setOrderList] = useState([]);
  return (
    <OrderContext.Provider value={{ orderList, setOrderList }}>
      {children}
    </OrderContext.Provider>
  );
};