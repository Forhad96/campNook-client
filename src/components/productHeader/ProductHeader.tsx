import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";
import Sort from "./Sort";
import { Button } from "@/components/ui/button";
import { ResetIcon } from "@/components/shared/Icons/Icons";
import SearchInput from "./SearchInput";
import { useAppDispatch } from "@/redux/hooks";
import { clearFilters } from "@/redux/features/products/productSlice";

const ProductHeader = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClearFilter = () => {
    dispatch(clearFilters());
  };
  return (
    <div className="flex items-center justify-end gap-8 px-8  my-10">
      <FilterByCategory />
      <FilterByPrice />
      <Sort />
      <SearchInput />

      <Button onClick={handleClearFilter} variant="destructive">
        <ResetIcon />
      </Button>
    </div>
  );
};

export default ProductHeader;
