import React, { useEffect } from "react";

function LoaderComponents() {
  useEffect(() => {
    const fadeout = () => {
      const preloader = document.querySelector(".preloader");
      preloader.style.opacity = "0";
      preloader.style.display = "none";
    };

    window.setTimeout(fadeout, 300);
  }, []);
  return (
    <div className="preloader" style={{ opacity: "1", display: "block" }}>
      <div className="loader">
        <div className="spinner">
          <div className="spinner-container">
            <div className="spinner-rotator">
              <div className="spinner-left">
                <div className="spinner-circle"></div>
              </div>
              <div className="spinner-right">
                <div className="spinner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoaderComponents;
