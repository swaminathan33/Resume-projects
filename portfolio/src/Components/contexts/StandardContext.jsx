import { createContext, useContext, useState } from "react";

const StandardContext = createContext();

export const StandardProvider = ({ children }) => {
  const [navShow, setNavShow] = useState(false);

  return (
    <StandardContext.Provider value={{ navShow, setNavShow }}>
      {children}
    </StandardContext.Provider>
  );
};

export const useGlobalStandardContext = () => {
  return useContext(StandardContext);
};

export default { StandardContext, StandardProvider };
