import React from "react";
import Container from "../shared/Conatainer";

const BestSelling: React.FC = () => {
  const products = [
    { title: "Mens' Scotch", imgSrc: "https://picsum.photos/id/1/600/800" },
    { title: "Mens' Red", imgSrc: "https://picsum.photos/id/2/600/800" },
    { title: "Mens' Punk", imgSrc: "https://picsum.photos/id/3/600/800" },
    { title: "Mens' Black", imgSrc: "https://picsum.photos/id/4/600/800" },
    { title: "Womens' Brown", imgSrc: "https://picsum.photos/id/5/600/800" },
  ];

  return (
    <section className="">
      <Container>
        <div >
          <h1 className="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">
            Our Best Selling Collection
          </h1>

          <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 lg:gap-8">
            {products.slice(0, 3).map((product, index) => (
              <article key={index} className="bg-slate-50 p-8">
                <div className="">
                  <h2 className="text-xl text-gray-600">{product.title}</h2>
                  <p className="mt-2 text-xl font-semibold text-gray-800"></p>
                </div>
                <div className="mt-8 flex items-center justify-center md:mt-24">
                  <img src={product.imgSrc} alt={product.title} />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-5 md:mt-6 md:grid-cols-2 md:gap-6 lg:mt-8 lg:gap-8">
            {products.slice(3).map((product, index) => (
              <article key={index} className="bg-slate-50 p-8">
                <div>
                  <h2 className="text-xl text-gray-600">{product.title}</h2>
                  <p className="mt-2 text-xl font-semibold text-gray-800"></p>
                </div>
                <div className="mt-28 flex items-center justify-center md:mt-3">
                  <img src={product.imgSrc} alt={product.title} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BestSelling;
