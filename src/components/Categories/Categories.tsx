import Container from "../shared/Container";
import ComHeader from "../shared/ComHeader";
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { IProduct } from "@/components/products/types";
import Loader from "@/components/shared/Loader/Loader";
import notFoundImg from "/not-found.jpg";
export default function Categories() {
  const { data, isLoading, isFetching } = useGetAllProductsQuery(undefined);
  const products = data?.data as IProduct[];
  if (isLoading || isFetching) <Loader />;
  return (
    <Container>
      <header>
        <ComHeader
          head={"Explore Our Camping Categories"}
          dic="Find all the essentials for your camping adventure."
        />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {products?.slice(0, 4).map((card, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden w-full flex flex-col justify-center items-center shadow-md transition duration-500 transform scale-90 hover:scale-100 cursor-pointer"
          >
            <img
              src={card.images.length === 0 ? notFoundImg : card.images[0]}
              alt={card.name || "Product Image"}
              className="object-cover h-full max-h-96 w-full"
            />
            {card.name && (
              <div className="p-4 text-white absolute bottom-0 bg-brandSecondary/45 group-hover:bg-campfire-gradient transition duration-500 w-full text-center">
                <h3 className="text-lg font-semibold mb-2 transition duration-500">
                  {card.category}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
