'use client'
import React from 'react'
import Image from 'next/image'
import {useState,useEffect} from 'react'
import {useRouter} from 'next/navigation'

const Cart = () => {
    const [active,setActive]=useState(true);
    const router= useRouter()

    const shopping=[
        {
            id:1,
            name:'Ottoman Gas Lift Beautifully',
            price:'£270',
            datas:[
                        {
                            libelle:'estimated Between',
                            value: 'Jul 26 and Aug 05'
                        },
                        {
                            libelle:'size',
                            value: 'small double 4ft + $245'
                        },
                        {
                            libelle:'color',
                            value: 'linen whisper white £25'
                        },
                        {
                            libelle:'HeadBoard Height',
                            value: 'With out HeadBoard'
                        },
                        {
                            libelle:'would you like to add a Mattres?',
                            value: 'No'
                        },
                        {
                            libelle:'Assembly service',
                            value: 'No'
                        },
                        {
                            libelle:'Deliver to room service',
                            value: 'No'
                        },
                        {
                            libelle: 'furniture removal service',
                            value: 'No'
                        }                        
                ],
        },
        {
            id:1,
            name:'Ottoman Gas Lift Beautifully',
            price:'£270',
            datas:[
                        {
                            libelle:'estimated Between',
                            value: 'Jul 26 and Aug 05'
                        },
                        {
                            libelle:'size',
                            value: 'small double 4ft + $245'
                        },
                        {
                            libelle:'color',
                            value: 'linen whisper white £25'
                        },
                        {
                            libelle:'HeadBoard Height',
                            value: 'With out HeadBoard'
                        },
                        {
                            libelle:'would you like to add a Mattres?',
                            value: 'No'
                        },
                        {
                            libelle:'Assembly service',
                            value: 'No'
                        },
                        {
                            libelle:'Deliver to room service',
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
            <div className='text-[0.73rem] text-black text-start capitalize font-normal'>
                <strong>{items.libelle}:&nbsp;</strong>{items.value}
            </div>
        )
    }

    const ProductList=({name,price,data})=>{
        return (
            <div className='flex items-center border-b-[1px] border-[#00acbb] px-3 gap-5 py-6'>
                <Image src='/OttomanEndLiftBaseclosedBg.jpg' className='h-22 w-30 ' width='100' height='100' alt='' />
                <div className='flex flex-col gap-2'>
                    <span className='ellippsis'>{name}</span>
                    <div className='flex flex-col gap-1'>
                        {data?.map((x)=>
                                <List items={x} />
                            )}
                    </div>
                    <span className='font-semibold text-[13px]'>{price}</span>
                    <div className="flex gap-4 border-black border-[1px] justify-between items-center rounded-[50px] py-[0.3rem] px-3 w-[60%] text-[14px]">
                      <i className='fas fa-trash-can text-[11px]'></i>

                      <span>1</span>

                      <svg
                        focusable="false"
                        className="w-2 h-2 cursor-pointer icon icon--plus"
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
                    <i className='cursor-pointer fas fa-trash-can mt-1'></i>
                </div>
            </div>
        );
    };

    const viewCart=()=>{
        router.push('/Cart')
    }

  return (
    <>
        <div className='flex items-center w-full justify-between pl-5 pr-4 py-4 overflow-auto border-b-[1px] border-black/5 shadow-[black]'>
            <div className='text-[0.8rem] font-semibold text-bold text-black uppercase'>Shopping Cart</div>
            <button><i className='fa fa-close text-black text-[1.1rem]'></i></button>
        </div>
        <div className='flex flex-col overflow-y-auto text-black'>
            <div className='flex flex-col w-full overflow-y-auto' style={{height:'25vh'}} >
                {shopping?.map((x)=>
                    <ProductList name={x.name} price={x.price} data={x.datas}/>
                )}
            </div>
            <div className='flex flex-col gap-4 px-4.5 shadow-8 ring-0 -ring-5 shadow-[#00acbb] py-5'>
                <div className='flex items-center w-full gap-2'>
                    <input className='db-field-control w-[60%] rounded-0' style={{borderRadius:0, borderColor:'black'}} type='text' placeholder='CODE5%'></input>
                    <button className='db-btn w-[40%] bg-black text-white !text-[0.75rem] rounded-0 capitalize font-semibold'>COUPON</button>    
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex overflow-hidden w-full rounded-[50px] border-[1px] border-[#00acbb]'>
                        <div onClick={()=>setActive(true)} className={`cursor-pointer text-center hover:bg-[#00acbb] hover:text-white text-[0.8rem] font-medium p-2 text-black w-1/2 ${active && 'bg-[#00acbb] text-white'}`}>Pay deposit</div>
                        <div onClick={()=>setActive(false)} className={`cursor-pointer text-center hover:bg-[#00acbb] hover:text-white text-[0.8rem] font-medium p-2 text-black w-1/2 ${!active && 'bg-[#00acbb] text-white'}`}>Pay full amount</div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        {active ?
                        <>
                        <div className='flex items-center justify-between'>
                            <span className='text-start font-medium text-[0.8rem]'>Total price</span>
                            <span className='text-end font-medium text-[0.8rem]'>£150.00</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span className='text-start font-medium text-[0.8rem]'>Pay on delivery of god</span>
                            <span className='text-end font-medium text-[0.8rem]'>£150.00</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span className='text-start font-semibold text-[0.8rem]'>Pay now</span>
                            <span className='text-end font-semibold text-[0.8rem]'>£250.00</span>
                        </div></>:
                        <div className='flex items-center justify-between'>
                            <span className='text-start font-semibold text-[0.8rem]'>Total price</span>
                            <span className='text-end font-semibold text-[0.8rem]'>£350.00</span>
                        </div>
                        }
                    </div>
                    <div className='flex flex-col items-start gap-1 mt-0'>
                        <p className='text-[0.8rem] text-[#878787] text-start'>Tax included and shipping calculated and checkout</p>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' value='ok'/>
                            <span className='text-[0.8rem] text-[#878787]'>I agree with the terms and conditions</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 pt-2">
                          <button onClick={() => viewCart()} className='db-btn border-[2px] rounded-[50px] border-[#00acbb] !text-[0.8rem] shodow-sm text-[#00acbb] font-bold w-full'>VIEW CART</button>
                        <button className='db-btn rounded-[50px] bg-[#00acbb] shodow-sm !text-[0.8rem] text-white font-bold w-full'>PAY CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Cart;