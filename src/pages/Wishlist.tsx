import { IProduct } from "@/components/products/types";
import ComHeader from "@/components/shared/ComHeader";
import WishlistItem from "@/components/wishlist/WishlistItem";
import { useGetUserWishlistQuery } from "@/redux/features/wishlist/wishlistApi";

const Wishlist = () => {
  const { data } = useGetUserWishlistQuery(undefined);
  const wishlistProducts = data?.data?.products as IProduct[];
  console.log(wishlistProducts);
  return (
    <div>
      <header>
        <ComHeader head="Wishlist Product" />
      </header>
      {wishlistProducts?.map((product) => (
        <WishlistItem product={product} />
      ))}
    </div>
  );
};
export default Wishlist;
