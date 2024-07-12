import Banner from "../../components/pages/home/banner/Banner";
import Activity from "../../test/Activity";
import Benefit from "../../test/Benefit";
import Categories from "../../test/Categories";
import NewProducts from "../../test/NewProducts";
import TrendingCollection from "../../test/TrendingCollection";
import Products from "../products/Products";

const Home = () => {
  return (
    <div className="">
      <Banner/>
      <Products/>
      <Activity/>
      <Benefit />
      <Categories />
      <NewProducts />
    </div>
  );
};
export default Home;
