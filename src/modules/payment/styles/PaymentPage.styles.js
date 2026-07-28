import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #16191D;
  padding-top: 32px;
  padding-bottom: 60px;
  position: relative;
  overflow-x: hidden;
  max-width: 100vw;

  /* Subtle Red Radial Glow */
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 20%, rgba(255, 31, 31, 0.05) 0%, transparent 60%);
    pointer-events: none;
    z-index: 0;
  }

  /* Subtle Square Grid Pattern */
  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.012) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.012) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const Container = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: 1200px) {
    padding: 0 32px;
  }
`;

export const HeaderSection = styled.div`
  padding: 10px 0 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 36px;
  animation: ${fadeInUp} 0.5s ease forwards;
`;

export const Title = styled.h1`
  font-family: 'Bebas Neue', 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 900;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  border-left: 3px solid #FF1F1F;
  padding-left: 16px;

  @media (min-width: 768px) {
    font-size: 38px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #8B8B94;
  margin: 10px 0 0;
  padding-left: 19px;
  font-weight: 500;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  animation: ${fadeInUp} 0.6s ease forwards;

  @media (min-width: 992px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ColumnTitle = styled.h2`
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  color: #FFFFFF;
  letter-spacing: 1px;
  margin: 0 0 4px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Card = styled.div`
  background-color: #181A1F;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 24px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  position: relative;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
`;

export const AddressHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const CustomerName = styled.span`
  font-size: 18px;
  font-weight: 800;
  color: #FFFFFF;
`;

export const ChangeAddressBtn = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 31, 31, 0.3);
  color: #FF1F1F;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 31, 31, 0.1);
    border-color: #FF1F1F;
    box-shadow: 0 4px 15px rgba(255, 31, 31, 0.25);
  }
`;

export const AddressDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AddressDetailRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  color: #8B8B94;
  line-height: 1.4;

  svg {
    color: #FF1F1F;
    flex-shrink: 0;
    margin-top: 2px;
  }

  span {
    color: #FFFFFF;
    font-weight: 500;
  }
`;

export const PaymentMethodList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 8px;
`;

export const PaymentMethodOption = styled.div`
  background-color: #1D2025;
  border: 1px solid ${props => props.isSelected ? '#FF1F1F' : 'rgba(255, 255, 255, 0.05)'};
  border-radius: 16px;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: ${props => props.isSelected ? '0 0 15px rgba(255, 31, 31, 0.15)' : 'none'};

  &:hover {
    border-color: ${props => props.isSelected ? '#FF1F1F' : 'rgba(255, 31, 31, 0.3)'};
  }
`;

export const OptionLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const CustomRadio = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${props => props.isSelected ? '#FF1F1F' : 'rgba(255, 255, 255, 0.2)'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
`;

export const RadioDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #FF1F1F;
  transform: scale(${props => props.isSelected ? 1 : 0});
  transition: transform 0.2s ease;
`;

export const MethodMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MethodTitle = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #FFFFFF;
`;

export const MethodSubtitle = styled.span`
  font-size: 13px;
  color: #8B8B94;
`;

export const MethodBadge = styled.span`
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #22C55E;
  font-size: 11px;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 999px;
  text-transform: uppercase;
`;

export const OrderSummaryCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

export const OrderItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 240px;
  overflow-y: auto;
  margin-bottom: 20px;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.02);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
`;

export const OrderItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
`;

export const OrderItemImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background-color: #1D2025;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.05);
  flex-shrink: 0;
`;

export const OrderItemMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

export const OrderItemName = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #FFFFFF;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const OrderItemQty = styled.span`
  font-size: 13px;
  color: #8B8B94;
`;

export const OrderItemPrice = styled.span`
  font-size: 15px;
  font-weight: 800;
  color: #FFFFFF;
  white-space: nowrap;
`;

export const CardDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.05);
  margin: 16px 0;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #8B8B94;
  margin-bottom: 12px;
`;

export const SummaryValue = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #FFFFFF;
`;

export const FreeShippingValue = styled.span`
  font-size: 14px;
  font-weight: 800;
  color: #22C55E;
  text-transform: uppercase;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 24px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

export const TotalLabel = styled.span`
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  color: #FFFFFF;
  letter-spacing: 0.5px;
`;

export const TotalAmount = styled.span`
  font-size: 26px;
  font-weight: 900;
  color: #FFFFFF;
`;

export const PayNowButton = styled.button`
  height: 56px;
  width: 100%;
  background-color: #FF1F1F;
  color: #FFFFFF;
  border: none;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.25s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 31, 31, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SecurityNotice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  font-size: 13px;
  color: #8B8B94;

  svg {
    color: #22C55E;
  }
`;
