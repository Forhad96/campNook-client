// import { FaArrowRight } from "react-icons/fa";

const TrendingCollection = () => {
  const cards = [
    {
      id: 1,
      icon: "https://images.pexels.com/photos/20420587/pexels-photo-20420587/free-photo-of-eastern-dresses-2024-shoot-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=300",
      name: "Trending on instagram",
    },
    {
      id: 2,
      icon: "https://images.pexels.com/photos/2310130/pexels-photo-2310130.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      icon: "https://images.pexels.com/photos/2310130/pexels-photo-2310130.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="bg-[#daebfc] px-5  py-5 my-10">
      <div className="container mx-auto py-5">
        <div className="">
          <h1 className="text-4xl font-bold p-4">Trending Collection</h1>
        </div>
        <div className=" mx-auto grid grid-cols-1 bg-slate-50 lg:grid-cols-2  gap-2 py-2 ">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col   relative rounded-xl p-4 ">
              <div className="relative">
                <img src={card.icon} alt="" className="h-full lg:h-[575px]" />
              </div>
              <p className="text-2xl  font-semibold text-black py-2">
                {card.name}
              </p>
              <button className="btn flex items-center justify-center bg-[#33644A] px-4 py-2 rounded-xl text-white w-1/2">
                {/* Explore Now <FaArrowRight className=" text-2xl p-1" /> */}
                Explore Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCollection;
