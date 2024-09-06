import { useAppSelector } from "@/redux/hooks";
import ProductCard from "../components/products/ProductCard";
import ProductHeader from "../components/productHeader/ProductHeader";
import { IProduct } from "../components/products/types";
import Container from "../components/shared/Container";
import { useGetAllProductsQuery } from "../redux/features/products/productsApi";
import {
  selectCategory,
  selectClear,
  selectMaxPrice,
  selectMinPrice,
  selectSearch,
} from "@/redux/features/products/productSlice";
const Products: React.FC = () => {
  const search = useAppSelector(selectSearch);
  const category = useAppSelector(selectCategory);
  const minPrice = useAppSelector(selectMinPrice);
  const maxPrice = useAppSelector(selectMaxPrice);
  const clear = useAppSelector(selectClear);

  // Construct the query object
  const query: Record<string, string> = {};
  if (category) {
    query.category = category;
  }
  if (search) {
    query.searchTerm = search;
  }
  if (minPrice) {
    query.minPrice = minPrice;
  }
  if (maxPrice) {
    query.maxPrice = maxPrice;
  }
  if (clear) {
    delete query.category;
    delete query.searchTerm;
    delete query.minPrice;
    delete query.maxPrice;
  }

  const { data } = useGetAllProductsQuery(query);

  return (
    <Container>
      <ProductHeader />
      <div className="text-center">
        <h1 className="font-bold text-4xl mb-4">Product Category name</h1>
        <h1 className="text-3xl">Product description</h1>
      </div>
      <section
        id="Projects"
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {data?.data?.map((product: IProduct) => (
          <ProductCard key={product?.name} product={product} />
        ))}
      </section>
    </Container>
  );
};

export default Products;
