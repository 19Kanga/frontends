"use client";
import "@fortawesome/fontawesome-free/css/all.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import "../../css/styles.css";
import Image from "next/image";
import logo from "../../assets/Sosoft-logo.png";
import search from "../../assets/search.svg";

import "../../css/styles.css";
import { useRouter } from "next/navigation";
import Cart from '@/components/shared/Cart'
import { useAppDispatch,useAppSelector } from "@/app/Redux/Store/store";
import DropdownUsers from '@/components/shared/DropdownUsers'

const Navbar = ({ menus, categories, attribute }) => {
    const dispatch =useAppDispatch()
    const {user,token,isSucces,isError,message} = useAppSelector(state=> state.userReducer)
    // console.log(attribute)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("");
  const router = useRouter()
  // Material sizes for Beds
  const [BedOpen, setBedOpen] = useState(false);
  const [shopByBedSize, setshopByBedSize] = useState(false);
  const [shopByBedType, setShopByBedType] = useState(false);
  const [shopByBedMaterial, setShopByBedMaterial] = useState(false);
  // const [shopByBedFirmness, setShopByBedFirmness] = useState(false);

  // Material sizes for Matresses
  const [shopBySize, setshopBySize] = useState(false);
  const [matressesOpen, setIsMatressesOpen] = useState(false);
  const [shopByType, setShopByType] = useState(false);
  const [shopByFirmness, setShopByFirmness] = useState(false);
  const [discountBeds, setDiscountBeds] = useState(false);
  const [showLoftBeds, setShowLoftBeds] = useState(false)

  // Material sizes for Accessories
  const [accessoriesOpen, setIsAccessoriesOpen] = useState(false);

  const displayBedShops = () => {
    setshopByBedSize(!shopByBedSize);
    // setIsMatressesOpen(false);
    setBedOpen(!BedOpen);
    setShopByType(!setShopByType);
  };

  // show matresses when backward button is clicked
  const displayMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsMatressesOpen(false);
    setBedOpen(false);
    setIsMatressesOpen(false);
    setIsAccessoriesOpen(false);
  };

  const showMattresesBySize = () => {
    setIsMatressesOpen(!matressesOpen);
    setshopBySize(false);
  };
  const showMattresesByType = () => {
    setIsMatressesOpen(!matressesOpen);
    setShopByType(false);
  };
  const showMattresesByFirmness = () => {
    setIsMatressesOpen(!matressesOpen);
    setShopByFirmness(false);
  };

  // show beds when backward button is clicked
  const showBedsBySize = () => {
    setBedOpen(!BedOpen);
    setshopByBedSize(false);
  };
  const showBedsByType = () => {
    setBedOpen(!BedOpen);
    setShopByBedType(false);
  };
  const showBedsByMaterial = () => {
    setBedOpen(!BedOpen);
    setShopByBedMaterial(false);
  };

  const displayShopsBedSizes = () => {
    setShopByBedType(!shopByBedType);
    setIsMatressesOpen(!matressesOpen);
    setBedOpen(!BedOpen);
  };
  const displayShopsBedTypes = () => {
    setShopByBedType(!shopByBedType);
    setIsMatressesOpen(false);
    setBedOpen(!BedOpen);
  };
  const displayShopsBedMaterials = () => {
    setShopByBedMaterial(!shopByBedMaterial);
    setIsMatressesOpen(false);
    setBedOpen(!BedOpen);
  };
  const displayDiscountBeds = () => {
    setDiscountBeds(!discountBeds);
    setIsMatressesOpen(false);
    setBedOpen(!BedOpen);
  };

  const displayLoftBeds = () => {
    setShowLoftBeds(!showLoftBeds);
  };

  const displayBed = () => {
    setBedOpen(true);
    setIsDropdownOpen(false);
    setIsMatressesOpen(false);
    setIsAccessoriesOpen(false);
  };
  const displayAccessories = () => {
    setBedOpen(false);
    setIsDropdownOpen(false);
    setIsAccessoriesOpen(true);
    setIsMatressesOpen(false);
  };

  const displayMatresses = () => {
    setIsMatressesOpen(!matressesOpen);
    setIsDropdownOpen(false);
    setBedOpen(false);
    setIsAccessoriesOpen(false);
  };
  const displayShops = () => {
    setshopBySize(!shopBySize);
    setIsMatressesOpen(!matressesOpen);
  };
  const displayShopsSizes = () => {
    setShopByType(!shopByType);
    setIsMatressesOpen(!matressesOpen);

  };
  const exitShopByBedTypeDropdown = () => {
    setShopByBedType(!shopByBedType);
  };
  const exitShopByBedMaterialDropdown = () => {
    setShopByBedMaterial(!shopByBedMaterial);
  };
  const exitDiscountBedsDropdown = () => {
    setDiscountBeds(!discountBeds);
    setShopByBedType(false)
    setBedOpen(false)
  };
  const exitDisplayLoftBeds = () => {
    setShowLoftBeds(!showLoftBeds);
    setShopByBedType(false)
    setBedOpen(false)
  };

  const displayShopByFirmness = () => {
    setShopByFirmness(!shopByFirmness);
    setIsMatressesOpen(!matressesOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsMatressesOpen(false);
    setshopBySize(false);
    setShopByType(false);
    setShopByFirmness(false);
  };

  const exitBedSizeDropdown = () => {
    setshopByBedSize(!shopByBedSize);
  };
  const exitDropdown = () => {
    console.log('function called')
    // Perform any necessary actions before closing the dropdown
    // For example, triggering the animation
    const dropdown = document.querySelector(".dropdown-content");
    if (dropdown) {
      dropdown.classList.remove("animate__slideInLeft");
      dropdown.classList.add("animate__slideOutLeft");
    }

    // Delay closing the dropdown to allow the animation to finish
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1000); // Adjust the delay based on your animation duration

    // Hide the backdrop
    const backdrop = document.querySelector(".backdrop");
    if (backdrop) {
      backdrop.style.display = "none";
    }
  };

  const exitMatressesDropdown = () => {
    setIsMatressesOpen(!matressesOpen);
  };

  const exitAccessoriesDropdown = () => {
    setIsAccessoriesOpen(!accessoriesOpen);
  };

  const exitBedDropdown = () => {
    setBedOpen(!BedOpen);
  };
  const exitShopDropdown = () => {
    setshopBySize(!shopBySize);
  };
  const exitShopByFirmness = () => {
    setShopByFirmness(!shopByFirmness);
  };
  const exitShopByTypeDropdown = () => {
    setShopByType(!shopByType);
  };

  useEffect(() => {
    const handleToggleScroll = () => {
      // Toggle the body scroll based on dropdown state
      document.body.style.overflow = isDropdownOpen ? "hidden" : "auto";
    };

    handleToggleScroll();

    return () => {
      document.body.style.overflow = "auto"; // Reset overflow when component unmounts
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen) {
        // Check if the click occurred inside the dropdown or on the hamburger icon
        if (
          !event.target.closest(".dropdown-content") &&
          !event.target.closest(".hamburger-icon") &&
          !event.target.closest(".mattress-dropdown")
        ) {
          setIsDropdownOpen(false);
        }
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);


  return (
    // <div>
      <div className="">
        <header className="relative flex flex-col max-sm:px-0">
          <div className='w-full flex flex-col' >
          <div className='row items-center justify-center text-white font-medium text-[0.85rem] max-sm:text-[0.8rem] px-10 text-center py-4 bg-black'>
            <span>10% Discount on All Orders Over £1500 or more! Code: BLC10 | Offer Ends Soon.</span>
          </div>
          <div className='items-center w-full max-sm:flex-col max-sm:justify-center px-4 py-3 bg-gray row text-[#bb9369] fill-none text-[11px]'>
            <div className='flex w-[33.3%] max-md:w-[100%] max-xl:w-[33.33%] gap-4 max-md:justify-center'>
              <span className='flex items-center gap-2'><i className='fas fa-phone'></i>01924 465 009</span>
              <span  className='flex items-center gap-2'><i className='fas fa-envelope'></i>info@sosofbeds.co.uk</span>
            </div>
            <div className='w-[33.3%] max-md:w-[100%] max-xl:w-[33.33%] flex justify-center '>
              <span  className='gap-2 text-center'>Summer sale discount off 50%! Shop Now</span>
            </div>
            <div className='w-[33.3%] max-md:w-[100%] max-xl:w-[33.33%] flex justify-end max-md:justify-center'>
            <span  className='flex items-center gap-2'><i className='fas fa-location-dot'></i>Location</span>
            </div>
          </div>
          </div>
          <nav className="lg:py-3 flex items-center justify-between gap-[5%] px-4">
            <div className="flex items-center w-[55%] justify-end gap-[10%] max-xl:gap-[5%] max-sm:h-[100%]">
              <Link href={"/"}>
                <Image
                  className="max-xl:hidden lg:h-[75px]"
                  src={logo}
                  width={150}
                  height={50}
                  alt="logo"
                />
                <Image
                  className="max-sm:w-28 lg:hidden"
                  src={logo}
                  width={150}
                  height={100}
                  alt="logo"
                />
              </Link>

              <div className="flex items-center max-sm:self-end w-[100%]  max-md:px-2 relative">
                <div className="flex items-center w-[100%] z-10 ">
                  {/* <button
                    className="hidden max-md:block  w-[10%] text-[1.2rem] max-sm:relative max-sm:left-10  max-[400px]:py-[0.1rem] py-2 max-lg:border-[1px] cursor-pointer"
                    onClick={sideDropdown}
                  >
                    &#9776;
                  </button> */}

                  <div className="flex relative w-[100%] max-md:hidden">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="border-[#0b1a44] border-[0.5px] rounded-[50px] outline-none py-3 px-5  placeholder-bold  w-[100%] max-xl:w-[50%] "
                      style={{ fontWeight: "normal", fontSize: "0.9rem" }}
                    />
                    <Image
                      className="z-20 absolute right-3 max-xl:right-[52%] top-1/2 -translate-y-1/2"
                      src={search}
                      width={15}
                      height={15}
                      alt="search"
                    />
                  </div>
                </div>
              </div>
            </div>
        
            <div className="flex gap-[5%] items-center">
              <div className="flex items-center gap-6 max-sm:gap-5">
                <div className="flex relative flex-col items-center gap-1 cursor-pointer" onClick={() => {
                    router.push('/paymentMethod/NewPaymentCardSetup')
                  }} >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill='none'
                    >
                      <path fill="#ffffff" d="M0 0h24v24H0z" />
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
                        stroke="#000"
                        strokeWidth="1"
                      />
                    </svg>
                    <div className='absolute -right-[30%] -top-[35%] rounded-[50px] text-[.65rem] px-1 py-0 flex items-center justify-center bg-[#bb9369] font-bold text-white'>0</div>
                </div>
                <div onClick={() => {router.push('/Cart')}} 
                  className="flex relative flex-col items-center gap-1 cursor-pointer" >
                  <i className='fas fa-cart-shopping text-[20px]'></i>
                  <div className='absolute -right-[30%] -top-[40%] rounded-[50px] text-[.65rem] px-1 py-0 flex items-center justify-center bg-[#bb9369] font-bold text-white'>0</div>
              </div>
              {/* profile photo */}
              {(token===null || token==='')?
                <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => {
                    router.push('/Login')
                  }}>
                  <i className='fas fa-user text-[20px] fill-none'></i>
                </div>:
                // <Image src={user?.profile} alt='#1'width='100' height='100' className='w-10 h-10 rounded-[50px]' />
                <DropdownUsers user={user} />
                }
              </div>
            </div>
          </nav>
          <nav className=" relative  max-md:hidden  bg-black text-[#EEEEEE] px-3 flex justify-center">
            <ul className="m-0 p-0 h-[100%]  text-[0.75rem] flex items-center gap-3 flex-wrap max-xl:text-[0.8rem]">
              <li className="p-3 cursor-pointer hover:bg-[#08c] hover:text-white font-medium relative">
                <Link href={'/'}>Home</Link>
              </li>

            {menus?.map((x, index) =>
              <div key={index} className="relative flex flex-col items-center dropdown">
                <li className="p-3 cursor-pointer hover:bg-[#08c] capitalize hover:text-white  font-medium relative listitem">
                  <Link href={'#'}>{x.name}</Link>
                </li>
                <div className="bottom-[3%] relative max-xl:bottom-[-3%] text-black max-lg:bottom-[-5%] white bg-white shadow-xl  z-20 dropdowncontent mattress-content hidden overflow-hidden rounded-b-2xl">
                  {x.atr?.map((item, indexe) =>
                    <ul key={indexe} className="px-10 py-7 pb-11 max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                      <li className="my-2 capitalize font-semibold text-[1rem] max-lg:text-[0.9rem]">
                        {item.name}
                      </li>
                      {x.opt?.map((w) => {
                        if (w.id == item.id_products_attributes_option) {
                          return <li key={w.id} className="">
                                    <Link href={`/products/${x.name}/${w.name}`} className="hover:text-[#08c]">
                                     {w.name}
                                    </Link>
                                  </li>
                        }
                      })}
                    </ul>
                  )}
                  
                  {x.image!=='' &&
                  <ul className=" w-[180px] h-auto relative">
                    <Image
                      src={x.image}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </ul>}

                  <div className="absolute bg-[white] w-[100%] bottom-0 h-[35px]  border-t-[1px]">
                    <button onClick={() => { router.push(`/products/${x.name}`); exitBedDropdown() }} className="bg-[#08c] absolute right-[10%] flex gap-5 items-center text-sm text-white px-4 py-[0.6rem] capitalize  h-[100%] hover:bg-[#44bcf7] transition border-color text duration-100 ease-out delay-0">
                      <span> View All {x.name}</span>
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            )}
              <li className="p-3 cursor-pointer hover:bg-[#08c] hover:text-white font-medium relative">
                <Link href={'/'}>Blog</Link>
              </li>
              <li className="p-3 cursor-pointer hover:bg-[#08c] hover:text-white font-medium relative">
                <Link href={'/about-us'}>About Us</Link>
              </li>
              <li className="p-3 cursor-pointer hover:bg-[#08c] hover:text-white font-medium relative">
                <Link href={'/Faq'}>FAQ</Link>
              </li>
              <li className="p-3 cursor-pointer hover:bg-[#08c] hover:text-white font-medium relative">
                <Link href={'/order-swatches'}>Order Swatches</Link>
              </li>
              {/* <li className="relative p-3 font-medium cursor-pointer listitem">
                <span>Order Swatches</span>
              </li> */}
            </ul>
          </nav>

          <div className=" sticky w-[100%] hidden max-md:flex border-[2px] border-[#e3e3e5]">
            <div
              className="w-[10%] cursor-pointer flex items-center justify-center hamburger-icon"
              onClick={toggleDropdown}
            >
              <span className="text-[1.2rem] block  font-bold">&#9776;</span>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="   bg-[#f2f2f2]  border-[1.5px] border-[#e3e3e5] h-[2.8rem] px-2  placeholder-bold  w-[80%] "
              style={{ fontWeight: "bold", fontSize: "0.8rem" }}
            />
            <div className="w-[10%] flex justify-center items-center cursor-pointer">
              <Image
                className="z-20 cursor-pointer"
                src={search}
                width={15}
                height={15}
                alt="searchbox"
              />
            </div>
          </div>

          <div className="z-20 hidden max-md:block">
            {isDropdownOpen && (
              <div
                className={`fixed top-0 h-[100vh] custom-animation bg-white left-0 border-[2px] animate__animated border-[#e3e3e5] dropdown-content w-[100%] ${isDropdownOpen
                  ? "animate__slideInLeft"
                  : "animate__slideOutLeft"
                  }`}
              >
                <div className="text-[0.9rem]  flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                  <span>Menu</span>
                  {""}
                  <div onClick={exitDropdown} className="flex items-center gap-1">
                    <span>Close</span>
                    {""}
                    <span className="text-[1.5rem]">&times;</span>
                  </div>
                </div>
                <div className="h-[100%] w-[100%]">
                  <div
                    onClick={displayMatresses}
                    className="text-[0.9rem]  border-[1px] p-4 flex  gap-8 items-center cursor-pointer font-bold"
                  >
                    <span> Mattresses</span>{" "}
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>

                  <div
                    onClick={displayBed}
                    className="text-[0.9rem] p-4 border-[1px] flex gap-8 cursor-pointer items-center  font-bold"
                  >
                    <span> Beds</span>{" "}
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>
                  <div
                    onClick={displayAccessories}
                    className="text-[0.9rem] flex gap-8 p-4 items-center border-[1px]   cursor-pointer  font-bold"
                  >
                    <span> Accessories</span>{" "}
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>
                  <div onClick={() => { router.push('/sales'); exitDropdown() }} className="text-[0.9rem] p-4 border-[1px] items-center  flex gap-8 cursor-pointer  font-bold">
                    <span> Sale</span>{" "}
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>

                  <div className="py-3 leading-8">
                    <div onClick={()=>{router.push('/about-us');exitDropdown()}} className="text-[0.9rem] px-4 py-2 cursor-pointer  ">
                      About Us
                    </div>
                    {/* <div className="text-[0.9rem] px-4 py-2  cursor-pointer  ">
                      Delivery Information
                    </div> */}
                <div onClick={() => {router.push('/Faq'); exitDropdown()}} className="text-[0.9rem] px-4 py-2  cursor-pointer">
                      FAQs
                    </div>
                    {/* <div className="text-[0.9rem] px-4 py-2  cursor-pointer ">
                      Advise Centre
                    </div>
                    <div className="text-[0.9rem] px-4 py-2  cursor-pointer">
                      Contact Us
                    </div> */}
                  </div>
                </div>
              </div>
            )}

            <div>
              <div className="relative">
                {/* Matresses Open */}
                {matressesOpen && (
                  <div className="mattress-dropdown h-[100vh] fixed bg-white top-0 left-0 w-[100%]">
                    <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                      <div className="flex items-center gap-5">
                        <i
                          className="fa fa-chevron-left"
                          aria-hidden="true"
                          onClick={displayMenu}
                        ></i>{" "}
                        <span>Mattresses</span>{" "}
                      </div>
                      <div
                        onClick={exitMatressesDropdown}
                        className="flex items-center gap-1"
                      >
                        <span>Close</span>{" "}
                        <span className="text-[1.5rem]">&times;</span>
                      </div>
                    </div>
                    <div
                      onClick={displayShops}
                      className="text-[0.9rem] flex p-4 gap-8 items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold"
                    >
                      <span> Shop by Size</span>{" "}
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>

                    <div
                      onClick={displayShopsSizes}
                      className="text-[0.9rem] p-4 flex gap-8 items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold"
                    >
                      <span> Shop by Type</span>{" "}
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    <div
                      onClick={displayShopByFirmness}
                      className="text-[0.9rem]  gap-8 items-center p-4 flex cursor-pointer hover:bg-[#08c] hover:text-white font-semibold"
                    >
                      <span> Shop by Firmness</span>{" "}
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    <div onClick={() => { router.push('/products/Mattress'); exitDropdown() }} className="text-[0.9rem] p-4 flex gap-8 items-center cursor-pointer text-[#08c] font-semibold">
                      <span> All Matresses</span>{" "}
                    </div>
                  </div>
                )}

                {shopBySize && (
                  <div className="bg-white  fixed top-0 w-[100%] h-[100vh] left-0">
                    <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                      <div className="flex items-center gap-5">
                        <i
                          className="fa fa-chevron-left"
                          aria-hidden="true"
                          onClick={showMattresesBySize}
                        ></i>{" "}
                        <span>Shop By Size</span>{" "}
                      </div>
                      <div
                        onClick={exitShopDropdown}
                        className="flex items-center gap-1"
                      >
                        <span>Close</span>{" "}
                        <span className="text-[1.5rem]">&times;</span>
                      </div>
                    </div>
                    <div className="leading-8">
                      <div onClick={() => exitShopDropdown()} className="text-[0.9rem] border px-4 py-2  items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span>Super King(6&apos;)</span>{" "}
                      </div>

                      <div onClick={() => exitShopDropdown()} className="text-[0.9rem] px-4 border py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span> King Size(5&apos;)</span>{" "}
                      </div>
                      <div onClick={() => exitShopDropdown()} className="text-[0.9rem] px-4 py-2 border fles cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span> Double(4&apos; 6&apos;&apos;)</span>{" "}
                      </div>
                      <div onClick={() => exitShopDropdown()} className="text-[0.9rem] px-4 py-2 border  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span> Small Double(4&apos;)</span>{" "}
                      </div>
                      <div onClick={() => exitShopDropdown()} className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span> Single(3&apos;)</span>{" "}
                      </div>
                      <div onClick={() => exitShopDropdown()} className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span>Small Single(2&apos; 6&apos;&apos;)</span>{" "}
                      </div>
                      <div onClick={() => exitShopDropdown()} className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span>European</span>{" "}
                      </div>
                      <div onClick={() => exitShopDropdown()} className="text-[0.9rem] px-4 py-2 border bg-[#eee] cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <Link href="/products/Mattress" className="text-[#08c] font-semibold">
                          View All Matresses
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {shopByType && (
                  <div className="bg-white  fixed top-0 w-[100%]  h-[100vh] left-0">
                    <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                      <div className="flex items-center gap-5">
                        <i
                          className="fa fa-chevron-left"
                          aria-hidden="true"
                          onClick={showMattresesByType}
                        ></i>{" "}
                        <span>Shop By Type</span>{" "}
                      </div>
                      <div
                        onClick={exitShopByTypeDropdown}
                        className="flex items-center gap-1"
                      >
                        <span>Close</span>{" "}
                        <span className="text-[1.5rem]">&times;</span>
                      </div>
                    </div>

                    <div className="leading-8" onClick={exitShopByTypeDropdown}>
                      <div className="text-[0.9rem] border  px-4 py-2  items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span>Memory Foam</span>{" "}
                      </div>

                      <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span>Pocket Sprung</span>{" "}
                      </div>
                      <div className="text-[0.9rem] px-4 py-2 border fles cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span>Orthopaedic</span>{" "}
                      </div>
                      <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span>Latex</span>{" "}
                      </div>
                      {/* <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Miracoil</span>{" "}
                    </div>
                    <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Cot Bed Mattresses</span>{" "}
                    </div> */}
                      <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span>Natural Fillings</span>{" "}
                      </div>

                      <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span>Kids Mattresses</span>{" "}
                      </div>
                      <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span>Next Day Mattresses</span>{" "}
                      </div>
                      <div className="text-[0.9rem] px-4 py-2 border bg-[#eee] cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <Link href="/products/Mattress" className="text-[#08c] font-semibold">
                          View All Matresses
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {shopByFirmness && (
                  <div className="bg-white  fixed top-0 w-[100%] h-[100vh] left-0">
                    <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                      <div className="flex items-center gap-5">
                        <i
                          className="fa fa-chevron-left"
                          aria-hidden="true"
                          onClick={showMattresesByFirmness}
                        ></i>{" "}
                        <span>Shop By Firmness</span>{" "}
                      </div>
                      <div
                        onClick={exitShopByFirmness}
                        className="flex items-center gap-1"
                      >
                        <span>Close</span>{" "}
                        <span className="text-[1.5rem]">&times;</span>
                      </div>
                    </div>
                    <div className="leading-8" onClick={exitShopByFirmness}>
                      <div className="text-[0.9rem]  px-4 py-2 border items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span>Extra Firm</span>{" "}
                      </div>

                      <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span>Firm</span>{" "}
                      </div>
                      <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span>Medium-Firm</span>{" "}
                      </div>
                      <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span>Medium</span>{" "}
                      </div>
                      <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <span>Soft-Medium</span>{" "}
                      </div>

                      <div className="text-[0.9rem] px-4 py-2 border bg-[#eee] cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                        <Link href="/products/Mattress" className="text-[#08c] font-semibold">
                          View All Matresses
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bed Open */}

            {BedOpen && (
              <div className="mattress-dropdown h-[100vh] fixed bg-white top-0 left-0 w-[100%]">
                <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                  <div className="flex items-center gap-5">
                    {" "}
                    <i
                      className="fa fa-chevron-left"
                      aria-hidden="true"
                      onClick={displayMenu}
                    ></i>{" "}
                    <span>Bed</span>{" "}
                  </div>
                  <div
                    onClick={exitBedDropdown}
                    className="flex items-center gap-1"
                  >
                    <span>Close</span>{" "}
                    <span className="text-[1.5rem]">&times;</span>
                  </div>
                </div>
                <div
                  onClick={displayBedShops}
                  className="text-[0.9rem] flex p-4 border gap-8 items-center cursor-pointer  font-semibold"
                >
                  <span> Shop by Size</span>{" "}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>

                <div
                  onClick={displayShopsBedTypes}
                  className="text-[0.9rem] p-4 border flex gap-8 items-center cursor-pointer  font-semibold"
                >
                  <span> Shop by Type</span>{" "}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
                <div
                  onClick={displayShopsBedMaterials}
                  className="text-[0.9rem] p-4 flex border gap-8 items-center cursor-pointer  font-semibold"
                >
                  <span> Shop by Material</span>{" "}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
                <div onClick={() => { router.push('/products/Beds'); exitBedDropdown() }} className="text-[0.9rem] bg-[#eee] text-[#08c] border p-4 flex gap-8 items-center cursor-pointer  font-semibold">
                  <span> All Beds</span>{" "}
                </div>
              </div>
            )}

            {shopByBedSize && (
              <div className="bg-white  fixed top-0 w-[100%]  h-[100vh] left-0">
                <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                  <div className="flex items-center gap-5">
                    <i
                      className="fa fa-chevron-left"
                      aria-hidden="true"
                      onClick={showBedsBySize}
                    ></i>{" "}
                    <span>Shop By Size</span>{" "}
                  </div>
                  <div
                    onClick={exitBedSizeDropdown}
                    className="flex items-center gap-1"
                  >
                    <span>Close</span>{" "}
                    <span className="text-[1.5rem]">&times;</span>
                  </div>
                </div>
                <div className="leading-8" onClick={exitBedSizeDropdown}>
                  <div className="text-[0.9rem]  px-4 py-2  items-center cursor-pointer  hover:text-white font-semibold">
                    <span>SuperKing Beds(6&apos;)</span>{" "}
                  </div>

                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <span> King Size Beds(5&apos;)</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                    <span> Double Beds(4&apos; 6&apos;&apos;)</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <span> Small Double Beds(4&apos;)</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <span> Single Beds(3&apos;)</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <span>Small Single Beds(2&apos; 6&apos;&apos;)</span>{" "}
                  </div>

                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <Link href="/products/Beds" className="text-[#08c] font-semibold">
                      View All Beds
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {shopByBedType && (
              <div className="bg-white  fixed top-0 w-[100%] h-[100vh] left-0">
                <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                  <div className="flex items-center gap-5">
                    <i
                      className="fa fa-chevron-left"
                      aria-hidden="true"
                      onClick={showBedsByType}
                    ></i>{" "}
                    <span>Shop By Type</span>{" "}
                  </div>
                  <div
                    onClick={exitShopByBedTypeDropdown}
                    className="flex items-center gap-1"
                  >
                    <span>Close</span>{" "}
                    <span className="text-[1.5rem]">&times;</span>
                  </div>
                </div>
                <div className="leading-8" >
                  <div onClick={exitShopByBedTypeDropdown} className="text-[0.9rem]  px-4 py-2  items-center cursor-pointer  hover:text-white font-semibold">
                    <span>Bed frames</span>{" "}
                  </div>

                  <div onClick={exitShopByBedTypeDropdown} className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <span> Divan beds</span>{" "}
                  </div>
                  <div onClick={exitShopByBedTypeDropdown} className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <span>Guests Beds</span>{" "}
                  </div>
                  <div onClick={exitShopByBedTypeDropdown} className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <span>Next Day Beds</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <div className="flex items-center gap-5" onClick={displayDiscountBeds}>
                      <span>Discount Beds</span>{" "}
                      <i
                        className="fa fa-chevron-right"
                        aria-hidden="true"

                      ></i>{" "}
                    </div>
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <div className="flex items-center gap-5" onClick={displayLoftBeds}>
                      <span>Loft Beds</span>{" "}
                      <i
                        className="fa fa-chevron-right"
                        aria-hidden="true"

                      ></i>{" "}
                    </div>
                  </div>

                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold" onClick={exitShopByBedTypeDropdown}>
                    <Link href="/products/Beds" className="text-[#08c] font-semibold">
                      View All Beds
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {shopByBedMaterial && (
              <div className="bg-white  fixed top-0 w-[100%] h-[100vh] left-0">
                <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                  <div className="flex items-center gap-5">
                    <i
                      className="fa fa-chevron-left"
                      aria-hidden="true"
                      onClick={showBedsByMaterial}
                    ></i>{" "}
                    <span>Shop By Material</span>{" "}
                  </div>
                  <div
                    onClick={exitShopByBedMaterialDropdown}
                    className="flex items-center gap-1"
                  >
                    <span>Close</span>{" "}
                    <span className="text-[1.5rem]">&times;</span>
                  </div>
                </div>
                <div className="leading-8" onClick={exitShopByBedMaterialDropdown}>
                  <div className="text-[0.9rem]  px-4 py-2  items-center cursor-pointer  hover:text-white font-semibold">
                    <span>Wooden Bed frames</span>{" "}
                  </div>

                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <span>Fabric Bed Frames</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                    <span> Metal Frame Beds</span>{" "}
                  </div>

                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <Link href="/products/Beds" className="text-[#08c] font-semibold">
                      View All Beds
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {discountBeds && (
              <div className="bg-white  fixed top-0 w-[100%] h-[100vh] left-0">
                <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                  <div className="flex items-center gap-5">
                    <i
                      className="fa fa-chevron-left"
                      aria-hidden="true"
                      onClick={displayDiscountBeds}
                    ></i>{" "}
                    <span>Discount Beds</span>{" "}
                  </div>
                  <div
                    onClick={exitDiscountBedsDropdown}
                    className="flex items-center gap-1"
                  >
                    <span>Close</span>{" "}
                    <span className="text-[1.5rem]">&times;</span>
                  </div>
                </div>
                <div className="leading-8" onClick={exitDiscountBedsDropdown}>
                  <div className="text-[0.9rem]  px-4 py-2  items-center cursor-pointer  hover:text-white font-semibold">
                    <span>Small Single (2&apos; 6&apos;&apos;)
                    </span>{" "}
                  </div>

                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <span>Single (3&apos;)
                    </span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                    <span> Small Double (4&apos;)
                    </span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                    <span> Double (4&apos; 6&apos;&apos;)
                    </span>{" "}
                  </div>

                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <Link href="/products/Beds" className="text-[#08c] font-semibold">
                      View All Beds
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {showLoftBeds && (
              <div className="bg-white  fixed top-0 w-[100%] h-[100vh] left-0">
                <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                  <div className="flex items-center gap-5">
                    <i
                      className="fa fa-chevron-left"
                      aria-hidden="true"
                      onClick={() => { setShowLoftBeds(p => !p); setBedOpen(false); setShopByBedType(true) }}
                    ></i>{" "}
                    <span>Loft Beds</span>{" "}
                  </div>
                  <div
                    onClick={exitDisplayLoftBeds}
                    className="flex items-center gap-1"
                  >
                    <span>Close</span>{" "}
                    <span className="text-[1.5rem]">&times;</span>
                  </div>
                </div>
                <div className="leading-8" onClick={exitDisplayLoftBeds}>
                  <div className="text-[0.9rem]  px-4 py-2  items-center cursor-pointer  hover:text-white font-semibold">
                    <span>Double (4&apos; 6&apos;&apos;) - 4 Pieces
                    </span>{" "}
                  </div>

                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <span>King Size (5&apos; 4&apos;&apos;) - 4 Pieces
                    </span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                    <span>Superking (6&apos;) - 4 Pieces
                    </span>{" "}
                  </div>

                  <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                    <span>Single Bed (3&apos; 2&apos;&apos;) - 2 Pieces
                    </span>{" "}
                  </div>

                  <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                    <span>Single Bed (2&apos; 6&apos;&apos;) - 2 Pieces
                    </span>{" "}
                  </div>

                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                    <Link href="/products/Beds" className="text-[#08c] font-semibold">
                      View All Beds
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {matressesOpen && (
              <div className="mattress-dropdown h-[100vh] fixed bg-white top-0 left-0 w-[100%]">
                <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                  <div className="flex items-center gap-5">
                    <i
                      className="fa fa-chevron-left"
                      aria-hidden="true"
                      onClick={displayMenu}
                    ></i>{" "}
                    <span>Mattresses</span>{" "}
                  </div>
                  <div
                    onClick={exitMatressesDropdown}
                    className="flex items-center gap-1"
                  >
                    <span>Close</span>{" "}
                    <span className="text-[1.5rem]">&times;</span>
                  </div>
                </div>
                <div
                  onClick={displayShops}
                  className="text-[0.9rem] flex p-4 border gap-8 items-center cursor-pointer  font-semibold"
                >
                  <span> Shop by Size</span>{" "}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>

                <div
                  onClick={displayShopsSizes}
                  className="text-[0.9rem] p-4 flex border gap-8 items-center cursor-pointer  font-semibold"
                >
                  <span> Shop by Type</span>{" "}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
                <div
                  onClick={displayShopByFirmness}
                  className="text-[0.9rem]  gap-8 border items-center p-4 flex cursor-pointer  font-semibold"
                >
                  <span> Shop by Firmness</span>{" "}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
                <div onClick={() => { router.push('/mattresses'); exitMatressesDropdown() }} className="text-[0.9rem] p-4 bg-[#eee] flex gap-8 items-center cursor-pointer text-[#08c] font-semibold">
                  <span> All Matresses</span>{" "}
                </div>
              </div>
            )}

            {accessoriesOpen && (
              <div className="mattress-dropdown h-[100vh] fixed bg-white top-0 left-0 w-[100%]">
                <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                  <div className="flex items-center gap-5">
                    <i
                      className="fa fa-chevron-left"
                      aria-hidden="true"
                      onClick={displayMenu}
                    ></i>{" "}
                    <span>Accessories</span>{" "}
                  </div>
                  <div
                    onClick={exitAccessoriesDropdown}
                    className="flex items-center gap-1"
                  >
                    <span>Close</span>{" "}
                    <span className="text-[1.5rem]">&times;</span>
                  </div>
                </div>
                <div onClick={exitAccessoriesDropdown} className="text-[0.9rem] border flex p-4 gap-8 items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                  <span>Pillows</span>{" "}
                </div>

                <div onClick={exitAccessoriesDropdown} className="text-[0.9rem] border p-4 flex gap-8 items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                  <span> Duvets</span>{" "}
                </div>
                <div onClick={exitAccessoriesDropdown} className="text-[0.9rem] border gap-8 items-center p-4 flex cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                  <span>Mattress Protectors</span>{" "}
                </div>
                <div onClick={exitAccessoriesDropdown} className="text-[0.9rem] border gap-8 items-center p-4 flex cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                  <span>Mattress Toppers</span>{" "}
                </div>
                <div onClick={exitAccessoriesDropdown} className="text-[0.9rem] border gap-8 items-center p-4 flex cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                  <span>Headboards</span>{" "}
                </div>
                <div onClick={() => { router.push('/accessories'); exitAccessoriesDropdown() }} className="text-[0.9rem] p-4 border bg-[#eee] flex gap-8 items-center cursor-pointer text-[#08c] font-semibold">
                  <span> All Accessories</span>{" "}
                </div>
              </div>
            )}
          </div>

          {/* <nav className="h-[10vh] py-3 relative max-md:hidden">
            <ul className="p-0 m-0 w-[75%] absolute left-1/2  top-0 h-[100%] flex justify-between -translate-x-1/2  px-2 items-center max-xl:text-[0.8rem] max-2xl:w-[100%] max-md:hidden">
              <li className="flex items-center gap-2 cursor-pointer">
                <Image src={pricematch} width={23} height={23} alt="price" />
                <span>Price Match Guarantee</span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <Image src={delivery} width={23} height={23} alt="delivery" />
                <span>Free Delivery Over</span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <Image src={fabric} width={23} height={23} alt="fabric" />
                <span>Free Fabric Samples</span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <Image src={trustpilot} width={23} height={23} alt="trustpilot" />
                <span>Five Star Trust Pilot Reviews</span>
              </li>
            </ul>
          </nav> */}
        </header>
      </div>
    // </div>
  );
};

export default Navbar;
