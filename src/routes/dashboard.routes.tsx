import AddProduct from '@/components/addProduct/AddProduct';
import ProductManagement from '@/pages/ProductManagement';
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