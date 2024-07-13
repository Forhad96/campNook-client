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
import { useState } from "react";

const FilterByPrice = (): JSX.Element => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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
              className="my-5 bg-secondary placeholder:text-[#c8c8c8] text-[#ededed] "
            />
            <Input
              placeholder="Max price"
              type="number"
              defaultValue={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="placeholder:text-[#c8c8c8] my-5 bg-[#4c781ab4] text-[#ededed] "
            />
          </div>
          <div className="space-y-6">
            <Slider
              defaultValue={[100]}
              max={10000}
              step={1}
              onValueChange={(value) => setMinPrice(value)}
            />
            <Slider
              defaultValue={[minPrice]}
              max={10000}
              step={1}
              onValueChange={(value) => setMaxPrice(value)}
            />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterByPrice;



// export default PriceRange;
