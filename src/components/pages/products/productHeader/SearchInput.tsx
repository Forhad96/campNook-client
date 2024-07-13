import { SearchIcon } from "@/components/shared/Icons/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setSearch } from "@/redux/features/products/productSlice";
import { useAppDispatch } from "@/redux/hooks";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Input
        type="text"
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className=" text-xl p-4 font-poppins rounded-lg  w-[96%] mx-auto right-[2%] px-8"
        placeholder="Search.."
      />
      <Button variant="outline">
        <SearchIcon />
      </Button>
    </>
  );
};
export default SearchInput;
