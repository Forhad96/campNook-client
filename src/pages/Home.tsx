
import Banner from "@/components/banner/Banner";
import Activity from "../test/Activity";
import Benefit from "../test/Benefit";
import Categories from "../test/Categories";
import NewProducts from "../test/NewProducts";
import BestSelling from "@/components/bestSelling/BestSelling";
import NewCollection from "@/components/newCollection/NewCollection";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Benefit />
      <Categories />
      <BestSelling />
      <Activity />
      <NewCollection/>
      <NewProducts />
    </div>
  );
};
export default Home;
