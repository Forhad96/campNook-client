import { useState } from "react";

const NewProducts = () => {
  const cards = [
    {
      id: 1,
      icon: "https://images.pexels.com/photos/2310130/pexels-photo-2310130.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      icon: "https://images.pexels.com/photos/20420587/pexels-photo-20420587/free-photo-of-eastern-dresses-2024-shoot-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: 3,
      icon: "https://images.pexels.com/photos/2310130/pexels-photo-2310130.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Tees & T-Shirt",
    },
    {
      id: 4,
      icon: "https://images.pexels.com/photos/20420587/pexels-photo-20420587/free-photo-of-eastern-dresses-2024-shoot-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=300",
      name: "western dress",
    },
    {
      id: 5,
      icon: "https://images.pexels.com/photos/2310130/pexels-photo-2310130.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Winter dress",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = currentIndex + 1 >= cards.length ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex - 1 < 0 ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container mx-auto py-8 px-10 my-10">
      <div className="relative px-5">
        <div className="absolute inset-y-0 -left-5 flex items-center">
          <button onClick={prevSlide} className="text-3xl">
            &#10094;
          </button>
        </div>
        <div className="absolute inset-y-0 -right-5 flex items-center">
          <button onClick={nextSlide} className="text-3xl">
            &#10095;
          </button>
        </div>
        <div className="flex overflow-hidden w-full px-5">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`w-full  flex justify-center items-center mx-auto transform transition-transform duration-300  ${
                index === currentIndex
                  ? "scale-100"
                  : "scale-75 hidden  lg:block xl:block"
              }`}
            >
              <div className="rounded-lg overflow-hidden flex flex-col justify-center items-center bg-white  shadow-md">
                <img
                  src={card.icon}
                  alt={card.name}
                  className="object-cover h-72"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{card.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
