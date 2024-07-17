import ProductDetails from "@/pages/ProductDetails";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Faq from "../components/faq/Faq";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProtectedRoute from "@/components/layout/ProtectedRoute";

export const homePaths = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Products",
    path: "products",
    element: <Products />,
    children: [
      {
        name: "Products",
        path: "products/:id",
        element: <ProductDetails />,
      },
    ],
  },

  {
    name: "Cart",
    path: "cart",
    element: (
      <ProtectedRoute>
        <Cart />
      </ProtectedRoute>
    ),
  },
  {
    name: "Dashboard",
    path: "admin",
  },
  {
    name: "FAQ",
    path: "faq",
    element: <Faq />,
  },
  {
    name: "About",
    path: "about",
    element: <About />,
  },
];
