"use client";

// React and Next.js imports
import React, { ReactNode } from "react";

// Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Pagination, Navigation, FreeMode, Autoplay } from "swiper/modules";

interface CommonSliderProps {
  children: ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  slidesPerGroup?: number;
  loop?: boolean;
  className?: string;
  sliderId?: string;
  speed?: number;
  freeMode?: boolean;
  autoplay?: boolean | object;
  grabCursor?: boolean;
  setSwiperState?: (state: { isBeginning: boolean; isEnd: boolean }) => void;
}

const CommonSlider: React.FC<CommonSliderProps> = ({
  children,
  slidesPerView = 4,
  spaceBetween = 10,
  slidesPerGroup,
  loop = false,
  className = "",
  sliderId,
  speed = 800,
  freeMode = false,
  autoplay = false,
  grabCursor = false,
  setSwiperState,
  ...props
}) => {
  const modules = [Pagination, Navigation, FreeMode, Autoplay];

  const breakpoints = {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: slidesPerView,
      spaceBetween: 30,
    },
  };

  return (
    <div className={`${className}`}>
      <Swiper
        slidesPerGroup={slidesPerGroup}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        onSlideChange={(swiper) => {
          if (setSwiperState) {
            setSwiperState({
              isBeginning: swiper.isBeginning,
              isEnd: swiper.isEnd,
            });
          }
        }}
        loop={loop}
        speed={speed}
        freeMode={freeMode}
        autoplay={autoplay}
        grabCursor={grabCursor}
        navigation={{
          nextEl: `.common-swiper-button-next-${sliderId}`,
          prevEl: `.common-swiper-button-prev-${sliderId}`,
        }}
        modules={modules}
        pagination={{
          el: `.common-swiper-pagination-${sliderId}`,
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} w-3 h-3 bg-primary rounded-full mx-1"></span>`,
        }}
        className={`swiper-container commonSwiper ${className}`}
        {...props}
        watchOverflow={true}
        // breakpoints={breakpoints}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommonSlider;
