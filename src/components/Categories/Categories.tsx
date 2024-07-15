import col6 from "/images/categories/col6.png";

import iamge1 from "/images/categories/image1.png";

import iamge2 from "/images/categories/image2.png";
import iamge3 from "/images/categories/image3.png";
import iamge4 from "/images/categories/image1.png";
import iamge5 from "/images/categories/image5.png";
import iamge6 from "/images/categories/image6.png";
import Container from "../shared/Container";
import ComHeader from "../shared/ComHeader";
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { IProduct } from "@/components/products/types";
import Loader from "@/components/shared/Loader/Loader";
import { useState } from "react";
import notFoundImg from "/not-found.jpg";
export default function Categories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const data = [iamge1, iamge2, iamge3, iamge4, iamge5,iamge6 ];
  const { data, isLoading, isFetching } = useGetAllProductsQuery(undefined);
  const products = data?.data as IProduct[];
  if (isLoading || isFetching) <Loader />;
  return (
    <Container>
      <header>
        <ComHeader
          head={"Explore Our Camping Categories"}
          dic="Find all the essentials for your camping adventure."
        />
      </header>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-2 ">
        {products?.slice(0, 4).map((card, index) => (

            <div key={index} className="relative group rounded-lg overflow-hidden w-full hover:bg-campfire-gradient flex flex-col justify-center items-center bg-brandSecondary/15 shadow-md">
              <img
                src={card.images.length === 0 ? notFoundImg : card.images[0]}
                alt={card.name || "Product Image"}
                className="object-cover h-full max-h-96 w-full"
              />
              {card.name && (
                <div className="p-4  absolute bottom-0 bg-brandSecondary/70 hover:bg-campfire-gradient w-full text-center">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {card.category}
                  </h3>
                </div>
              )}
            </div>

          // <img src={item} key={i} alt="" />
        ))}
      </div>
    </Container>
  );
}
