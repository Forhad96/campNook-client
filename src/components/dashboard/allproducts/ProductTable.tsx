import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { IProduct } from "@/components/products/types";
import { useDeleteProductMutation } from "@/redux/features/products/productsApi";
import { toast } from "sonner";

const ProductTable: FC<{ product: IProduct }> = ({ product }) => {
//   console.log(product);
  const [deleteProduct, { isError, isLoading, isSuccess }] =
    useDeleteProductMutation();
  const handleDelete = async (id: string) => {
    const res = await deleteProduct(id);
    console.log(res);
    if (isSuccess) {
      toast.success("product deleted successfully");
    }
  };
  return (
    <TableBody>
      <TableRow>
        <TableCell className="hidden sm:table-cell">
          <img
            src={product?.images[0]}
            alt={product?.name}
            className="aspect-square rounded-md w-16 object-cover"
          />
        </TableCell>
        <TableCell className="font-medium">{product?.name}</TableCell>
        <TableCell>
          <Badge variant="outline">Draft</Badge>
        </TableCell>
        <TableCell className="hidden md:table-cell">
          ${product?.price}
        </TableCell>
        <TableCell className="hidden md:table-cell">0</TableCell>
        <TableCell className="hidden md:table-cell">
          2023-07-12 10:42 AM
        </TableCell>
        <TableCell>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-haspopup="true" size="icon" variant="ghost">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDelete(product._id)}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
export default ProductTable;
