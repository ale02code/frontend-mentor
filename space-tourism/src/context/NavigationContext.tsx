import React, { createContext, ReactNode, useState } from "react";

interface NavigationContextProps {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

export const NavigationContext = createContext<NavigationContextProps>({
  currentPage: "home",
  setCurrentPage: () => {},
});

interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationProvider: React.FunctionComponent<NavigationProviderProps> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<string>("Home");

  return (
    <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
