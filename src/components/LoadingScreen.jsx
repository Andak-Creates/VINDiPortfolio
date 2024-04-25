import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hii I'm Vindi";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length - 1) {
        setTypedText((prevText) => prevText + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 200); // Adjust typing speed as needed

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <>
      <div className="loading-screen">
        <p>
          {typedText}
          <span className="cursor">|</span>
        </p>
        <p>Loading...</p>
      </div>
    </>
  );
};

export default LoadingScreen;
