// components/HomeCards.js
'use client'
import React, { useState,useEffect } from "react";
import Image from "next/image";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const HomeCards = ({ index, imageUrl, buttons }) => {
  const [showButtonIndex, setShowButtonIndex] = useState(null);
  // const [he, setHe] = useState(null);
    const router = useRouter()
  useEffect(() => {
    // var widths = document.getElementById('hop').offsetWidth;
    // document.getElementById('scal').style.height = widths+'px';
    // console.log(document.getElementById('scal').offsetWidth)
  });
 
  return (
    // <div className="relative">
      <div
        className="relative flex items-center justify-center bg-gray-200 cursor-pointer"
        onClick={()=>{router.push(`/products/${buttons}`)}}
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
          <div className="max-md:hidden text-center  px-5 py-2 w-[90%] rounded mt-1 border border-black ">
              {buttons}
            </div>
        </div>
      </div>
    // </div>
  );
};

export default HomeCards;
