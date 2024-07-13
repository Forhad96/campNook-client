import ProductDetails from "@/pages/ProductDetails";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Faq from "../components/faq/Faq";
import Home from "../pages/Home";
import Products from "../pages/Products";

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
        path: "products/:details",
        element: <ProductDetails />,
      },
    ],
  },

  {
    name: "Cart",
    path: "cart",
    element: <Cart />,
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
