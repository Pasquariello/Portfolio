'use client'
import React, { useState, useEffect } from 'react';
import { titillium } from '../ui/fonts';

function TechBox({title, initColor, icon}) {
  const [mouseInDiv, setMouseInDiv] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // const randomRGBANumber = () => {
  //   const min = Math.ceil(0);
  //   const max = Math.floor(255);
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }

  // const initColor = `rgb(${randomRGBANumber() % 256}, ${randomRGBANumber() % 256}, ${randomRGBANumber() % 256})`
  

  const [bgColor, setBgColor] = useState(initColor); // Initial background color

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

        window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Calculate color based on mouse position (example: using x and y as RGB values)
    const newColor = `rgb(${mousePosition.x % 256}, ${mousePosition.y % 256}, ${(mousePosition.x + mousePosition.y) % 256})`;
    if (mouseInDiv) {
    setBgColor(newColor);
    }
  }, [mousePosition, mouseInDiv]);

  return (
    <div
      onMouseEnter={()=>{setMouseInDiv(true)}}
      onMouseLeave={()=>{setMouseInDiv(false)}}
      className='p-4 flex justify-center hover:cursor-pointer w-full'
      style={{
        backgroundColor: bgColor,
        transition: 'background-color 0.3s ease', // Add transition for smooth effect
      }}
    >
        {icon}
      {/* <p className={`${titillium.className} lg:text-left text-white text-lg sm:text-xl font-normal tracking-wider leading-8`}>
        {title}
      
      </p> */}
    </div>
  );
}

export default TechBox;