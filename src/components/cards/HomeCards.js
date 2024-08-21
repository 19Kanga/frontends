// components/HomeCards.js
'use client'
import React, { useState,useEffect } from "react";
import Image from "next/image";

const HomeCards = ({ index, imageUrl, buttons }) => {
  const [showButtonIndex, setShowButtonIndex] = useState(null);
  // const [he, setHe] = useState(null);
  
  useEffect(() => {
    // var widths = document.getElementById('hop').offsetWidth;
    // document.getElementById('scal').style.height = widths+'px';
    // console.log(document.getElementById('scal').offsetWidth)
  });
 
  return (
    // <div className="relative">
      <div
        className="relative flex items-center justify-center bg-gray-200 cursor-pointer"
        onMouseEnter={() => setShowButtonIndex(index)}
        onMouseLeave={() => setShowButtonIndex(null)}
        id='hop'
      >
        <Image
          src={imageUrl}
          id="scal"
          width='500'
          height='400'
          alt={`Card ${index + 1}`}
          objectFit='cover'
          className='scal max-md:h-[216px] lg:h-[388px]'
          style={{ width:'100%'}}
        />
        <div className="absolute bottom-0 left-0 flex justify-center flex-col items-center w-[100%] shadow-xl max-md:max-md:shadow-none py-2 max-md:py-0 " style={{background: 'rgba(207, 206, 202, 0.7)'
        }}>
          {buttons[index].defaultText && (
            <div className="  px-2 py-1 max-md:px-0 rounded max-md:text-center font-[700] text-[22.5px] leading-[27.22px]" >
              {buttons[index].defaultText}
            </div>
          )}
          {showButtonIndex !== null && buttons[showButtonIndex] && (
            <div className="max-md:hidden text-center  px-5 py-2 w-[90%] rounded mt-1 border border-black ">
              {buttons[showButtonIndex].buttonText}
            </div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default HomeCards;
