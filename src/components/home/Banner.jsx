import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnding, setIsEnding] = useState(false);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
            swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
            swiperRef.current.swiper.navigation.init();
            swiperRef.current.swiper.navigation.update();
        }
    }, []);

    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;

        const updateNavigationState = () => {
            setIsBeginning(swiperInstance.isBeginning);
            setIsEnding(swiperInstance.isEnding);
        };

        swiperInstance?.on("slideChange", updateNavigationState);
        updateNavigationState();

        return () => {
            swiperInstance?.off("slideChange", updateNavigationState);
        };
    }, []);

    const sliders = [
        {
            imageUrl:
                "https://bizweb.dktcdn.net/100/559/903/themes/1004156/assets/home_slider_2.jpg?1758547585919",
        },
        {
            imageUrl:
                "https://bizweb.dktcdn.net/100/559/903/themes/1004156/assets/home_slider_1.jpg?1758547585919",
        },
    ];

    return (
        <div className="w-full relative left-0 top-0 flex items-center justify-center">
            <button
                ref={prevRef}
                className={`absolute z-10 left-[10px] bg-slate-100 rounded-full cursor-pointer hover:bg-slate-200 p-3 ${
                    isBeginning ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                <FaArrowLeft className="" />
            </button>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation]}
                ref={swiperRef}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
            >
                {sliders.map((slider, index) => (
                    <SwiperSlide key={index}>
                        <img
                            className="w-full h-[100vh]"
                            src={slider.imageUrl}
                            alt="banner ${index + 1}"
                        ></img>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button
                ref={nextRef}
                className={`absolute z-10 right-[10px] bg-slate-100 rounded-full cursor-pointer hover:bg-slate-200 p-3 ${
                    isEnding ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                <FaArrowRight className="" />
            </button>
        </div>
    );
};

export default Banner;
