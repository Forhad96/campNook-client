import { baseApi } from "../../api/baseApi";
const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserWishlist: builder.query({
      query: (payload) => {
        return {
          url: `/wishlist`,
          method: "GET",
          body: payload,
        };
      },
      providesTags: ["wishlist"],
    }),
    addToWishlist: builder.mutation({
      query: (payload) => ({
        url: "/wishlist/add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["wishlist"],
    }),

    removeFormWishlist: builder.mutation({
      query: (payload) => ({
        url: `/wishlist/remove`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["wishlist"],
    }),
  }),
});
export const {
useAddToWishlistMutation,
useGetUserWishlistQuery,
useRemoveFormWishlistMutation
} = cartApi;
