"use client";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import {Scrollbar} from 'swiper/modules';

import Image from "next/image";

// data
const products = [
    {
        image: "/assets/img/latest/p1.png",
        name: "Lorem ipsum Dolor",
        description: "Description...",
        price: 120,
    },
    {
        image: "/assets/img/latest/p2.png",
        name: "Lorem ipsum Dolor",
        description: "Description...",
        price: 120,
    },
    {
        image: "/assets/img/latest/p3.png",
        name: "Lorem ipsum Dolor",
        description: "Description...",
        price: 120,
    },
    {
        image: "/assets/img/latest/p4.png",
        name: "Lorem ipsum Dolor",
        description: "Description...",
        price: 120,
    },
    {
        image: "/assets/img/latest/p1.png",
        name: "Lorem ipsum Dolor",
        description: "Description...",
        price: 120,
    },
    {
        image: "/assets/img/latest/p2.png",
        name: "Lorem ipsum Dolor",
        description: "Description...",
        price: 120,
    },
    {
        image: "/assets/img/latest/p3.png",
        name: "Lorem ipsum Dolor",
        description: "Description...",
        price: 120,
    },
    {
        image: "/assets/img/latest/p4.png",
        name: "Lorem ipsum Dolor",
        description: "Description...",
        price: 120,
    },
];

const Slider = () => {
  return (
    <>
      <Swiper 
      slidesPerView={1} 
      spaceBetween={40} 
      scrollbar={{hide: false}} 
      modules={[Scrollbar]} 
      className="h-132.5" 
      breakpoints={{
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
        1170: {
            slidesPerView: 4
        },
      }}
      >
        {products.map((product,index)=> {
            const {image, name, description, price} = product;
          return (
          <SwiperSlide key={index} className="select-none w-full cursor-pointer">
           { /* product img */}
           <div className="bg-grey-50 h-90 flex items-center justify-center">
             <Image 
             src={image} 
             width={240} 
             height={240} 
             quality={100} 
             alt=""/>
            </div> 
            {/* text */} 
            <div className="w-full pt-4 flex flex-col gap-4">
                <div>
                    <h6 className="font-semibold text-primary mb-1">{name}</h6>
                    <p>{description}</p>
                </div>
                <p className="font-semibold text-accent2">{price}</p>
            </div>
        </SwiperSlide>
        );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
