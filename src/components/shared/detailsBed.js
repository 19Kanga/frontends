"use client";
import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import Drawer from "@/components/ButtomDrawer";
import "animate.css/animate.min.css";
import Image from "next/image";
import SlipLids from "@/components/cards/SlipLids";
import ColorPalette from "@/components/cards/ColorPalette";
import Cart from '@/components/shared/Cart'
// import "@/css/styles.css";
import ProductbaseDropdown from "@/components/ProductbaseDropdown";
import BedSizeTable from "@/components/BedSizeTable";
import Faq from "@/components/Faq";
import BaseProducts from "@/components/BaseProducts";

export function Head ({title}) {
    return (
      <div className="border-black border-[1px] w-[100%] text-black mt-1 mx-auto p-3 cursor-pointer rounded-2xl text-center text-[13px] font-bold">
        {title}
      </div>
    )
  }

const DetailsBed = ({details}) => {
  const buttonStyles = [{ padding: "0.25rem" }, { padding: "0.25rem" }];

  const [selectedImagePath, setSelectedImagePath] = useState("/single.png");
  const [selectedImagePathType, setSelectedImagePathType] = useState(
    "/Divan-Base-Only-b.png"
  );
  const [selectedImagePathDepth, setSelectedImagePathDepth] =
    useState("/Deep-Base.png");
  const [amount, setAmount] = useState("£200.00"); // Initial amount value

  const [showBedDephthOptions, setShowBedDephthOptions] = useState(false);

  const displayDepthOptions = () => {
    setShowBedDephthOptions(true);
  };
  const removeDepthOptions = () => {
    setShowBedDephthOptions(false);
  };
  // Handler function to update selected image path
  const handleImageClick = (path) => {
    setSelectedImagePath(path);
  };
  const handleImageClickType = (path) => {
    setSelectedImagePathType(path);
  };
  const handleImageClickDepth = (path) => {
    setSelectedImagePathDepth(path);
  };

  const updateBedSizeAmount = () => {
    const bedSizeAmount = getTextForImageBedSize().amount;

    setAmount(bedSizeAmount);
  };
  const updateBedTypeAmount = () => {
    const bedTypeAmount = getTextForImageBedType().amount;

    setAmount(bedTypeAmount);
  };
  const updateBedDepthAmount = () => {
    const bedDepthAmount = getTextForImageBedDepth().amount;

    setAmount(bedDepthAmount);
  };

  // slip lids

  /// Function to get text and amount based on selected image
  const getTextForImageBedSize = () => {
    switch (selectedImagePath) {
      case "/single.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Small Single 2ft6
            </p>
          ),
          amount: "£490.00",
        };
      case "/single2.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Single 3ft
            </p>
          ),
          amount: "£490.00",
        };
      case "/Double-small.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Small Double 4ft
            </p>
          ),
          amount: "£310.00",
        };
      case "/Double-small2.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Double 4ft6
            </p>
          ),
          amount: "£310.00",
        };
      case "/Double-small3.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - King 5ft
            </p>
          ),
          amount: "£365.00",
        };
      case "/Double-small4.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Superking 6ft
            </p>
          ),
          amount: "£415.00",
        };
      default:
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Small Single 2ft6
            </p>
          ),
          amount: "£490",
        };
    }
  };

  const getTextForImageBedType = () => {
    switch (selectedImagePathType) {
      case "/Divan-Base-Only-b.png.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Base Only +£0
            </p>
          ),
          amount: "£225.00",
        };
      case "/2-Continentel-Drawer-same-side-b.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Same Side
              +£40
            </p>
          ),
          amount: "£265.00",
        };
      case "/2-Draw-Same-Side-b.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Continental
              +£40
            </p>
          ),
          amount: "£265.00",
        };
      case "/Side-Opening-Ottoman-b.jpg":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - End Lift Ottoman Bed
              +£60
            </p>
          ),
          amount: "£490.00",
        };
      case "/End-Foot-Opening.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Side Lift Ottoman
              Bed +£60
            </p>
          ),
          amount: "£490.00",
        };
      default:
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Side Lift Ottoman
              Bed +£60
            </p>
          ),
          amount: "£225",
        };
    }
  };

  const getTextForImageBedDepth = () => {
    switch (selectedImagePathDepth) {
      case "/Deep-Base.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Base Only +£0
            </p>
          ),
          amount: "£285.00",
        };
      case "/Standard-Base.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Same Side
              +£40
            </p>
          ),
          amount: "£465.00",
        };
      case "/Super-Deep-Base.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Continental
              +£40
            </p>
          ),
          amount: "£735.00",
        };
      default:
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Side Lift Ottoman
              Bed +£60
            </p>
          ),
          amount: "£285",
        };
    }
  };

  useEffect(() => {
    updateBedSizeAmount();
  }, [selectedImagePath]);

  useEffect(() => {
    updateBedTypeAmount();
  }, [selectedImagePathType]);

  useEffect(() => {
    updateBedDepthAmount();
  }, [selectedImagePathDepth]);

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

  const [BtnAmount, setBtnAmount] = useState(1); // Initial amount
  const [counter, setCounter] = useState(1); // Initial counter

  const handleIncrease = () => {
    setCounter(counter + 1); // Increment counter
    setAmount(BtnAmount + BtnAmount); // Double the amount
  };

  const handleDecrease = () => {
    if (counter > 1) {
      setCounter(counter - 1); // Decrement counter
      setBtnAmount(amount - amount / 2); // Halve the amount
    }
  };

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

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

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

  const bedSize = [
    {
      title:'Small Single 2ft6',
      image: '/Double-small.png',
      pathimage:'/single.png'
      
    },
    {
      title: 'Single 3ft',
      image: '/Double-small.png',
      pathimage: '/single2.png'
    },
    {
      title: 'Small Double 4ft',
      image: '/Double-small.png',
      pathimage: '/Double-small.png'
    },
    {
      title: 'King 5ft',
      image: '/Double-small.png',
      pathimage: '/Double-small3.png'
    },
    {
      title: 'Double 4ft6',
      image: '/Double-small.png',
      pathimage: '/Double-small2.png'
    },
    {
      title: 'Super King 6ft',
      image: '/Double-small.png',
      pathimage: '/Double-small4.png'
    }
  ]
  const bedType= [
    {
      title:'Base Only +£0',
      image: '/Divan-Base-Only-b.png'
      
    },
    {
      title:'2 Drawer same side +£40',
      image: '/2-Continentel-Drawer-same-side-b.png'
      
    },
    {
      title: '2 Drawer Continental +£40',
      image: '/2-Draw-Same-Side-b.png'
    },
    {
      title: 'End lift Ottoman Bed +£60',
      image: '/Side-Opening-Ottoman-b.jpg',
    },
    {
      title: 'Side Lift Ottoman Bed +£60',
      image: '/End-Foot-Opening.png',
    }
  ]

  const Detail = ({item}) => {
    return (
      <div
        className={`w-[100%] px-10 rounded-lg relative cursor-pointer 
          ${selectedImagePathType === item.image &&
          " border-[1px] border-black"
          }`}
        onClick={() =>{
          handleImageClickType(item.image);
          removeDepthOptions();
        }}
      >
        <div className="w-full h-[5.25rem] rounded-md">
        <Image
          // add single image later
          src={item.image}
          alt="openbed"
          
          className='object-cover'
          layout="fill"
        />
        </div>
        {selectedImagePathType === item.image && (
          <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-1  rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
        <div className="absolute top-full mb-10 w-full left-0 text-[12px] font-semibold text-center">
          {item.title}
        </div>
      </div>
    )
  } 

  const det=details.replace(/[02%]/g, ' ')
  return (
    <div>
      <div className="mt-10 w-[100%] px-0 max-sm:px-1 max-sm:mt-5">
        <div className="flex w-full gap-6 max-md:flex-col max-lg:flex-wrap justify-evenly max-lg:justify-center">
          {/* <ProductSidebar /> */}

          <div className="flex justify-center w-full">
            <div className="flex flex-col w-full max-xl:w-full max-lg:w-[70%] max-md:w-[90%] max-sm:w-full">
              <div className="max-sm:w-full w-[100%] min-h-[27em] relative max-md:min-h-[25em] max-sm:min-h-[20em]">
                <Image
                  src="/OttomanEndLiftBaseclosedBg.jpg"
                  alt="openbed"
                  layout="fill"
                  objectFit="cover"
                />
                {selectedImagePath === "/OttomanEndLiftBaseclosedBg.jpg" && (
                  <div className="absolute top-0 right-0 p-1 mt-2 mr-2 bg-white rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#00acbb]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <div className="flex gap-1 w-[100%] h-[6.25rem] max-sm:h-[4rem] max-sm:w-full relative top-2">
                <div className="w-1/4  max-sm:w-1/4  max-sm:h-[full] relative">
                  <Image
                    src="/Ottoman_Bed_side_opening-small.jpg"
                    alt="openbed"
                    layout="fill"
                    objectFit="cover"
                  />
                  {selectedImagePath ===
                    "/Ottoman_Bed_side_opening-small.jpg" && (
                    <div className="absolute top-0 right-0 p-1 mt-2 mr-2 bg-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#00acbb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="w-1/4  max-sm:w-1/4 max-sm:h-[full] relative">
                  <Image
                    src="/Ottoman-Side.jpeg"
                    alt="openbed"
                    layout="fill"
                    objectFit="cover"
                  />
                  {selectedImagePath === "/Ottoman-Side.jpeg" && (
                    <div className="absolute top-0 right-0 p-1 mt-2 mr-2 bg-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#00acbb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="w-1/4  max-sm:w-1/4 max-sm:h-[full] relative">
                  <Image
                    src="/Ottoman_Bed_side_opening.jpg"
                    alt="openbed"
                    layout="fill"
                    objectFit="cover"
                  />
                  {selectedImagePath === "/Ottoman_Bed_side_opening.jpg" && (
                    <div className="absolute top-0 right-0 p-1 mt-2 mr-2 bg-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#00acbb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="w-1/4  max-sm:w-1/4 max-sm:h-[full] relative">
                  <Image
                    src="/Ottoman_Bed_side_opening-small.jpg"
                    alt="openbed"
                    objectFit="cover"
                    layout="fill"
                    className="-scale-x-100"
                  />
                  {selectedImagePath ===
                    "/Ottoman_Bed_side_opening-small.jpg" && (
                    <div className="absolute top-0 right-0 p-1 mt-2 mr-2 bg-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#00acbb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bed Size section */}
          <div className="w-full max-lg:mt-8 max-lg:text-center">
            <div>
              <p className="text-[1rem] font-bold">{det}</p>
              <span className="text-[#00acbb] font-semibold text-[1rem]">
                {amount}
              </span>
            </div>

            <div className="pt-5 pb-13 ">
              <div className="bg-[#f1feff] flex flex-col justify-center rounded-xl pt-7 pb-13 px-4">
                <div className="border-black border-[1px] w-[100%] mt-1 mx-auto p-3 cursor-pointer rounded-2xl text-center text-[13px] font-bold">
                  {getTextForImageBedSize().text}
                </div>
                <div className="grid grid-cols-6 gap-4 pt-4 pb-10 my-0 text-sm gap-y-20 rounded-2xl justify-items-center max-xl:grid-cols-3 max-md:mt-15 max-sm:grid-cols-2 max-sm:items-center max-lg:justify-center max-sm:justify-between">
                  {bedSize?.map((item,i) =>
                    <div
                      key={i}
                      className={`h-[5rem] w-[5rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePath === item.pathimage &&
                      " border-[1px] border-black px-10"
                    }`}
                    onClick={() => handleImageClick(item.pathimage)}
                  >
                    <Image
                      // add single image later
                      src={item.image}
                      alt="openbed"
                      layout="fill"
                      objectFit="contain"
                    />
                    {selectedImagePath === item.pathimage && (
                      <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-1  rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="absolute top-full mb-10 w-full left-0 text-[12px] font-semibold text-center">
                      {item.title}
                    </div>
                  </div>
                  )}
                </div>
              </div>

              {/* Bed types section*/}
              <div className="bg-[#f1feff] pt-7 pb-13 px-4 mt-8 flex flex-col rounded-xl ">
                <Head title={getTextForImageBedType().text}/>
                <div className="grid w-full grid-cols-6 gap-y-15 gap-4 pt-7 pb-10 text-sm max-xl:grid-cols-3 max-md:mt-5 max-lg:grid-cols-3 ">
                  {bedType?.map((x,i)=>
                    <Detail key={i} item={x} />
                  )}
                </div>
              </div>

              {/* <div><ProductsPage/></div> */}
              {/* Bed Depth section : */}

              {showBedDephthOptions && (
                <div className="bg-[#f1feff] min-h-[60vh] mt-10 max-sm:min-h-[70vh]  flex flex-col rounded-xl animate__animated  animate__fadeInDown">
                  <Head title={getTextForImageBedDepth().text} />
                  <div className="grid items-center grid-cols-4 my-5 text-sm justify-items-center max-sm:my-20 rounded-2xl max-sm:grid-cols-2 max-sm:gap-x-20 max-sm:gap-y-36">
                    <div
                      className={`h-[6.25rem]  w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                        selectedImagePathDepth === "/Deep-Base.png" &&
                        " border-[2px] border-black"
                      }`}
                      onClick={() => handleImageClickDepth("/Deep-Base.png")}
                    >
                      <Image
                        src="/Deep-Base.png"
                        alt="deepbase"
                        layout="fill"
                        objectFit="contain"
                      />
                      {selectedImagePathDepth === "/Deep-Base.png" && (
                        <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      )}

                      <div className="absolute left-0 w-full mt-2 mb-10 text-center top-full">
                        Standard Depth 23cm ( Base Height 37cm ) +£0
                      </div>
                    </div>

                    <div
                      className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                        selectedImagePathDepth === "/Standard-Base.png" &&
                        "border-[2px] border-black"
                      }`}
                      onClick={() =>
                        handleImageClickDepth("/Standard-Base.png")
                      }
                    >
                      <Image
                        src="/Standard-Base.png"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                      {selectedImagePathDepth === "/Standard-Base.png" && (
                        <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      )}
                      <div className="absolute left-0 w-full mt-2 mb-10 text-center top-full">
                        Deep Base Depth 30.5cm (Base Height 44cm) +£180
                      </div>
                    </div>

                    <div
                      className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                        selectedImagePathDepth === "/Super-Deep-Base.png" &&
                        "border-[2px] border-black"
                      }`}
                      onClick={() =>
                        handleImageClickDepth("/Super-Deep-Base.png")
                      }
                    >
                      <Image
                        src="/Super-Deep-Base.png"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                      {selectedImagePathDepth === "/Super-Deep-Base.png" && (
                        <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      )}

                      <div className="absolute left-0 w-full mt-2 mb-10 text-center top-full">
                        Super Deep Depth 37cm (Base Height 50cm) +£450
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showBedDephthOptions && (
                <div className="flex flex-col gap-4 mt-4">
                  <SlipLids
                    defaultText="Anti-Slip Lids -"
                    buttonTexts={[
                      "Anti-Slip Lids - Standard Top (Bed Side Supported By Wall) +£0",
                      "Foam Padded Bed Base +£125",
                    ]}
                  />

                  <SlipLids
                    defaultText="Base Padding -"
                    buttonTexts={[
                      "No Base Padding +£0",
                      "Foam Padded Bed Base +£125",
                    ]}
                    // buttonStyles={buttonStyles}
                  />

                  <SlipLids
                    defaultText="Re-enforcement - "
                    buttonTexts={[
                      "Standard Market Build +£0",
                      "Re-Inforced Storage Area & Lids +£80",
                    ]}
                    // buttonStyles={buttonStyles}
                  />

                  <SlipLids
                    defaultText="Gas Pistons - 600N Gas Pistons (Upto 55kg Mattress) (Included)"
                    buttonTexts={[
                      "600N Gas Pistons (Upto 55kg Mattress) (Included)",
                      "800N Gas Pistons (55-75kg Mattress) +£25",
                      // Add more button texts as needed
                    ]}
                    // buttonStyles={buttonStyles}
                  />
                </div>
              )}

              <div className='bg-[#f1feff] pt-4 pb-7 px-4 mt-6 flex flex-col rounded-xl'>
                <ColorPalette />
              </div>

              <div className="flex flex-col gap-4 mt-4 ">
                <SlipLids
                  defaultText="Gas Pistons - 600N Gas Pistons (Upto 55kg Mattress)"
                  buttonTexts={[
                    "600N Gas Pistons (Upto 55kg Mattress)",
                    "800N Gas Pistons (55-75kg Mattress) +£25",
                    // Add more button texts as needed
                  ]}
                  // buttonStyles={buttonStyles}
                />

                <SlipLids
                  defaultText="Would You like to add a Mattress? - No"
                  buttonTexts={[
                    "No",
                    "Yes",
                    // Add more button texts as needed
                  ]}
                  // buttonStyles={buttonStyles}
                />
                <SlipLids
                  defaultText="Assembly Service - No"
                  buttonTexts={[
                    "No",
                    "Yes",
                    // Add more button texts as needed
                  ]}
                />
                <SlipLids
                  defaultText="Deliver To Room Service - No"
                  buttonTexts={[
                    "No",
                    "Yes",
                    // Add more button texts as needed
                  ]}
                />
                <SlipLids
                  defaultText="Furniture Removal Service - No"
                  buttonTexts={[
                    "No",
                    "Yes",
                    // Add more button texts as needed
                  ]}
                />
              </div>

              <div className="w-full mt-12">
                <div>
                  {/* <p className="text-[#00acbb] font-semibold text-[1.2rem] mb-3">{amount}</p> */}

                  <div className="flex items-center gap-4 max-md:justify-center my-7">
                    <div className="flex border-black border-[1px] justify-between items-center rounded-2xl py-[0.6rem] px-3 w-1/4 text-sm">
                      <svg
                        focusable="false"
                        className="w-3 h-3 cursor-pointer icon icon--minus"
                        viewBox="0 0 10 2"
                        role="presentation"
                        onClick={handleDecrease}
                      >
                        <path d="M10 0v2H0V0z" fill="currentColor"></path>
                      </svg>

                      <span>{counter}</span>

                      <svg
                        focusable="false"
                        className="w-3 h-3 cursor-pointer icon icon--plus"
                        viewBox="0 0 10 10"
                        role="presentation"
                        onClick={handleIncrease}
                      >
                        <path
                          d="M6 4h4v2H6v4H4V6H0V4h4V0h2v4z"
                          fill="currentColor"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className='drawer-end  w-1/4'>
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                              <label htmlFor="my-drawer" className="drawer-button">
                                  <div
                                    className={`filter cursor-pointer bg-[#00acbb] w-[100%] hover:bg-[#00666e] text-sm text-white font-bold py-[0.6rem] text-center px-3 rounded-2xl ${shake ? "animate__animated animate__shakeX" : ""
                                      }`}
                                    // onClick={() => console.log("Add to cart clicked")}
                                  >
                                    Add to Cart
                                  </div>
                                  </label>
                              </div>
                            <div className="z-50 drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        {/* <ProductFilter pageType={pages} /> */}
                                <div className="relative min-h-full flex p-0 m-0 join join-vertical menu w-80 text-base-content">
                                    <Cart />
                                </div>
                            </div>
                        </div>
                        <div className='p-[0.4rem] border-[1px] border-black rounded-[50px]'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill='none'
                    >
                      <path fill="#ffffff" d="M0 0h24v24H0z" />
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
                        stroke="#000"
                        strokeWidth="1"
                      />
                    </svg>
                    </div>

                    <button className="rounded-2xl py-[0.6rem] border-[1px]  border-black text-center px-3 text-sm w-1/4">
                      Order Swatch
                    </button>
                  </div>

                  <div className="flex gap-2 mt-1 mb-7">
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

                  <div className="mt-6 leading-7">
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

    </div>
  );
};

export default DetailsBed;
