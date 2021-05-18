import React from "react";

const Drawer = ({ children, isOpen, className = "" }) => {
  return (
    <div className={`root ${className} ${isOpen ? "isOpen" : ""}`}>
        
      <style jsx>{`
        .root {
          background-color: #263742;
          position: absolute;
          width: 100vw;
          height: 100vh;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          transform: translateY(-100%);
          transition: transform 300ms;
          z-index: -1;
        }
        .isOpen {
          transform: translateY(0);
        }
        ${isOpen ? `:global(body) { overflow: hidden; } ` : ``}
      `}</style>
      {children}
    </div>
  );
};

export default Drawer;