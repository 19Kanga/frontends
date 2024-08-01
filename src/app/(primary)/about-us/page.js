"use client"
import React from 'react'
import Banner from '@/components/shared/Banner'
import Link from "next/link";
import logo from "@/assets/Sosoft-logo.png";
import Image from "next/image";

export default function About() {
    return (
        <div className='col-12'>
            <Banner title='About Us' description='Ottoman Beds, Who are we ?'/>
            <div className="flex flex-col justify-center items-center py-4">
                <div className="xl:w-[75%] xl:px-[10%] md:px-[5%] md:w-[85%] flex flex-col justify-center items-center">
                    <Image
                        className="max-xl:w-32 max-sm:w-24"
                        src={logo}
                        width={170}
                        height={170}
                        alt="logo"
                    />
                    <div className="pt-2 pb-6">
                        <span className="text-[15px] font-semibold">
                            We are becoming one of the fastest growing Luxury Ottoman Storage Bed retailers in UK, we currently offer the highest level ottoman bed customisation in the market.
                            <br></br>
                            <br></br>
                            We bring together some of the finest Yorkshire craftsmen and bring materials from around the world to give you the ultimate products and bring back the zest of life to your bed room. Here at Ottoman-beds.co.uk we are extremely passionate about our products and services and most importantly our customers, it is our aim to satisfy every customer the true British way.
                            <br></br>
                            <br></br>
                            We are a in-house bespoke manufacturing facility specialising in Ottoman Storage Beds, some truly remarkable breath-taking bedroom masterpieces.
                            <br></br>
                            <br></br>
                            The online retail bed world can be tricky when you can’t touch or see in real life, so we give our customer what you see is what you actually receive. Please be sure to take advantage of our swatches service we offer this is so you can be sure it meets your interior requirements.
                           <br></br>
                            <br></br>
                            If you are not sure please contact one of our customer service team members and we will be happy to help assist you making the right choice the first time, please do remember to check our products reviews, see what our customers have to say about us and our products.
                            <br></br>
                            <br></br>
                            Feel free to contact us via Whatsapp or call us on 01924 465 009 in between 9.00am – 5.00pm  Monday – Friday.
                       
                            Speak soon and thank you for taking your time out to read  our about us page.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}