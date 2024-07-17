import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (query) => {
        console.log(query);
        return {
          url: "/products",
          method: "GET",
          params: query,
        };
      },
      providesTags: ["product"],
    }),
    getProductById: builder.query({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    createProduct: builder.mutation({
      query: (newProduct) => {
        console.log(newProduct);
        return {
          url: "/products",
          method: "POST",
          body: newProduct,
        };
      },
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...updatedProduct }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: updatedProduct,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
