'use client'
import React from 'react'
import Banner from '@/components/shared/Banner'
import Image from 'next/image'
import {useState,useEffect} from 'react'

export default function Cart() {
    const [active,setActive]=useState(true);

    const shopping = [
        {
            id: 1,
            name: 'Ottoman Gas Lift Beautifully',
            qte:1,
            price: '270',
            datas: [
                {
                    libelle: 'estimated Between',
                    value: 'Jul 26 and Aug 05'
                },
                {
                    libelle: 'size',
                    value: 'small double 4ft + $245'
                },
                {
                    libelle: 'color',
                    value: 'linen whisper white £25'
                },
                {
                    libelle: 'HeadBoard Height',
                    value: 'With out HeadBoard'
                },
                {
                    libelle: 'would you like to add a Mattres?',
                    value: 'No'
                },
                {
                    libelle: 'Assembly service',
                    value: 'No'
                },
                {
                    libelle: 'Deliver to room service',
                    value: 'No'
                },
                {
                    libelle: 'furniture removal service',
                    value: 'No'
                }
            ],
        },
        {
            id: 1,
            name: 'Ottoman Gas Lift Beautifully',
            qte: 2,
            price: '270',
            datas: [
                {
                    libelle: 'estimated Between',
                    value: 'Jul 26 and Aug 05'
                },
                {
                    libelle: 'size',
                    value: 'small double 4ft + $245'
                },
                {
                    libelle: 'color',
                    value: 'linen whisper white £25'
                },
                {
                    libelle: 'HeadBoard Height',
                    value: 'With out HeadBoard'
                },
                {
                    libelle: 'would you like to add a Mattres?',
                    value: 'No'
                },
                {
                    libelle: 'Assembly service',
                    value: 'No'
                },
                {
                    libelle: 'Deliver to room service',
                    value: 'No'
                },
                {
                    libelle: 'furniture removal service',
                    value: 'No'
                }
            ],
        },
    ]

    const List=({items})=>{
        return (
            <div className='text-[.75rem] text-[#878787] capitalize'>
                <strong>{items.libelle}:&nbsp;</strong>{items.value}
            </div>
        )
    }
    return (
        <>
            <Banner title='Shopping cart' />
            <div className='px-[8%] max-md:px-[3%] gap-2 py-10'>
                <div className='flex w-full max-md:hidden border-b-[2px] border-[#00acbb] pb-2 text-[12px]'>
                    <div className='font-bold col-md-5 text-start'>PRODUCT</div>
                    <div className='font-bold text-center col-md-3'>PRICE</div>
                    <div className='font-bold text-center col-md-2'>QUANTITY</div>
                    <div className='font-bold col-md-2 text-end'>TOTAL</div>
                </div>
                <div className='flex flex-col'>
                    {shopping?.map((data)=>
                    <div className='flex gap-5 w-full border-b-[2px] border-[#00acbb] py-6'>
                    <Image src='/OttomanEndLiftBaseclosedBg.jpg' className='w-50 h-30 lg:hidden max-md:block' width='100' height='100' alt='' />
                    <div className='row w-[100%] max-md:flex-col'>
                        <div className='col-md-5 flex items-center gap-5 pb-2 max-md:!w-[100%] max-md:!border-b-[1px] max-md:!border-dashed max-md:!border-[#00acbb]'>
                            <Image src='/OttomanEndLiftBaseclosedBg.jpg' className='w-44 h-30 max-md:hidden' width='200' height='200' alt='' />
                            <div className='flex flex-col gap-2'>
                                <span className='text-[1rem] font-meedium'>{data.name}</span>
                                <div className='flex flex-col gap-1'>
                                    {data.datas?.map((x)=>
                                            <List items={x} />
                                        )}
                                </div>
                                <i className='cursor-pointer fas fa-trash'></i>
                            </div>
                        </div>
                        <div className='col-md-3 flex justify-center items-center max-md:!w-[100%] max-md:!justify-start py-2 max-md:!border-b-[1px] max-md:!border-dashed max-md:!border-[#00acbb]'><span>£ {data.price}</span></div>
                        <div className='col-md-2 flex justify-center items-center py-2 max-md:!w-[100%] max-md:!justify-start max-md:!border-b-[1px] max-md:!border-dashed max-md:!border-[#00acbb]'>
                            <div className="flex gap-4 border-black border-[1px] justify-between items-center rounded-2xl py-[0.5rem] px-4 text-[11px]">
                                <i className='fas fa-trash text-[10px]'></i>

                                <span>{data.qte}</span>

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
                        </div>
                        <div className='col-md-2 flex justify-end items-center pt-2 lg:text-end max-md:!w-[100%] max-md:!justify-start font-bold'>£ {data.price * data.qte}</div>
                    </div>
                    </div>
                    )}
                </div>
                <div className='pt-12 pb-5 row max-md:flex-col max-md:gap-13'>
                    <div className='flex flex-col gap-8 lg:w-[50%] max-md:w-[100%]'>
                        <div className='flex flex-col gap-2'>
                            <span>Add Order Note</span>
                            <textarea className='h-[100px] resize-none w-[100%] border-[1px] p-2 text-start border-[#00acbb]' placeholder='How can we help you ?'></textarea>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h4 className='text-md'>Coupn</h4>
                            <span className='text-md'>Coupon code will work on checkout page</span>
                            <input type='text' placeholder='Coupon code' className='w-full py-2 px-3 border-[1px] border-[#00acbb]' />
                        </div>
                    </div>
                    <div className='flex lg:w-[50%] max-md:w-[100%] lg:justify-end'>
                        <div className='flex flex-col gap-3 w-[100%] lg:max-w-md max-md:w-[100%]'>
                        <div className='flex items-center w-full gap-3'>
                            <input className='db-field-control w-[60%] !rounded-0' style={{borderRadius:0, borderColor:'black'}} type='text' placeholder='CODE5%'></input>
                            <button className='db-btn w-[40%] bg-black text-white rounded-0 capitalize font-semibold'>COUPON</button>    
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex overflow-hidden w-full rounded-[50px] border-[1px] border-[#00acbb]'>
                                <div onClick={()=>setActive(true)} className={`cursor-pointer text-center hover:bg-[#00acbb] hover:text-white text-[0.95rem] font-medium p-2 text-black w-1/2 ${active && 'bg-[#00acbb] text-white'}`}>Pay deposit</div>
                                <div onClick={()=>setActive(false)} className={`cursor-pointer text-center hover:bg-[#00acbb] hover:text-white text-[0.95rem] font-medium p-2 text-black w-1/2 ${!active && 'bg-[#00acbb] text-white'}`}>Pay full amount</div>
                            </div>
                            <div className='flex flex-col gap-2.5'>
                                {active ?
                                <>
                                <div className='flex items-center justify-between'>
                                    <span className='text-start font-medium text-[1rem]'>Total price</span>
                                    <span className='text-end font-medium text-[1rem]'>£150.00</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='text-start font-medium text-[1rem]'>Pay on delivery of god</span>
                                    <span className='text-end font-medium text-[1rem]'>£150.00</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='text-start font-semibold text-[1rem]'>Pay now</span>
                                    <span className='text-end font-semibold text-[1rem]'>£250.00</span>
                                </div></>:
                                <div className='flex items-center justify-between'>
                                    <span className='text-start font-semibold text-[1rem]'>Total price</span>
                                    <span className='text-end font-semibold text-[1rem]'>£350.00</span>
                                </div>
                                }
                            </div>
                            <div className='flex flex-col items-center gap-1 mt-3 lg:items-end'>
                                <p className='text-[.85rem] text-[#878787]'>Tax included and shipping calculated and checkout</p>
                                <div className='flex items-center gap-2'>
                                    <input type='checkbox' value='ok'/>
                                    <span className='text-[.85rem] text-[#878787]'>I agree with the terms and conditions</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 py-2 lg:items-end">
                                <button className='db-btn rounded-[50px] bg-[#00acbb] lg:w-[35%] shodow-sm text-white font-bold w-full'>Check out</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative mt-11 border-[2px] rounded-sm border-[#00acbb] py-15 px-6 w-full'>
                        <span className='absolute px-5 py-3 text-xl font-bold -translate-x-1/2 bg-white -top-7 left-1/2'>Estimate shipping</span>
                        <div>
                            <div className='gap-5 row max-md:flex-col'>
                                <div className="flex flex-col gap-1 lg:w-[23.6%] max-md:w-[100%]">
                                    <label className='text-base-200'>Country</label>
                                    <select className='w-full border-[1px] rounded-[50px] border-[#00acbb] px-4 py-3'>
                                        <option>United KingDom</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1 lg:w-[23.6%] max-md:w-[100%]">
                                    <label className='text-base-200'>Province</label>
                                    <select className='w-full border-[1px] rounded-[50px] border-[#00acbb] px-4 py-3'>
                                        <option>British Forces</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1 lg:w-[23.6%] max-md:w-[100%]">
                                    <label className='text-base-200'>Zip code</label>
                                    <input type='text' className='w-full border-[1px] rounded-[50px] border-[#00acbb] px-4 py-3' />
                                </div>
                                <div className="flex flex-col gap-1 lg:w-[23.6%] max-md:w-[100%] justify-end">
                                    <button className='w-full text-white rounded-[50px] bg-[#00acbb] font-bold px-4 py-3' style={{height:'fit-content'}}>Estimate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}