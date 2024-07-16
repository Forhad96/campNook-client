import { PriceIcon } from "@/components/shared/Icons/Icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { setPrice } from "@/redux/features/products/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect, useState } from "react";

const FilterByPrice = (): JSX.Element => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPrice({ minPrice, maxPrice }));
  }, [minPrice, maxPrice, dispatch]);
  return (
    <div className="z-20">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <PriceIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 p-4" hideWhenDetached={false}>
          <DropdownMenuLabel className="text-primary">
            Filter by price
          </DropdownMenuLabel>

          <div className="flex justify-between">
            <Input
              placeholder="Min price"
              onChange={(e) => setMinPrice(e.target.value)}
              type="number"
              defaultValue={minPrice}
              className="my-5 bg-brandSecondary placeholder:text-[#c8c8c8] text-[#ededed] "
            />
            <Input
              placeholder="Max price"
              type="number"
              defaultValue={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="placeholder:text-[#c8c8c8] my-5 bg-brandSecondary text-[#ededed] "
            />
          </div>
          <div className="space-y-6">
            <Slider
              defaultValue={[Number(minPrice)]}
              max={1000}
              step={1}
              onValueChange={(value) => setMinPrice(value.toString())}
            />
            <Slider
              defaultValue={[Number(maxPrice)]}
              max={1000}
              className=""
              step={1}
              onValueChange={(value) => setMaxPrice(value.toString())}
            />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterByPrice;

// export default PriceRange;
