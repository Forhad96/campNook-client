import Breadcrumbs from "@/components/productDetails/Breadcrumbs";
import ImageGallery from "@/components/productDetails/ImageGellery";
import ProductInfo from "@/components/productDetails/ProductInfo";
import ProductTabs from "@/components/productDetails/ProductTabs";
import Container from "@/components/shared/Conatainer";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2016/03/26/13/09/coffee-beans-1280537_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/26/13/09/coffee-beans-1280537_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/26/13/09/coffee-beans-1280537_1280.jpg",
  ];
const {id} =useParams()
  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <Breadcrumbs />
        <ImageGallery images={images} />
        <ProductInfo />
        <ProductTabs />
      </div>
    </Container>
  );
};

export default ProductDetails;
