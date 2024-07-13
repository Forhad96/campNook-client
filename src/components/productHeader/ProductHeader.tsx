import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";
import Sort from "./Sort";
import { Button } from "@/components/ui/button";
import { ResetIcon } from "@/components/shared/Icons/Icons";
import SearchInput from "./SearchInput";

const ProductHeader = (): JSX.Element => {
  return (
    <div className="flex items-center justify-end gap-8 px-8  my-10">
      <FilterByCategory />
      <FilterByPrice />
      <Sort />
      <SearchInput />

      <Button variant="destructive">
        <ResetIcon />
      </Button>
    </div>
  );
};

export default ProductHeader;
