'use client'
import React, { useState, useEffect } from "react";

interface ScrollToTopButtonProps {} 

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({}) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 50); 
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const  scrollToTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <button
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
    //   className="scroll-to-top-button visible"
      onClick={scrollToTop}
    >
      up
    </button>
  );
};

export default ScrollToTopButton;
