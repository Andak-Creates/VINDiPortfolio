import React, { useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import "./css/loadingScreen.css";
import Navigation from "./components/Navigation";
import DisplayContent from "./components/DisplayContent";

const App = () => {
  return (
    <div className="body">
      {/* <LoadingScreen /> */}
      <Navigation />
      <DisplayContent />
    </div>
  );
};

export default App;
