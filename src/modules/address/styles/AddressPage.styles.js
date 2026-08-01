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

  @media (max-width: 640px) {
    padding: 0 16px;
  }

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

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1.15fr 0.85fr;
  }
`;

export const SummaryColumnWrapper = styled.div`
  @media (min-width: 900px) and (max-width: 1199px) {
    grid-column: span 2;
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

  &:hover {
    transform: translateY(-3px);
  }
`;

export const SavedAddressCard = styled(Card)`
  cursor: pointer;
  border-color: ${props => props.isSelected ? '#FF1F1F' : 'rgba(255, 255, 255, 0.05)'};
  box-shadow: ${props => props.isSelected ? '0 0 20px rgba(255, 31, 31, 0.15)' : '0 15px 40px rgba(0,0,0,0.35)'};

  &:hover {
    border-color: ${props => props.isSelected ? '#FF1F1F' : 'rgba(255, 31, 31, 0.4)'};
  }
`;

export const AddressCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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

export const CustomerName = styled.span`
  font-size: 18px;
  font-weight: 800;
  color: #FFFFFF;
`;

export const DefaultBadge = styled.span`
  background-color: #FF1F1F;
  color: #FFFFFF;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 4px 10px;
  border-radius: 999px;
`;

export const AddressDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
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

export const CardDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.05);
  margin: 16px 0;
`;

export const CardActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const EditButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 31, 31, 0.3);
  color: #FF1F1F;
  padding: 10px 18px;
  border-radius: 14px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 31, 31, 0.1);
    border-color: #FF1F1F;
    box-shadow: 0 4px 15px rgba(255, 31, 31, 0.25);
    transform: translateY(-1px);
  }
`;

export const DeleteIconButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #8B8B94;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;

  &:hover {
    color: #FF1F1F;
    border-color: rgba(255, 31, 31, 0.3);
    background: rgba(255, 31, 31, 0.1);
  }
`;

export const AddAddressBtn = styled.button`
  background: #181A1F;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  color: #FF1F1F;
  border-radius: 20px;
  padding: 18px;
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.25s ease;

  &:hover {
    border-color: #FF1F1F;
    background: rgba(255, 31, 31, 0.05);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 31, 31, 0.15);
  }
`;

export const FormGrid = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FullWidthCol = styled.div`
  grid-column: 1 / -1;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  &:focus-within div {
    color: #FF1F1F;
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #8B8B94;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.25s ease;
`;

export const StyledInput = styled.input`
  height: 56px;
  width: 100%;
  background-color: #1D2025;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  padding: 0 16px 0 48px;
  color: #FFFFFF;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  transition: all 0.25s ease;
  outline: none;

  &::placeholder {
    color: #8B8B94;
  }

  &:focus {
    border-color: #FF1F1F;
    box-shadow: 0 0 12px rgba(255, 31, 31, 0.25);
  }
`;

export const SaveButton = styled.button`
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
  gap: 10px;
  transition: all 0.25s ease;
  margin-top: 8px;

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

export const OrderSummaryCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 20px 22px;

  &:hover {
    transform: none;
  }
`;

export const OrderItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 180px;
  overflow-y: auto;
  margin-bottom: 14px;
  padding-right: 4px;

  /* Custom scrollbar */
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
  gap: 12px;
`;

export const OrderItemImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: #1D2025;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.05);
  flex-shrink: 0;
`;

export const OrderItemMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;

export const OrderItemName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #FFFFFF;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const OrderItemQty = styled.span`
  font-size: 12px;
  color: #8B8B94;
`;

export const OrderItemPrice = styled.span`
  font-size: 14px;
  font-weight: 800;
  color: #FFFFFF;
  white-space: nowrap;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #8B8B94;
  margin-bottom: 8px;
`;

export const SummaryValue = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #FFFFFF;
`;

export const FreeShippingValue = styled.span`
  font-size: 13px;
  font-weight: 800;
  color: #22C55E;
  text-transform: uppercase;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

export const TotalLabel = styled.span`
  font-size: 15px;
  font-weight: 900;
  text-transform: uppercase;
  color: #FFFFFF;
  letter-spacing: 0.5px;
`;

export const TotalAmount = styled.span`
  font-size: 22px;
  font-weight: 900;
  color: #FFFFFF;
`;

export const ContinueButton = styled.button`
  height: 50px;
  width: 100%;
  background-color: #FF1F1F;
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.25s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 31, 31, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export const FeatureSection = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  animation: ${fadeInUp} 0.7s ease forwards;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FeatureCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
`;

export const FeatureIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 31, 31, 0.1);
  border: 1px solid rgba(255, 31, 31, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF1F1F;
  flex-shrink: 0;
`;

export const FeatureTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FeatureTitle = styled.h3`
  font-size: 15px;
  font-weight: 800;
  color: #FFFFFF;
  margin: 0;
`;

export const FeatureSubtitle = styled.p`
  font-size: 13px;
  color: #8B8B94;
  margin: 0;
`;

export const EmptyAddressesText = styled.p`
  color: #8B8B94;
  font-size: 14px;
  text-align: center;
  padding: 30px 10px;
  background: #181A1F;
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 20px;
`;
