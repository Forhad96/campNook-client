import AddProduct from "@/components/dashboard/addProduct/AddProduct";
import AllProducts from "@/pages/dashboard/AllProducts";
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
    ],
  },
];
