import Banner from "@/components/banner/Banner";
import Activity from "../components/activity/Activity";
import Benefit from "../components/benefit/Benefit";
import Categories from "../components/categories/Categories";
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
