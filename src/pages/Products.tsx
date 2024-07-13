import { useAppSelector } from "@/redux/hooks";
import ProductCard from "../components/pages/products/ProductCard";
import ProductHeader from "../components/pages/products/productHeader/ProductHeader";
import { IProduct } from "../components/pages/products/types";
import Container from "../components/shared/Conatainer";
import { useGetAllProductsQuery } from "../redux/features/products/productsApi";
import {
  selectCategory,
  selectClear,
  selectMaxPrice,
  selectMinPrice,
  selectSearch,
} from "@/redux/features/products/productSlice";
const products = [
  {
    id: 1,
    brand: "Brand",
    name: "Product Name",
    price: 149,
    originalPrice: 199,
    imageUrl:
      "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    brand: "Brand",
    name: "Product Name",
    price: 149,
    originalPrice: 199,
    imageUrl:
      "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    brand: "Brand",
    name: "Product Name",
    price: 149,
    originalPrice: 199,
    imageUrl:
      "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  // Add more products here
];
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
  console.log({ query });
  console.log({ data });
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
