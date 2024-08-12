// pages/index.js
"use client"
import '@/css/styles.css'
import React from "react";
import { useEffect, useState } from "react";
import CarouselSlider from "@/components/carousel/CarouselSlider";
import HomeCards from "@/components/cards/HomeCards";
import { Products } from '@/data/products';
import pricematch from "@/assets/price-match-icon.png";
import delivery from "@/assets/delivery-icon.png";
import fabric from "@/assets/fabric-swatches.png";
import trustpilot from "@/assets/trustpilot-icon.png";
import ProductListMatress from '@/components/ProductListMatress';
import Image from 'next/image'
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import store from './Redux/Store/store'; // Adjust the path as necessary
export default function Home() {
  const images = [
    "/divan-beds.jpg",
    "/bed-factory-bed-frames.jpg",
    "/bed-factory-wooden-beds.jpg",
    "/bed-factory-mattresses.jpg",
    "/bed-factory-metal-beds.jpg",
    "/ottoman-beds.jpg",
    "/tv-beds.jpg",
    "/bunk.jpg",
    "/divan-bed-base.jpg",
    "/headboards.jpg",
    "/custom-szie-beds_1.jpg",
    "/view-all-beds_2.jpg",
  ];

  const buttons = [
    { defaultText: "Divan Beds from €198", buttonText: "EXPLORE" },
    { defaultText: "Bed frames from €89", buttonText: "EXPLORE" },
    { defaultText: "Wooden frames from €99", buttonText: "EXPLORE" },
    { defaultText: "Mattresses from €79", buttonText: "EXPLORE" },
    { defaultText: "Metal Beds from €89", buttonText: "EXPLORE" },
    { defaultText: "Ottoman Beds from €249", buttonText: "EXPLORE" },
    { defaultText: "Bunk Beds", buttonText: "EXPLORE" },
    { defaultText: "Tv Beds", buttonText: "EXPLORE" },
    { defaultText: "Divan Base only", buttonText: "EXPLORE" },
    { defaultText: "Headboards", buttonText: "EXPLORE" },
    { defaultText: "Custom sizes", buttonText: "EXPLORE" },
    { defaultText: "View all Beds", buttonText: "EXPLORE" },
  ];

  const [selected, setSelected] = useState("Featured")
    const [isOpen, setIsOpen] = useState(false);
    const [selectedGrid, setSelectedGrid] = useState(4);
    const [openBottom, setOpenBottom] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    const [mattresses, setMattresses] = useState([]);

  return (
    <main className="">
      <CarouselSlider />
      <div className="col-12 pb-12 px-[4.3%]">
      <div className='xl-[100%] my-10'>
        <div className="divider divider-info"  >
          <div style={{ fontWeight: 600, fontSize: '24px',padding:'0 2% 0 2%' }}>Our Collections</div></div>
      </div>

      <div className='w-[100%] bg-gray-200'>
        {/* <div className=''> */}
          <div className="grid grid-cols-3 gap-10 pb-10 overflow-x-hidden max-md:gap-y-10 max-sm:gap-x-5 max-sm:gap-y-5 max-xl:grid-cols-2">
            {images.map((imageUrl, index) => (
              <HomeCards
                key={index}
                index={index}
                imageUrl={imageUrl}
                buttons={buttons}
              />
            ))}
          </div>
        {/* </div> */}
      </div>
      <div className=''>
      <div >
      <div className='mt-8 mb-3 text-center fw-1000 trending-text' >Trending
      </div>
      <div className="underline-container ">
      <div className="underline"></div>
      <div className="underline"></div>
      </div>
      </div>
      <div className='trending-text-below'>Top view in this weeks</div>
        {/* <div className='grid grid-cols-2 gap-8 my-8 row lg:grid-cols-4 md:grid-cols-3'> */}
        <div className='py-8 list'>
        {/* {Products.slice(0, 16).map((item, i) => (<ProductListMatress key={i} {...item} index={i} />))} */}
          <ProductListMatress CallingFrom='Mattress' pageType={'Mattress'} selectedGrid={selectedGrid} setSelectedGrid={setSelectedGrid} />
        </div>
        <div className='my-8 text-center'>
          <button className="btn btn-outline rounded-full font-bold border-[2px] px-4 py-1">Load More</button>
        </div>
        <div className='grid gap-8 my-16 md:grid-cols-2' >
          <div className='h-[100%] w-[100%] relative' >
            <img src='/offer-1.png' className='w-[100%] h-[100%]' style={{ objectFit: 'cover' }}></img>
            <div className='offer-text text-[#FFF8F0]'>
              <div className='text-[24px] md:text-[18px] lg:text-[24px] font-[500] text-center text-nowrap'>LOOKBOOK 2023</div>
              <div className='text-[14px] md:text-[12px] lg:text-[14px] font-[600] text-center text-nowrap' style={{ lineHeight: "24PX" }}>MAKE LOVE THIS LOOK</div>
            </div>
          </div>
          <div className='h-[100%] w-[100%] relative' >
            <img src='/offer-2.png' className='w-[100%] h-[100%]' style={{ objectFit: 'cover' }}></img>
            <div className='offer-text text-[#1C2C39]'>
              <div className='text-[18px] md:text-[14px] lg:text-[18px] font-[500] text-center mb-5 text-nowrap'>SUMMER SALE</div>
              <div className='text-[50px] md:text-[30px] lg:text-[50px] font-[600] text-center text-nowrap' style={{ lineHeight: "24PX" }}>UP TO 70%</div>
            </div>
          </div>
        </div>
      </div>
      <nav className="h-[10vh] py-3 relative max-md:hidden">
          <ul className="p-0 m-0 w-[75%] absolute left-1/2  top-0 h-[100%] flex justify-between -translate-x-1/2  px-2 items-center max-xl:text-[0.8rem] max-2xl:w-[100%] max-md:hidden">
            <li className="flex items-center gap-2 cursor-pointer">
              <svg class=" t4s-icon-help" viewBox="0 0 32 32" width="32" height="32"><path d="M 16 3.205 c -7.066 0 -12.795 5.728 -12.795 12.795 s 5.729 12.794 12.795 12.795 c 7.067 -0.001 12.795 -5.729 12.795 -12.795 s -5.729 -12.795 -12.795 -12.795 Z M 15.999 21.864 c -3.233 0 -5.863 -2.631 -5.863 -5.864 s 2.631 -5.864 5.864 -5.864 h 0.001 c 3.233 0 5.863 2.631 5.863 5.864 s -2.631 5.864 -5.865 5.864 Z M 22.395 13.327 l 4.028 -2.693 c 0.832 1.609 1.305 3.433 1.305 5.366 c 0 1.909 -0.461 3.71 -1.273 5.305 l -4.035 -2.699 c 0.327 -0.805 0.511 -1.683 0.511 -2.606 c 0 -0.948 -0.191 -1.85 -0.535 -2.673 Z M 25.89 9.708 l -3.99 2.668 c -0.58 -0.942 -1.377 -1.733 -2.325 -2.305 l 2.669 -3.991 c 1.466 0.926 2.712 2.167 3.645 3.629 Z M 21.316 5.55 l -2.698 4.034 c -0.808 -0.33 -1.69 -0.515 -2.617 -0.515 h -0.001 c -0.927 0 -1.809 0.185 -2.617 0.515 l -2.698 -4.034 c 1.597 -0.816 3.402 -1.279 5.315 -1.279 s 3.719 0.463 5.316 1.279 Z M 9.756 6.078 l 2.67 3.992 c -0.95 0.574 -1.748 1.367 -2.329 2.311 l -3.991 -2.669 c 0.934 -1.464 2.182 -2.707 3.65 -3.634 Z M 5.574 10.639 l 4.029 2.694 c -0.343 0.822 -0.533 1.722 -0.533 2.667 c 0 0.92 0.183 1.797 0.509 2.599 l -4.036 2.7 c -0.81 -1.593 -1.27 -3.393 -1.27 -5.299 c 0 -1.931 0.472 -3.753 1.303 -5.361 Z M 6.069 22.229 l 3.992 -2.669 c 0.576 0.959 1.377 1.766 2.331 2.35 l -2.669 3.99 c -1.473 -0.937 -2.724 -2.193 -3.654 -3.671 Z M 10.65 26.432 l 2.695 -4.03 c 0.818 0.34 1.713 0.529 2.654 0.529 c 0.001 0 0.001 0 0.001 0 c 0.941 0 1.838 -0.189 2.656 -0.529 l 2.695 4.03 c -1.606 0.827 -3.424 1.297 -5.351 1.297 s -3.745 -0.47 -5.35 -1.297 Z M 22.278 25.899 l -2.669 -3.991 c 0.952 -0.583 1.751 -1.387 2.327 -2.344 l 3.992 2.67 c -0.93 1.475 -2.179 2.729 -3.65 3.665 Z" /></svg>
              <svg style={{fill:"none"}} viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
              {/* <Image src={pricematch} width={23} height={23} alt="price" /> */}
              <span>Price Match Guarantee</span>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <svg class=" t4s-icon-refesh" viewBox="0 0 32 32" width="32" height="32"><path d="M 27.729 18.664 c 0 6.467 -5.261 11.729 -11.729 11.729 s -11.729 -5.261 -11.729 -11.729 c 0 -6.452 5.237 -11.703 11.684 -11.728 v 5.333 l 10.129 -5.865 l -10.129 -5.864 v 5.33 c -7.047 0.024 -12.751 5.741 -12.751 12.794 c 0 7.065 5.727 12.795 12.795 12.795 c 7.066 0 12.795 -5.73 12.795 -12.795 h -1.066 Z M 17.022 2.39 l 6.935 4.015 l -6.935 4.016 v -8.03 Z" /></svg>
              {/* <Image src={delivery} width={23} height={23} alt="delivery" /> */}
              <span>Free Delivery Over</span>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <svg class=" t4s-icon-door-lock" viewBox="0 0 27 32" width="27" height="32"><path d="M 13.333 2.667 c -7.36 0 -13.333 5.973 -13.333 13.333 s 5.973 13.333 13.333 13.333 c 7.36 0 13.333 -5.973 13.333 -13.333 s -5.973 -13.333 -13.333 -13.333 Z M 13.333 28.267 c -6.773 0 -12.267 -5.493 -12.267 -12.267 s 5.493 -12.267 12.267 -12.267 c 6.773 0 12.267 5.493 12.267 12.267 s -5.493 12.267 -12.267 12.267 Z" /><path d="M 17.6 12.8 c 0 -2.347 -1.92 -4.267 -4.267 -4.267 s -4.267 1.92 -4.267 4.267 c 0 1.6 0.907 3.04 2.24 3.733 l -2.24 6.4 h 8.533 l -2.187 -6.4 c 1.28 -0.747 2.187 -2.133 2.187 -3.733 Z M 16.107 21.867 h -5.547 l 1.707 -4.96 l 0.32 -0.853 l -0.8 -0.427 c -1.013 -0.587 -1.653 -1.653 -1.653 -2.827 c 0 -1.76 1.44 -3.2 3.2 -3.2 s 3.2 1.44 3.2 3.2 c 0 1.173 -0.64 2.24 -1.653 2.773 l -0.8 0.427 l 0.267 0.853 l 1.76 5.013 Z" /></svg>
              {/* <Image src={fabric} width={23} height={23} alt="fabric" /> */}
              <span>Free Fabric Samples</span>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <svg class=" t4s-icon-diamond" viewBox="0 0 28 32" width="28" height="32"><path d="M 27.467 10.667 l -6.293 -7.467 h -14.4 l -6.293 7.467 l -0.48 0.533 l 0.427 0.533 l 13.547 17.067 l 13.973 -17.6 l -0.48 -0.533 Z M 26.08 10.667 h -10.72 l 5.333 -6.347 l 5.387 6.347 Z M 13.92 10.667 l -5.547 -6.4 h 10.987 l -5.44 6.4 Z M 7.147 4.427 l 5.387 6.24 h -10.667 l 5.28 -6.24 Z M 13.44 11.733 v 14.667 l -11.68 -14.667 h 11.68 Z M 14.507 26.4 v -14.667 h 11.627 l -11.627 14.667 Z" /></svg>
              {/* <Image src={trustpilot} width={23} height={23} alt="trustpilot" /> */}
              <span>Five Star Trust Pilot Reviews</span>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
