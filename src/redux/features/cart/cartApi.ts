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
    getAllUserCarts: builder.query({
      query: (query) => {
        console.log(query);
        return {
          url: `/carts/${query.email}`,
          method: "GET",
          params: query,
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
  useGetAllUserCartsQuery,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartApi;
