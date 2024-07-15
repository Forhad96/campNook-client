import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { useState } from "react";
import { IProduct } from "../products/types";
import Loader from "../shared/Loader/Loader";
import { Images } from "../shared/Images";
import notFoundImg from "/not-found.jpg";
import ComHeader from "../shared/ComHeader";

const BestSelling = () => {
  const { data, isLoading, isFetching } = useGetAllProductsQuery(undefined);
  const products = data?.data as IProduct[];
  if (isLoading || isFetching) <Loader />;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = currentIndex + 1 >= products.length ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex - 1 < 0 ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container mx-auto py-8 px-10 my-10">
      <header>
        <ComHeader head="Best Selling Products" dic="Gear up for greet outdoor"/>
      </header>
      <div className="relative px-5">
        <div className="absolute inset-y-0 -left-5 flex items-center">
          <button
            onClick={prevSlide}
            className="text-3xl"
            aria-label="Previous Slide"
          >
            &#10094;
          </button>
        </div>
        <div className="absolute inset-y-0 -right-5 flex items-center">
          <button
            onClick={nextSlide}
            className="text-3xl"
            aria-label="Next Slide"
          >
            &#10095;
          </button>
        </div>
        <div className="flex overflow-hidden w-full px-5">
          {products?.map((card, index) => (
            <div
              key={card._id}
              className={`w-full flex justify-center items-center  mx-auto transform transition-transform duration-300 ${
                index === currentIndex
                  ? "scale-100"
                  : "scale-75  hidden lg:block xl:block"
              }`}
            >
              <div className="rounded-lg overflow-hidden w-full hover:bg-highlight flex flex-col justify-center items-center bg-brandSecondary/15 shadow-md">
                <img
                  src={card.images.length === 0 ? notFoundImg : card.images[0]}
                  alt={card.name || "Product Image"}
                  className="object-cover h-72 w-full"
                />
                {card.name && (
                  <div className="p-4">
                    <h3 className="text-brandPrimary text-lg font-semibold mb-2">
                      {card.name}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
