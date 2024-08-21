'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../../css/styles.css'
import Image from 'next/image'

function CarouselSlider() {
  return (
    <div className="relative carousel-container">
      <Carousel autoPlay={true} interval={6000} showIndicators={false} showThumbs={false} infiniteLoop={true} className="carousel">
        <div className="">
          <Image src="/HomeBanner.webp" width='1000' height='1000' alt="image1" />
        </div>
        <div className="">
          <Image src="/HomeBanner.webp" width='1000' height='1000' alt="image2" />
        </div>
        <div className="">
          <Image src="/HomeBanner.webp" width='1000' height='1000' alt="image3" />
        </div>
        <div className="">
          <Image src="/HomeBanner.webp" width='1000' height='1000' alt="image4" />
        </div>
      </Carousel>
      <div className="absolute top-[50%] left-[15%] -transform-y-[50%]">
          <div className=" text-white banner-text-container" ><p className="transition duration-700 banner-sub-heading animate fadeInUp ">A place where dreams are made</p><p className="transition duration-700 banner-heading animate fadeInUp">Ottoman Beds</p><a href="/collections" className="text-black transition duration-700 bg-white rounded-5 banner-button fadeInUp">Explore Now </a></div>
      </div>
    </div>
  );
}

export default CarouselSlider;
