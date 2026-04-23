import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { ProductDetail } from "./components/ProductDetail";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { Orders } from "./components/Orders";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { AdminLayout } from "./components/admin/AdminLayout";
import { AdminProducts } from "./components/admin/AdminProducts";
import { AdminOrders } from "./components/admin/AdminOrders";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "products/:id", Component: ProductDetail },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "orders", Component: Orders },
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminProducts },
      { path: "products", Component: AdminProducts },
      { path: "orders", Component: AdminOrders },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
