// AddProductForm.tsx
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface IFormInput {
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  ratings: number;
}

const ProductCategory = [
  { value: "Footwear", label: "Footwear" },
  { value: "Clothing", label: "Clothing" },
  { value: "Accessories", label: "Accessories" },
  // Add more categories as needed
];

const AddProduct: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    // Handle form submission, e.g., send data to the server
    console.log(data);
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
          render={({ field }) => <Input {...field} className="" required />}
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700 mb-3"
        >
          Image
        </label>
        <Controller
          name="image"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input {...field} type="file" className="" required />
          )}
        />
        {errors.image && (
          <p className="mt-2 text-sm text-red-600">{errors.image.message}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="mb-4">
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

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <Controller
            name="category"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select
                {...field}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              >
                {ProductCategory.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.category && (
            <p className="mt-2 text-sm text-red-600">
              {errors.category.message}
            </p>
          )}
        </div>

        <div className="mb-4">
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

        <div className="mb-4">
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
      <Button type="submit" className="w-full bg-campfire-gradient">
        Add Product
      </Button>
    </form>
  );
};

export default AddProduct;
