import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (payload) => ({
        url: "/carts",
        method: "POST",
        body: payload,
      }),
    }),
    getUserAllCarts: builder.query({
      query: () => {
        return {
          url: `/carts/user-cart`,
          method: "GET",
        };
      },
    }),
    updateCart: builder.mutation({
      query: ( updatedProduct ) => {
        console.log(updatedProduct);
        return {
          url: `/carts`,
          method: "PATCH",
          body: updatedProduct,
        };
      },
    }),
    deleteCart: builder.mutation({
      query: (id: string) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useAddToCartMutation,
  useGetUserAllCartsQuery,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartApi;
