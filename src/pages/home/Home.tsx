import Banner from "../../components/pages/home/banner/Banner";
import BestSelling from "../../components/pages/home/bestSelling/BestSelling";
import Activity from "../../test/Activity";
import Benefit from "../../test/Benefit";
import Categories from "../../test/Categories";
import NewProducts from "../../test/NewProducts";
import TrendingCollection from "../../test/TrendingCollection";
import Products from "../../components/pages/products/ProductCard";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <BestSelling />
      <Activity />
      <Benefit />
      <Categories />
      <NewProducts />
    </div>
  );
};
export default Home;
