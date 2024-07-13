import ProductDetails from "@/pages/ProductDetails";
import About from "../pages/about/About";
import Cart from "../pages/cart/Cart";
import Faq from "../pages/faq/Faq";
import Home from "../pages/home/Home";
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
