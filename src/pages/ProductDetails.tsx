import Breadcrumbs from "@/components/productDetails/Breadcrumbs";
import ImageGallery from "@/components/productDetails/ImageGellery";
import ProductInfo from "@/components/productDetails/ProductInfo";
import ProductTabs from "@/components/productDetails/ProductTabs";
import Container from "@/components/shared/Conatainer";
import Loader from "@/components/shared/Loader/Loader";
import { useGetProductByIdQuery } from "@/redux/features/products/productsApi";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2016/03/26/13/09/coffee-beans-1280537_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/12/21/23/43/tipi-575912_960_720.png",
    "https://cdn.pixabay.com/photo/2022/08/19/17/27/camping-7397346_960_720.png",
  ];
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id as string);
  if (!id) {
    return <Loader />;
  }
  console.log(data);
  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* <Breadcrumbs /> */}
        <ImageGallery images={images} />
        <ProductInfo {...data?.data}/>
        <ProductTabs {...data?.data} />
      </div>
    </Container>
  );
};

export default ProductDetails;
