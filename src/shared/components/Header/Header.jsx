import { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { Menu, X, Heart, ShoppingCart } from "lucide-react";
import SearchBar from "../../../modules/products/components/SearchBar";
import { useCartStore } from "../../../modules/cart/store/useCartStore";
import { useCartQuery } from "../../../modules/cart/hooks/api/useCartQuery";
import { useWishlistQuery } from "../../../modules/wishlist/api/useWishlistQuery";
import * as S from "./Header.styles";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Force re-render on route change to check token
  const queryClient = useQueryClient();
  const toggleDrawer = useCartStore((state) => state.toggleDrawer);
  const { data: cartItems = [] } = useCartQuery();
  const { data: wishlistItems = [] } = useWishlistQuery();
  const cartItemsCount = cartItems.length;
  const wishlistCount = wishlistItems.length;

  const isAuthenticated = !!localStorage.getItem("access_token");

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token");
    queryClient.clear(); // Clear all cached user data (orders, cart, etc.)
    closeMenu();
    navigate("/login");
  };

  if (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  return (
    <S.HeaderContainer>
      <div className="container">
        <S.HeaderContent>
          <S.Logo onClick={() => { closeMenu(); navigate("/"); }}>
            Ekart<span>Hub</span>
          </S.Logo>

          <S.DesktopNavMenu>
            <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink>
            <NavLink to="/orders" className={({ isActive }) => isActive ? "active" : ""}>Orders</NavLink>
            <NavLink to="/wishlist" className={({ isActive }) => isActive ? "active" : ""}>Wishlist</NavLink>
            <a href="#" onClick={(e) => { e.preventDefault(); toggleDrawer(); }}>
              Cart {cartItemsCount > 0 && `(${cartItemsCount})`}
            </a>
          </S.DesktopNavMenu>

          <S.Actions>
            <SearchBar placeholder="Search gadgets..." />
            
            <S.IconButton
              onClick={() => { closeMenu(); navigate("/wishlist"); }}
              className={location.pathname === "/wishlist" ? "active" : ""}
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart size={20} fill={location.pathname === "/wishlist" ? "#e60000" : "none"} color={location.pathname === "/wishlist" ? "#e60000" : "currentColor"} />
              {wishlistCount > 0 && <S.Badge>{wishlistCount}</S.Badge>}
            </S.IconButton>

            <S.IconButton
              onClick={(e) => { e.preventDefault(); toggleDrawer(); }}
              title="Cart"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && <S.Badge>{cartItemsCount}</S.Badge>}
            </S.IconButton>

            {!isAuthenticated && (
              <NavLink to="/login" className={({ isActive }) => isActive ? "auth-link active" : "auth-link"}>Login</NavLink>
            )}
            {isAuthenticated && (
              <a href="#" onClick={handleLogout} className="logout-btn">Logout</a>
            )}
          </S.Actions>

          <S.MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </S.MobileMenuButton>
        </S.HeaderContent>
      </div>

      <S.NavOverlay $isOpen={isMobileMenuOpen} onClick={closeMenu} />
      <S.SidebarMenu $isOpen={isMobileMenuOpen}>
        <S.CloseButton onClick={closeMenu}>
          <X size={24} />
        </S.CloseButton>
        
        <S.SidebarLinks>
          <NavLink to="/products" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink>
          <NavLink to="/orders" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Orders</NavLink>
          <NavLink to="/wishlist" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>
            Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
          </NavLink>
          <a href="#" onClick={(e) => { e.preventDefault(); closeMenu(); toggleDrawer(); }}>
            Cart {cartItemsCount > 0 && `(${cartItemsCount})`}
          </a>
          {!isAuthenticated && (
            <NavLink to="/login" onClick={closeMenu} className={({ isActive }) => isActive ? "auth-link active" : "auth-link"}>Login</NavLink>
          )}
          {isAuthenticated && (
            <a href="#" onClick={handleLogout} className="logout-btn">Logout</a>
          )}
        </S.SidebarLinks>
      </S.SidebarMenu>
    </S.HeaderContainer>
  );
}

