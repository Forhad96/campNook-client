import { baseApi } from "../../api/baseApi";
const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserWishlist: builder.query({
      query: (payload) => {
        return {
          url: `/wishlist/my-wishlist`,
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
  useRemoveFormWishlistMutation,
} = cartApi;


// {
//   "user":"669b41d114c56e72543786bc",
//   "items":[
//     {
//       "product":"669b59455945c9b2cbe47de0",
//       "quantity":1
//     }
//   ]
// }