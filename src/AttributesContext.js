// AttributeContext.js

import React, { createContext, useContext, useState } from 'react';

const AttributesContext = createContext();

export const AttributesProvider = ({ children }) => {
  const [attributes, setAttributes] = useState([]);

  return (
    <AttributesContext.Provider value={{ attributes, setAttributes }}>
      {children}
    </AttributesContext.Provider>
  );
};

export const useAttributesContext = () => {
  const context = useContext(AttributesContext);
  if (!context) {
    throw new Error('useAttributeContext must be used within an AttributeProvider');
  }
  return context;
};
