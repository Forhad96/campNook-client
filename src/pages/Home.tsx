
import Banner from "@/components/banner/Banner";
import Activity from "../test/Activity";
import Benefit from "../test/Benefit";
import Categories from "../test/Categories";
import NewProducts from "../test/NewProducts";
import NewProducts2 from "@/test/NewProducts2";
import BestSelling from "@/components/bestSelling/BestSelling";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <NewProducts2 />
      <BestSelling />
      <Activity />
      <Benefit />
      <Categories />
      <NewProducts />
    </div>
  );
};
export default Home;