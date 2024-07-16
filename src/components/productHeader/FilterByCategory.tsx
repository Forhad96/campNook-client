import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import {
  clearFilters,
  setCategory,
} from "@/redux/features/products/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect, useState } from "react";

const FilterByCategory = (): JSX.Element => {
  const { data } = useGetAllProductsQuery({ fields: "category" });
  console.log(data);
  const dispatch = useAppDispatch();
  const [filterValue, onFilter] = useState("");
console.log(filterValue);
  useEffect(() => {
    dispatch(setCategory({ category: filterValue }));
  }, [filterValue, dispatch]);

  if (filterValue === "clearFilters") {
    dispatch(clearFilters());
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <FilterIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 py-5">
          <DropdownMenuLabel className="mb-4 ">
            Filter category{" "}
          </DropdownMenuLabel>
          <DropdownMenuRadioGroup value={filterValue} onValueChange={onFilter}>
            <DropdownMenuRadioItem className="" value="">
              All
            </DropdownMenuRadioItem>

            {data?.data.map((category) => (
              <DropdownMenuRadioItem key={category._id} value={category.category}>
                {category.category}
              </DropdownMenuRadioItem>
            ))}
            <DropdownMenuRadioItem value="clearFilters">
              Clear filter
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default FilterByCategory;

const FilterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-7 text-[gray] smooth-transition !duration-300 hover:text-white z-20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
      />
    </svg>
  );
};
