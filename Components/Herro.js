"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function Hero() {
  const slides = [
    { id: 1, imageSrc: "/job44.jpg" },
    { id: 2, imageSrc: "/job55.jpg" },
    { id: 3, imageSrc: "/job66.jpg" },
  ];

  return (
    <div className="relative mt-[140px] md:mt-[118px]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.imageSrc}
              alt={`Slide ${slide.id}`}
              width={1920}
              height={780}
              className="object-cover w-full"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
