import ProductDetails from "@/pages/ProductDetails";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Faq from "../components/faq/Faq";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import Wishlist from "@/pages/Wishlist";
import Checkout from "@/pages/Checkout";

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
      {
        name: "Checkout",
        path: "checkout",
        element: <Checkout/>,
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
    name: "Wishlist",
    path: "wishlist",
    element: (
      <ProtectedRoute>
        <Wishlist />
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
