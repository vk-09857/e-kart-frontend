import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Headphones } from "lucide-react";
import { useCartStore } from "../../../modules/cart/store/useCartStore";
import * as S from "./Footer.styles";

export default function Footer() {
  const toggleDrawer = useCartStore((state) => state.toggleDrawer);

  return (
    <S.FooterWrapper>
      <S.FooterCard>
        <S.GridContainer>
          {/* Column 1: Brand Info */}
          <S.Column>
            <div className="brand-logo">
              EKART<span>HUB</span>
            </div>
            <p className="brand-desc">
              Your destination for premium electronics, cutting-edge gadgets, and original computing devices.
            </p>
            <S.SocialRow>
              <S.SocialIconButton href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </S.SocialIconButton>

              <S.SocialIconButton href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </S.SocialIconButton>

              <S.SocialIconButton href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </S.SocialIconButton>

              <S.SocialIconButton href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </S.SocialIconButton>
            </S.SocialRow>
          </S.Column>

          {/* Column 2: Categories */}
          <S.Column>
            <h4 className="column-title">Categories</h4>
            <ul>
              <li><Link to="/products?category=mobiles">Mobiles</Link></li>
              <li><Link to="/products?category=laptops">Laptops</Link></li>
              <li><Link to="/products?category=accessories">Accessories</Link></li>
              <li><Link to="/products?category=gaming">Gaming</Link></li>
              <li><Link to="/products?category=appliances">Appliances</Link></li>
            </ul>
          </S.Column>

          {/* Column 3: Quick Links */}
          <S.Column>
            <h4 className="column-title">Quick Links</h4>
            <ul>
              <li><Link to="/products">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/orders">Orders</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); toggleDrawer(); }}>
                  Cart
                </a>
              </li>
              <li><Link to="/products">About</Link></li>
            </ul>
          </S.Column>

          {/* Column 4: Contact */}
          <S.Column>
            <h4 className="column-title">Contact</h4>
            <S.ContactList>
              <div className="contact-item">
                <Mail size={16} />
                <span>support@ekarthub.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 800 123 4567</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Mumbai, India</span>
              </div>
              <div className="contact-item">
                <Headphones size={16} />
                <span>24/7 Help Center</span>
              </div>
            </S.ContactList>
          </S.Column>
        </S.GridContainer>

        {/* Bottom Divider & Copyright */}
        <S.BottomDivider>
          <span className="copyright">© 2026 EKARTHUB. All rights reserved.</span>
        </S.BottomDivider>
      </S.FooterCard>
    </S.FooterWrapper>
  );
}