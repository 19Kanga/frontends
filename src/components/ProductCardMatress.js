'use client'
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from "next/navigation";
import Link from 'next/link'
import Image from 'next/image'

const ProductCardMatress = ({   selectedGrid,   pageType,CallingFrom,item,categ }) => {
  const imageRef = useRef();
  const icon1Ref = useRef();
  const icon2Ref = useRef();
  const isMattresses = pageType === 'Mattress';
  const router= useRouter()
// console.log(CallingFrom,'CallingFrom___')

  const addHoverImage = () => {
      icon1Ref.current.style.display = 'inline-block';
      icon2Ref.current.style.display = 'inline-block';
   };
   const navig=(id)=>{
     router.push(`/products/Matress/${id}`)
   }

  const removeHoverImage = () => {
      icon1Ref.current.style.display = 'none';
      icon2Ref.current.style.display = 'none';
   };
    return (
        selectedGrid === 2 ? 
        <div className={`flex p-[20px] md:gap-x-4 border border-primary ${index >= 0 && index < 9 ? "border-b-0" : ""}`}>
        <div className="overflow-hidden rounded-t-xl relative " >
                <span ref={icon1Ref} className='absolute left-5 top-2 text-white hidden z-10'><i className='font-extralight fa fa-regular fa-heart'></i></span>
                <span ref={icon2Ref} className='absolute left-5 top-8 text-white hidden z-10'><i className='font-extralight fa fa-solid fa-code-compare'></i></span>
                <div className='absolute right-5 top-8 h-12 w-12  bg-primary rounded-full z-10 flex items-center justify-center text-white'>{'40%'}</div>  
              <Image width='200' height='200' src={isMattresses ? `${item.image}` : `${item.image}`} ref={imageRef}
                    alt="Product" className="h-[180px] w-[220px]  rounded-t-xl duration-1000 hover:scale-125 " />
            </div>
            <div className='flex items-center flex-wrap justify-between w-full '>
                {!isMattresses && <div className='text-center pt-3'>
                    <a className=" bg-primary p-3 px-2 xs:ms-[0px] ms-[6px] text-white rounded-md">
                        <span>Customize your bed</span>
                    </a>
                </div>}

                <div className="px-4 py-3">
                    <span className="text-gray-400 mr-3 text-xs  hover:text-primary duration-500">{categ?.find((x)=>x.id==item.id_categorie).name}</span>
                    <span className="text-black text-sm hover:text-primary duration-500 block capitalize font-medium">{item. name}</span>
                    <div className="flex items-center">
                       <React.Fragment>
                          <del>
                            <p className="text-sm text-gray-400 cursor-auto me-2">£{item.price}</p>
                        </del>
                            <p className="text-sm cursor-auto text-red-600">£{item.discount_price}</p></React.Fragment>  
                    </div>
                </div>
            </div>

        </div>
         : 
          <Link key={item.id} href='/products/[pages]/product/[details]' as={`/products/${pageType}/product/${item.name}`} className="min-w-full cursor-pointer bg-white shadow-md rounded-xl hover:shadow-xl overflow-hidden">
              <div className="overflow-hidden relative h-[250px]">
                <div className='absolute right-3 top-3 h-12 w-12 text-[13px] font-semibold  bg-primary rounded-full z-10 flex items-center justify-center text-white'>
                  {item.discount}%
                </div>  
                <Image width='200' height='200' src={isMattresses ? `${item.image}` : `${item.image}`} ref={imageRef}
                  alt="Product" className="object-cover absolute w-[100%] h-[100%] rounded-t-xl scale-0.5 duration-1000 hover:scale-125" />
              </div>
              <div>
                <span ref={icon1Ref} className='text-white hidden z-10'>
                  <i className='font-extralight fa fa-regular fa-heart'></i>
                </span>
                <span ref={icon2Ref} className='text-white hidden z-10'>
                  <i className='font-extralight fa fa-solid fa-code-compare'></i>
                </span>
              </div>
              {/* <div className='text-center pt-3'>
                  {!isMattresses && <a className="byb-badge">
                      <span>Customize your Matress</span>
                  </a>}
              </div> */}
              <div className="px-4 py-3">
                  <span className="text-gray-400 mr-3 text-xs  hover:text-primary duration-500">{categ?.find((x)=>x.id==item.id_categorie).name}</span>
                  <span className="text-black text-sm hover:text-primary duration-500 block capitalize font-medium">{item.name}</span>
                  <div className="flex items-center">
                  <React.Fragment><del>
                          <p className="text-sm text-gray-400 cursor-auto me-2">£{item.price}</p>
                      </del>
                          <p className="text-sm cursor-auto text-red-600">£{item.discount_price}</p></React.Fragment>  
                  </div>
              </div>
        </Link>
    )
}

export default ProductCardMatress