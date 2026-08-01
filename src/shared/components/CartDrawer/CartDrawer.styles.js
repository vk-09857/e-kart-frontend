import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  z-index: 1050;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
`;

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 420px;
  background: #0d0d12;
  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.4);
  z-index: 1100;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.$isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1);

  @media (max-width: 640px) {
    max-width: 100%;
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, rgba(255,255,255,0.1), transparent);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  h2 {
    color: var(--color-on-dark);
    margin: 0;
    font-size: 18px;
    font-weight: var(--font-weight-heavy);
    letter-spacing: -0.3px;
  }

  button {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: var(--color-mute);
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: all 0.2s;

    &:hover {
      color: var(--color-primary);
      border-color: rgba(230, 0, 0, 0.2);
      background: rgba(230, 0, 0, 0.05);
    }
  }
`;

export const CartList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  gap: var(--spacing-md);
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  padding: 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.2s ease;
  animation: ${slideIn} 0.3s ease forwards;

  &:hover {
    border-color: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
  }

  img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    flex-shrink: 0;
  }
`;

export const ItemInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;

  h4 {
    color: var(--color-on-dark);
    font-size: 13px;
    font-weight: var(--font-weight-bold);
    margin: 0 0 3px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  p {
    color: rgba(255, 255, 255, 0.35);
    font-size: 11px;
    margin: 0 0 6px 0;
  }

  .price {
    color: var(--color-primary);
    font-weight: var(--font-weight-heavy);
    font-size: 14px;
    margin-top: auto;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 4px 10px;
  border-radius: 12px;
  width: fit-content;

  button {
    background: transparent;
    border: none;
    color: var(--color-on-dark);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    transition: color 0.2s;

    &:hover {
      color: var(--color-primary);
    }
  }

  span {
    color: var(--color-on-dark);
    font-size: 13px;
    font-weight: var(--font-weight-heavy);
    min-width: 14px;
    text-align: center;
  }
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.25);
  cursor: pointer;
  padding: 4px;
  align-self: flex-start;
  transition: all 0.2s ease;

  &:hover {
    color: var(--color-primary);
    transform: scale(1.1);
  }
`;

export const Footer = styled.div`
  padding: 20px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(0, 0, 0, 0.3);
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);

  span {
    color: rgba(255, 255, 255, 0.4);
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  strong {
    color: var(--color-on-dark);
    font-size: 22px;
    font-weight: var(--font-weight-heavy);
    letter-spacing: -0.5px;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, var(--color-primary), #ff1a1a);
  color: white;
  border: none;
  padding: 14px;
  border-radius: 14px;
  font-weight: var(--font-weight-bold);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(230, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(230, 0, 0, 0.3);

    &::before {
      left: 100%;
    }
  }
  
  &:disabled {
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.3);
    box-shadow: none;
    transform: none;
    cursor: not-allowed;

    &::before { display: none; }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: rgba(255, 255, 255, 0.3);
  gap: var(--spacing-lg);
  
  p {
    font-size: 15px;
    font-weight: var(--font-weight-bold);
  }
`;
