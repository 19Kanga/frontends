'use client'
import React from 'react'
import {useParams} from 'next/navigation'
import DetailMatress from '@/components/shared/detailMatress'
import DetailsBed from '@/components/shared/detailsBed'
import ProductbaseDropdown from "@/components/ProductbaseDropdown";
import BedSizeTable from "@/components/BedSizeTable";
import Faq from "@/components/Faq";
import { useState, useEffect } from "react";
import BaseProducts from "@/components/BaseProducts";

export default function DetailsPage(){
     const [dimensionsOpen, setDimensionsOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);

  const dimensionsDropdown = () => {
    setDimensionsOpen(!dimensionsOpen);
    setFaqOpen(false);
    setDescriptionOpen(false);
    setReviewOpen(false);
  };

  const faqDropdown = () => {
    setFaqOpen(!faqOpen);
    setDimensionsOpen(false);
    setDescriptionOpen(false);
    setReviewOpen(false);
  };
  const descriptionDropdown = () => {
    setDescriptionOpen(!descriptionOpen);
    setFaqOpen(false);
    setDimensionsOpen(false);
    setReviewOpen(false);
  };


  const reviewDropdown = () => {
    setReviewOpen(!reviewOpen);
    setFaqOpen(false);
    setDimensionsOpen(false);
    setDescriptionOpen(false);
  };

    const router= useParams()
    const {pages,details}=router
    return(
        <>
        <div className='w-full px-[3%]'>
        {pages==='Mattress' ?
            <DetailMatress id={details}/>:
            <DetailsBed details={details}/>
        }
        </div>
        <ProductbaseDropdown />
        <div className=" p-6 hidden mb-20 max-lg:block text-[#383f48] border-t-2 border-black-800">
        <div className="flex justify-between max-lg:flex-col-reverse">
          <div className="flex justify-between w-[40%] px-10 max-2xl:w-[50%] max-xl:px-0 max-xl:w-[60%] gap-3 flex-col max-lg:w-[100%] max-xl:justify-around max-md:flex-col max-md:my-3">
            <ul className="p-0 m-0  max-lg:items-center leading-7 text-[0.9rem] max-xl:text-[0.85rem]">
              <div className="flex justify-between items-center bg-[#EEEEEE] h-[6.5vh] w-[100%] pl-3">
                <li className="font-semibold text-[1rem]">Dimensions</li>{" "}
                <button
                  className="hidden max-lg:inline w-12 h-[100%] text-[1.5rem] bg-[#1c2c39] text-white focus:outline-none transition-transform duration-300 transform "
                  onClick={dimensionsDropdown}
                >
                  {dimensionsOpen ? "--" : "+"}
                </button>
              </div>
              <div className="hidden max-lg:block">
                {dimensionsOpen && (
                  <div>
                    <BedSizeTable />
                    <BaseProducts />
                  </div>
                )}
              </div>
            </ul>

            <ul className="p-0 m-0 max-lg:items-center leading-7 text-[0.9rem] max-xl:text-[0.85rem]">
              <div className="flex justify-between items-center bg-[#EEEEEE] h-[6.5vh] w-[100%] pl-3">
                <li className="font-semibold text-[1rem]">
                  Frequently Asked Questions
                </li>{" "}
                <button
                  className="hidden max-lg:inline  text-[1.5rem] w-12 h-[100%] bg-[#1c2c39] text-white focus:outline-none transition-transform duration-300 transform "
                  onClick={faqDropdown}
                >
                  {faqOpen ? "--" : "+"}
                </button>
              </div>

              <div className="hidden max-lg:block">
                {faqOpen && <div>
                  
                  <Faq/>
                  <BaseProducts />
                  </div>}
              </div>
            </ul>

            <ul className="p-0 m-0 max-lg:items-center leading-7 text-[0.9rem] max-xl:text-[0.85rem]">
            <div className="flex justify-between items-center bg-[#EEEEEE] h-[6.5vh] w-[100%] pl-3">
                <li className="font-semibold text-[1rem]">Description</li>{" "}
                <button
                  className="hidden max-lg:inline text-[1.5rem] w-12 h-[100%] bg-[#1c2c39] text-white focus:outline-none transition-transform duration-300 transform "
                  onClick={descriptionDropdown}
                >
                  {descriptionOpen ? "--" : "+"}
                </button>
              </div>
              <div className="hidden max-lg:block">{descriptionOpen && <BaseProducts />}</div> 
            </ul>

            <ul className="p-0 m-0 max-lg:items-center leading-7 text-[0.9rem] max-xl:text-[0.85rem]">
              <div className="flex justify-between items-center bg-[#EEEEEE] h-[6.5vh] w-[100%] pl-3">
                <li className="font-semibold text-[1rem]">Reviews</li>{" "}
                <button
                  className="hidden max-lg:inline w-12 text-[1.5rem] h-[100%] bg-[#1c2c39] text-white focus:outline-none transition-transform duration-300 transform "
                  onClick={reviewDropdown}
                >
                  {reviewOpen ? "--" : "+"}
                </button>
              </div>
              <div className="hidden max-lg:block">{reviewOpen && <BaseProducts />}</div> 
            </ul>
          </div>
        </div>
      </div>
      </>
    )
}
