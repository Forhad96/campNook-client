import Banner from "@/components/banner/Banner";
import Activity from "../components/Activity/Activity";
import Benefit from "../components/benefit/Benefit";
import Categories from "../components/Categories/Categories";
import BestSelling from "@/components/bestSelling/BestSelling";
import Testimonials from "@/components/testimonials/Testimonials";
const Home = () => {
  return (
    <div className="relative">

      <Banner />
      <Activity />
      <BestSelling />
      <Categories />
      <Benefit />
      <Testimonials/>
    </div>
  );
};
export default Home;
