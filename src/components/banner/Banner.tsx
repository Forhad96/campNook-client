import { useState } from "react";
import banner1 from "/images/banner/banner1.png";
import CommonSlider from "../shared/commonSlider/CommonSlider";
import Container from "../shared/Container";
import ComButton from "../shared/ComButton";
const Banner = () => {
  const [swiperState, setSwiperState] = useState({
    isBeginning: true,
    isEnd: false,
  });
  return (
    <div className="">
      <CommonSlider
        slidesPerView={1}
        spaceBetween={10}
        //   slidesPerGroup={Math.ceil(products.length / 4)}
        sliderId="HeroSlider"
        className="HeroSlider"
        freeMode={true}
        grabCursor={true}
        setSwiperState={setSwiperState}
      >
        {[1, 2, 3].map((product, index) => (
          <SlideItem key={index} items={product} index={index} />
        ))}
      </CommonSlider>
    </div>
  );
};
export default Banner;

const SlideItem = ({ items, index }) => {
  return (
    <div className="relative">
      <img
        src={banner1}
        className="object-cover w-full relative"
        alt="product image"
      />
      <div className=" absolute inset-0 flex items-center flex-col justify-center">
        <h5 className="text-5xl text-white font-semibold mt-4">
          Your Ultimate Camping Gear Destination
        </h5>
       <ComButton className="mt-5">
        Shop Now
       </ComButton>
      </div>
    </div>
  );
};
