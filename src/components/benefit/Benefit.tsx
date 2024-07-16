import image1 from "/images/benifit/award.png";
import image2 from "/images/benifit/w.png";
import image3 from "/images/benifit/Headset.png";
import image4 from "/images/benifit/truck.png";
import ComHeader from "../shared/ComHeader";
import Container from "../shared/Container";

export default function Benefit() {
  const data = [
    {
      icon: image1,
      title: "High Quality",
    },
    {
      icon: image2,
      title: "Warrenty",
    },
    {
      icon: image3,
      title: "Free Shipping",
    },
    {
      icon: image4,
      title: "24/7 Support",
    },
  ];

  return (
    <Container py="py-10">
      <ComHeader
        head={"Why Shop with CampNook?"}
        dic="Experience the best in camping gear with high quality, warranty, free shipping, and 24/7 support."
      />
      <div className=" grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-5 mt-10">
        {data.map((item, index) => (
          <div
            className=" rounded-2xl px-5 lg:py-10 py-5 bg-brandSecondary/15 hover:bg-campfire-gradient transition-all duration-500 flex items-center justify-center flex-col  font-bold text-[18px] md:text-[22px] space-y-10 text-opacity-70 lg:text-[32px] cursor-pointer hover:scale-105"
            key={index}
          >
            <div className=" bg-brandSecondary lg:p-4 p-2 rounded-full ">
              <img src={item.icon} alt="" />
            </div>
            <h3 className=" opacity-80">{item.title}</h3>
          </div>
        ))}
      </div>
    </Container>
  );
}

// monserrat
