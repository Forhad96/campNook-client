import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCreateProductMutation } from "@/redux/features/products/productsApi";
import { toast } from "sonner";
import { imageUpload } from "@/utils/ImageUpload";
import Loader from "@/components/shared/Loader/Loader";
import {  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue, } from "@/components/ui/select";
import { useGetAllCategoriesQuery } from "@/redux/features/category/categoryApi";

interface IFormInput {
  name: string;
  images: string[];
  description: string;
  price: number;
  category: string;
  stock: number;
  ratings: number;
}
 interface TCategory {
  name: string;
  description: string;
  image: string;
}

const AddProduct: React.FC = () => {
    const { data: productCategory } = useGetAllCategoriesQuery(undefined);
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const [images, setImages] = useState<File[]>([]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  if (isLoading) {
    return <Loader />;
  }
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const onSubmit = async (data: IFormInput) => {
    try {
      if (images.length > 0) {
        const imageUrls = await imageUpload(images);
        const newProduct = {
          ...data,
          price: Number(data.price),
          stock: Number(data.stock),
          ratings: Number(data.ratings),
          images: imageUrls,
        };
        await createProduct(newProduct);
        toast.success("Product added successfully");
        if (isLoading) {
          return <Loader />;
        }
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl w-full mt-10 mx-auto p-4 bg-white shadow-md rounded"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-3"
        >
          Name
        </label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} required />}
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="images"
          className="block text-sm font-medium text-gray-700 mb-3"
        >
          Image
        </label>
        <Controller
          name="images"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="file"
              onChange={handleImageChange}
              multiple
              required
            />
          )}
        />
        {errors.images && (
          <p className="mt-2 text-sm text-red-600">{errors.images.message}</p>
        )}
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex-1">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-3"
          >
            Price
          </label>
          <Controller
            name="price"
            control={control}
            defaultValue={0}
            render={({ field }) => <Input type="number" {...field} required />}
          />
          {errors.price && (
            <p className="mt-2 text-sm text-red-600">{errors.price.message}</p>
          )}
        </div>

        <div className="flex-1">
           <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-3"
          >
            Category
          </label>
          <Controller
            name="category"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {productCategory?.data?.map((category:TCategory) => (
                      <SelectItem key={category.name} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="stock"
            className="block text-sm font-medium text-gray-700 mb-3"
          >
            Stock
          </label>
          <Controller
            name="stock"
            control={control}
            defaultValue={0}
            render={({ field }) => <Input type="number" {...field} required />}
          />
          {errors.stock && (
            <p className="mt-2 text-sm text-red-600">{errors.stock.message}</p>
          )}
        </div>

        <div className="flex-1">
          <label
            htmlFor="ratings"
            className="block text-sm font-medium text-gray-700 mb-3"
          >
            Ratings
          </label>
          <Controller
            name="ratings"
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <Input type="number" step="0.1" max="5" {...field} required />
            )}
          />
          {errors.ratings && (
            <p className="mt-2 text-sm text-red-600">
              {errors.ratings.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-3"
        >
          Description
        </label>
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => <Textarea {...field} required />}
        />
        {errors.description && (
          <p className="mt-2 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-campfire-gradient"
        disabled={isLoading}
      >
        {isLoading ? "Adding Product..." : "Add Product"}
      </Button>
    </form>
  );
};

export default AddProduct;
