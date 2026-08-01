import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(10, 10, 15, 0.75);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  padding: 12px 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);

  @media (min-width: 768px) {
    gap: var(--spacing-2xl);
  }
`;

export const Logo = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 30px;
  font-weight: var(--font-weight-heavy);
  color: var(--color-on-dark);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  white-space: nowrap;
  order: 1;

  span {
    color: var(--color-primary);
  }
`;

export const DesktopNavMenu = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
    order: 2;
  }

  a {
    color: rgba(255, 255, 255, 0.55);
    text-decoration: none;
    font-size: 13px;
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;

    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 0;
      height: 2px;
      background: var(--color-primary);
      transition: width 0.3s ease;
    }

    &:hover,
    &.active {
      color: var(--color-primary);
    }

    &:hover::after,
    &.active::after {
      width: 100%;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--color-on-dark);
  border: none;
  cursor: pointer;
  order: 2;
  padding: 4px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1050;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

export const SidebarMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 280px;
  background: rgba(10, 10, 15, 0.98);
  backdrop-filter: blur(20px);
  z-index: 1100;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.4);
  transform: ${(props) => (props.$isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1);
  display: flex;
  flex-direction: column;
  padding: var(--spacing-2xl);
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  color: var(--color-mute);
  cursor: pointer;
  padding: 4px;
  margin-bottom: var(--spacing-2xl);

  &:hover {
    color: var(--color-on-dark);
  }
`;

export const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);

  a {
    color: var(--color-on-dark);
    text-decoration: none;
    font-size: 18px;
    font-weight: var(--font-weight-heavy);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: color 0.2s ease;

    &:hover, &.active {
      color: var(--color-primary);
    }
  }

  .auth-link {
    margin-top: var(--spacing-xl);
    padding-top: var(--spacing-xl);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .logout-btn {
    margin-top: var(--spacing-xl);
    padding: 12px;
    background: var(--color-primary);
    color: var(--color-on-primary);
    text-align: center;
    border-radius: var(--rounded-sm);
    font-size: 14px;
    
    &:hover {
      background: #ff1a1a;
      color: var(--color-on-primary);
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex: 1;
  min-width: 0;
  justify-content: flex-end;
  order: 3;

  @media (max-width: 480px) {
    gap: var(--spacing-xs);
  }

  @media (min-width: 768px) {
    max-width: 500px;
  }

  .auth-link {
    display: none;

    @media (min-width: 768px) {
      display: block;
      color: var(--color-on-dark);
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      text-decoration: none;
      font-size: 12px;
      font-weight: var(--font-weight-bold);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: all 0.2s ease;
      white-space: nowrap;
      padding: 6px 16px;
      border-radius: var(--rounded-sm);

      &:hover, &.active {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-1px);
      }
    }
  }

  .logout-btn {
    display: none;

    @media (min-width: 768px) {
      display: block;
      color: var(--color-on-primary);
      background: var(--color-primary);
      text-decoration: none;
      font-size: 12px;
      font-weight: var(--font-weight-bold);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: all 0.2s ease;
      white-space: nowrap;
      padding: 6px 16px;
      border: none;
      border-radius: var(--rounded-sm);
      margin-left: var(--spacing-xs);

      &:hover {
        background: #ff1a1a;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(230, 0, 0, 0.3);
      }
    }
  }
`;

export const IconButton = styled.button`
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    border-radius: 10px;

    svg {
      width: 17px;
      height: 17px;
    }
  }

  &:hover, &.active {
    background: rgba(230, 0, 0, 0.15);
    border-color: rgba(230, 0, 0, 0.35);
    color: #e60000;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background: #e60000;
  color: white;
  font-size: 11px;
  font-weight: 800;
  height: 18px;
  min-width: 18px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border: 2px solid #0a0a0f;
`;

