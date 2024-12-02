"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import b1 from "../../../public/images/b1.jpg";
import b2 from "../../../public/images/b2.jpg";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import MotionTransition from "../motion/MotionTransition";
import ArrowButton from "../button/ArrowButton";

interface OffersellProps {
    id: string,
    title: string,
    image: string;
}

const OfferSell: React.FC = () => {
    const offerSellData: OffersellProps[] = [
        {
            id: "1",
            title: "hello",
            image: b1.src,

        },
        {
            id: "2",
            title: "hello",
            image: b2.src,
        },
        {
            id: "3",
            title: "hello",
            image: b1.src,
        },
        {
            id: "4",
            title: "hello",
            image: b2.src,
        },
    ];

    const swiperRef: React.MutableRefObject<SwiperType | null> =
        useRef<SwiperType | null>(null);

    return (
        <MotionTransition initialY={50} duration={2}>
            <div className=" md:py-4">

                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {offerSellData.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className=" w-full min-h-[200px] md:min-h-[350px] lg:min-h-[400px] bg-slate-100 px-8 py-10 rounded-md grid gap-5"

                        >

                            <Image
                                src={item.image}
                                fill
                                alt={item.title}
                                className=" rounded-sm"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex flex-row justify-end items-end mt-4">

                    <div className="swiper-nav-btns flex gap-2">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="flex justify-center items-center"
                        >
                            <ArrowButton direction="left" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="flex justify-center items-center"
                        >
                            <ArrowButton direction="right" />
                        </button>
                    </div>
                </div>
            </div>

        </MotionTransition>
    );
};

export default OfferSell;