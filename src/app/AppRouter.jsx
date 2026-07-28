import { Routes, Route, Navigate } from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/Home";

import LoginPage from "../modules/auth/pages/LoginPage";
import RegisterPage from "../modules/auth/pages/RegisterPage";

import ProductsPage from "../modules/products/pages/ProductsPage";
import ProductDetailsPage from "../modules/products/pages/ProductsPage/ProductDetailsPage";

import OrdersPage from "../modules/orders/pages/OrdersPage";
import TrackOrderPage from "../modules/orders/pages/TrackOrderPage/TrackOrderPage";

import AddressPage from "../modules/address/pages/AddressPage";
import PaymentPage from "../modules/payment/pages/PaymentPage";
import WishlistPage from "../modules/wishlist/pages/WishlistPage";

export default function AppRouter() {
  const token = localStorage.getItem("access_token");

  return (
    <Routes>
      <Route
        path="/"
        element={
          token ? (
            <Navigate to="/products" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route path="/home" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/products" element={<ProductsPage />} />

      <Route
        path="/products/:id"
        element={<ProductDetailsPage />}
      />

      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/orders/:id" element={<TrackOrderPage />} />
      <Route path="/orders/:id/track" element={<TrackOrderPage />} />
      <Route path="/track-order/:id" element={<TrackOrderPage />} />

      <Route path="/address" element={<AddressPage />} />

      <Route path="/payment" element={<PaymentPage />} />

      <Route path="*" element={<NotFoundPage />} />

      <Route
        path="/wishlist"
        element={<WishlistPage />}
      />

    </Routes>
  );
}