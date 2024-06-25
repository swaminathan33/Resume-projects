import React, { createContext, useContext, useState } from "react";

const ContentContext = createContext();

const ContentProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ContentContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useGlobalContentContext = () => {
  return useContext(ContentContext);
};

export { ContentContext, ContentProvider };
