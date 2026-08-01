import AppRouter from "./AppRouter";
import Providers from "./Providers";
import Header from "../shared/components/Header";
import CartDrawer from "../shared/components/CartDrawer";
import { Global } from "@emotion/react";
import { globalCss } from "./GlobalStyles.styles";
import Footer from "../shared/components/Footer/Footer";
import ScrollToTop from "../shared/components/ScrollToTop/ScrollToTop";

import { useLocation } from "react-router-dom";

function AppContent() {
  const location = useLocation();

  const hideFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/register";

  return (
    <>
      <Global styles={globalCss} />
      <ScrollToTop />
      <Header />
      <AppRouter />
      {!hideFooter && <Footer />}
      <CartDrawer />
    </>
  );
}

export default function App() {
  return (
    <Providers>
      <AppContent />
    </Providers>
  );
}