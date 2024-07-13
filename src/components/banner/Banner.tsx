import { useState } from "react";
import banner1 from '/images/banner/banner1.png';
import CommonSlider from "../shared/commonSlider/CommonSlider";
import Container from "../shared/Conatainer";
const Banner = () => {
      const [swiperState, setSwiperState] = useState({
        isBeginning: true,
        isEnd: false,
      });
    return (
      <Container>
        <CommonSlider
          slidesPerView={1}
          spaceBetween={10}
        //   slidesPerGroup={Math.ceil(products.length / 4)}
          sliderId="flagship"
          className="FlagshipSlider"
          freeMode={true}
          grabCursor={true}
          setSwiperState={setSwiperState}
        >
          {[1,2,3].map((product, index) => (
            <SlideItem key={index} items={product} index={index} />
          ))}
        </CommonSlider>
      </Container>
    );
};
export default Banner;


const SlideItem = ({ items,index }) => {
  return (
    <div className="relative">
      <img
        src={banner1}
        className="object-cover w-full relative"
        alt="product image"
      />
      <div className=" absolute inset-0 flex items-center flex-col justify-center">
        <h5 className="text-5xl text-white font-semibold mt-4">
          Ultimate best tour for your life
        </h5>
<button className="bg-accent p-2 px-4 rounded-md text-brandPrimary font-medium"> Shop now</button>
      </div>
    </div>
  );
};
