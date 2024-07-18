import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserAllCarts: builder.query({
      query: () => {
        return {
          url: `/carts/user-cart`,
          method: "GET",
        };
      },
      providesTags: ["cart"],
    }),
    addToCart: builder.mutation({
      query: (payload) => ({
        url: "/carts",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["cart"],
    }),

    updateCart: builder.mutation({
      query: (updatedProduct) => {
        console.log(updatedProduct);
        return {
          url: `/carts`,
          method: "PATCH",
          body: updatedProduct,
        };
      },
      invalidatesTags: ["cart"],
    }),
    deleteCart: builder.mutation({
      query: (id: string) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});
export const {
  useAddToCartMutation,
  useGetUserAllCartsQuery,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartApi;
