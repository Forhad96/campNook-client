import col6 from "/images/categories/col6.png";

import iamge1 from "/images/categories/image1.png";

import iamge2 from "/images/categories/image2.png";
import iamge3 from "/images/categories/image3.png";
import iamge4 from "/images/categories/image1.png";
import iamge5 from "/images/categories/image5.png";
import iamge6 from "/images/categories/image6.png";
import ComHeader from "../shared/ComHeader";
import Container from "../shared/Conatainer";

export default function Categories() {
  const data = [iamge1, iamge2, iamge3, iamge4, iamge5, iamge6];
  return (
    <Container>
      <ComHeader head={"Categories In Furniture"} />
      <div className=" lg:px-10 mt-5 grid lg:grid-cols-2 grid-cols-1 rounded-md">
        <img src={col6} className="rounded-xl" alt="" />
        <div className=" grid grid-cols-2 gap-2 mt-2">
          {data.map((item, i) => (
            <img src={item} key={i} alt="" />
          ))}
        </div>
      </div>
    </Container>
  );
}
