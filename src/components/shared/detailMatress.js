"use client"
import React from 'react'
import Link from 'next/link'
import './product.css'
import { useDispatch } from "react-redux";
import { addToCart } from '@/app/Redux/Action/actions';
import { useState, useEffect } from "react";
import Image from "next/image";
import Cart from '@/components/shared/Cart'

const dummyProduct = {
  id: '1',
  name: 'Product 1',
  description: 'This is a detailed description of Product 1.',
  price: 100,
  image: '/images/product1.jpg',
};
const sortOptions = [
    "Featured Featured Featured Featured ",
    "Sky uid 3'",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
]

export default function DetailMatress({id,product}){
   const [isOpen, setIsOpen] = useState(false);
   const [selected, setSelected] = useState("Maitress")
    // const [openBottom, setOpenBottom] = useState(false);
   const handleClick = () => setIsOpen(!isOpen);
   const det=id.replace(/[0-9%]/g, ' ')
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const payload = {
      id: dummyProduct.id,
      name: dummyProduct.name,
      price: dummyProduct.price,
    };
    dispatch(addToCart(payload));
  };
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 1000); // Duration of the shake animation
    }, 5000); // Interval between each shake animation

    return () => clearInterval(interval);
  }, []);

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="mt-10 w-[100%] px-0 max-sm:px-1 max-sm:mt-5">
        <div className="flex w-full gap-8 max-md:flex-col max-lg:flex-wrap justify-evenly max-lg:justify-center">
          {/* <ProductSidebar /> */}

          <div className="flex justify-center w-full">
            <div className="flex flex-col w-full max-xl:w-full max-lg:w-[70%] max-md:w-[90%] max-sm:w-full">
              <div className="max-sm:w-full w-[100%] min-h-[28em] relative max-md:min-h-[25em] max-sm:min-h-[20em]">
                <Image
                  src={product.image}
                  alt="openbed"
                  layout="fill"
                  objectFit="cover"
                />               
              </div>
            </div>
          </div>

          {/* Bed Size section */}
          <div className="w-full max-lg:mt-4 max-lg:text-center">
            <div>
              <p className="text-[1rem] font-bold">{product.name}</p>
            </div>

              <div className="mt-4">
                <div>
                    <div className="relative inline-block w-full text-left">                        
                      <span className='text-capitalize font-black text-black text-[0.7rem]'>SIZE: SMALL SINGLE 2FT6</span>
                        <div className='mt-2'>
                            <button onClick={handleClick} type="button" className="inline-flex min-w-56 w-full border border-gray-500 justify-between gap-x-1.5 bg-white px-5 py-2 text-sm  text-gray-400 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" >
                                {selected}
                                    <svg className="-mr-1 h-5 w-5 text-gray-400 text-[52px]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        {isOpen ? <div className="absolute right-0 z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                {sortOptions.map((item, i) => (
                                    <div key={i} className="py-1" role="none" onClick={() => { setSelected(item); setIsOpen(false) }}>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-base-200" role="menuitem" tabIndex="-1" id="menu-item-0">
                                          <div className='flex items-center gap-5'>
                                             <div className="relative w-11 h-11">
                                                <Image
                                                src="/Double-small.png"
                                                alt="openbed"
                                                layout="fill"
                                                objectFit="contain"
                                                />
                                             </div>
                                             <span>{item}</span>
                                          </div>
                                       </a>
                                    </div>
                                ))}
                        </div> : <div></div>}
                    </div>
                    <p className="text-[#00acbb] font-bold text-[1.1rem] mt-3 mb-3">£{product.discount_price}</p>

                  <div className="flex items-center gap-3 max-md:justify-center my-7">
                    <div className="flex border-black border-[1px] justify-between items-center rounded-2xl py-[0.45rem] px-3 w-1/5 text-sm">
                      <svg
                        focusable="false"
                        className="w-3 h-3 cursor-pointer icon icon--minus"
                        viewBox="0 0 10 2"
                        role="presentation"
                        // onClick={handleDec:rease}
                      >
                        <path d="M10 0v2H0V0z" fill="currentColor"></path>
                      </svg>

                      <span>5</span>

                      <svg
                        focusable="false"
                        className="w-3 h-3 cursor-pointer icon icon--plus"
                        viewBox="0 0 10 10"
                        role="presentation"
                        // onClick={handleIncrease}
                      >
                        <path
                          d="M6 4h4v2H6v4H4V6H0V4h4V0h2v4z"
                          fill="currentColor"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className='drawer-end  w-1/5'>
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                              <label htmlFor="my-drawer" className="drawer-button">
                                  <div
                                    className={`filter cursor-pointer bg-[#00acbb] w-[100%] hover:bg-[#00666e] text-sm text-white font-bold py-[0.45rem] text-center px-3 rounded-2xl ${shake ? "animate__animated animate__shakeX" : ""
                                      }`}
                                    // onClick={() => console.log("Add to cart clicked")}
                                  >
                                    Add to Cart
                                  </div>
                                  </label>
                              </div>
                            <div className="z-50 drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <div className="relative flex min-h-full p-0 m-0 join join-vertical w-80 text-base-content">
                                    <Cart />
                                </div>
                            </div>
                        </div>
                        <div className='p-[0.45rem] border-[1px] border-black rounded-[50px]'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill='none'
                    >
                      <path fill="#ffffff" d="M0 0h24v24H0z" />
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
                        stroke="#000"
                        stroke-width="1"
                      />
                    </svg>
                    </div>

                    <button className="rounded-2xl py-[0.45rem] border-[1px]  border-black text-center px-3 text-sm w-1/5">
                      Order Swatch
                    </button>
                  </div>
                  <div className='flex flex-col gap-1 text-[0.8rem] text-black p-3 border-[2px] text-start border-gray'>
                     <p>Free Shipping to: <strong>Pakistan</strong></p>
                     <p>Order within the next <strong>05 Hours 57 minutes 14 Seconds</strong> for dispatch today, and you'll receive your</p>
                     <p>package between <strong>Jul 27 and Aug 05</strong></p>
                  </div>
                  <div className='flex w-full py-3'>
                     <div className='relative flex flex-col items-center justify-center w-1/3 gap-1 p-2 detail-deliver border-[2px] border-gray'>
                             <i className='fas fa-bag-shopping text-[1.65rem] text-[#00acbb] '></i>
                             <h4 className='m-0 text-[#00acbb] text-[0.9rem] font-semibold'>Ordered</h4>
                             <span className='text-[0.8rem]'>Jul 18</span>
                             <div className='absolute top-[50%] -right-[4.5%] bg-white border-t-[2px] border-r-[2px] border-gray w-[15px] h-[15px] -translate-y-1/2 rotate-45'></div>
                     </div>
                     <div className='relative flex flex-col items-center justify-center w-1/3 gap-1 p-2 detail-deliver border-y-[2px] border-gray'>
                             <i className='fas fa-shipping-fast text-[1.65rem] text-[#00acbb] '></i>
                             <h4 className='m-0 text-[#00acbb] text-[0.9rem] font-semibold'>Order Ready</h4>
                             <span className='text-[0.8rem]'>Jul 23 - jul 28</span>
                             <div className='absolute top-[50%] -right-[4.5%] bg-white border-t-[2px] z-20 border-r-[2px] border-gray w-[15px] h-[15px] -translate-y-1/2 rotate-45'></div>
                     </div>
                     <div className='relative flex flex-col items-center justify-center w-1/3 p-3 detail-deliver border-[2px] border-gray'>
                             <i className='fas fa-location-dot text-[1.65rem] text-[#00acbb] mb-1'></i>
                             <h4 className='m-0 text-[#00acbb] text-[0.9rem] font-semibold'>Delivered</h4>
                             <span className='text-[0.8rem]'>Jul 23 - jul 28</span>
                     </div>
                  </div>
                  <div className="flex gap-1 mb-10">
                    <div className="relative w-13 h-13">
                      <Image
                        src="/Gpay.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="relative w-13 h-13">
                      <Image
                        src="/Applepay.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="relative w-13 h-13">
                      <Image
                        src="/Visapay.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="relative w-13 h-13">
                      <Image
                        src="/Masterpay.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="relative w-13 h-13">
                      <Image
                        src="/Masterpay2.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>

                    <div className="relative w-13 h-13">
                      <Image
                        src="/shopifypay.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="relative w-13 h-13">
                      <Image
                        src="/Klarnapay.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                      <div className="relative w-13 h-13">
                        <Image
                          src="/Palpay.svg"
                          alt="openbed"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                    <div className="relative w-13 h-13">
                      <Image
                        src="/Xpresspay.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>

                  <div className="mt-4 leading-7">
                    <p className="mb-2 font-semibold">Ask a Question</p>
                    <p className='text-[14px] font-medium'>Availability : <strong>In Stock</strong></p>
                    <p className='text-[14px] font-medium'>
                      Categories: all Bed Beds Beds & Bed Frames Divan Bed
                      Double Bed Double Bed Frame Double Bed Size Double Beds
                      Heavy Duty Ottoman End or Side Lift Ottoman bed Home page
                      king size bed Ottoman Base Without Headboard Ottoman Bed
                      Reinforced Divan Bed Bases Single Beds Storage Bed Super
                      King Size Bed
                    </p>
                    <p className='text-[14px] font-medium'>Tags: without headboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
