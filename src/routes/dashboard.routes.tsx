
import AddProduct from "@/pages/dashboard/AddProduct";
import AllProducts from "@/pages/dashboard/AllProducts";
import ImageUp from "@/pages/dashboard/ImageUp";
import ProductManagement from "@/pages/ProductManagement";
export const dashboardPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <ProductManagement />,
    children: [
      {
        name: "Order",
        path: "order",
        element: "",
      },
      {
        name: "Products",
        path: "products",
        element: <AllProducts />,
      },
      {
        name: "Add Product",
        path: "add-product",
        element: <AddProduct />,
      },
      {
        name: "Customer",
        path: "product",
        element: "",
      },
      {
        name: "Analytics",
        path: "product",
        element: "",
      },
      {
        name: "Image upload",
        path: "uploadImage",
        element: <ImageUp/>,
      },
    ],
  },
];
