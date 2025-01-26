import React from "react";
import Header from "./components/Header.tsx";
import HomePage from "./pages/HomePage.tsx";
import DestinationPage from "./pages/DestinationPage.tsx";
import CrewPage from "./pages/CrewPage.tsx";
import Technology from "./pages/Technology.tsx";
import NavigationProvider from "./context/NavigationContext.tsx";

function App() {
  return (
    <div className="font-Barlow">
      <NavigationProvider>
        <Header />
      </NavigationProvider>
      <HomePage />
      <DestinationPage />
      <CrewPage />
      <Technology />
    </div>
  );
}

export default App;
