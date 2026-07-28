import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
  100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
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

export const BreadcrumbNav = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  animation: ${fadeInUp} 0.4s ease forwards;

  a {
    color: #8D8D94;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #FFFFFF;
    }
  }

  span.separator {
    color: #8D8D94;
    font-size: 11px;
  }

  span.current {
    color: #FF1F1F;
  }
`;

export const HeaderSection = styled.div`
  padding: 0 0 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  color: #8D8D94;
  margin: 10px 0 0;
  padding-left: 19px;
  font-weight: 500;
`;

export const TopOverviewCard = styled.div`
  background-color: #181A1F;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
  animation: ${fadeInUp} 0.6s ease forwards;
`;

export const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 0.85fr 1.65fr 1.2fr 1fr;
    align-items: center;
  }
`;

export const MetaGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MetaLabel = styled.span`
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  color: #8D8D94;
  letter-spacing: 0.5px;
`;

export const MetaValue = styled.span`
  font-size: 15px;
  font-weight: 800;
  color: #FFFFFF;
`;

export const ProductInfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ProductImageLarge = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 16px;
  background-color: #1D2025;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.05);
  flex-shrink: 0;
`;

export const AddressMetaGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
  color: #8D8D94;
  line-height: 1.4;

  b {
    color: #FFFFFF;
    font-size: 14px;
  }
`;

export const TimelineCard = styled.div`
  background-color: #181A1F;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 36px 28px;
  margin-bottom: 24px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
  animation: ${fadeInUp} 0.7s ease forwards;
`;

export const TimelineTrack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0;
  }
`;

export const TimelineStepItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  flex: 1;

  @media (min-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 14px;
  }
`;

export const StepConnectorLine = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: block;
    position: absolute;
    top: 24px;
    left: 50%;
    width: 100%;
    height: 2px;
    background-color: ${props => props.isCompleted ? '#22C55E' : 'rgba(255, 255, 255, 0.1)'};
    z-index: 0;
  }
`;

export const StepCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.isDelivered ? '#22C55E' : '#181A1F'};
  border: 2px solid ${props => props.isCompleted ? '#22C55E' : props.isCurrent ? '#22C55E' : 'rgba(255, 255, 255, 0.15)'};
  color: ${props => props.isDelivered ? '#FFFFFF' : props.isCompleted ? '#22C55E' : '#8D8D94'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  animation: ${props => props.isCurrent ? pulse : 'none'} 2s infinite;
`;

export const StepTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StepTitle = styled.span`
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  color: ${props => props.isCompleted || props.isCurrent ? '#FFFFFF' : '#8D8D94'};
  letter-spacing: 0.5px;
`;

export const StepTime = styled.span`
  font-size: 12px;
  color: #8D8D94;
  font-weight: 500;
`;

export const SplitInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 24px;
  animation: ${fadeInUp} 0.8s ease forwards;

  @media (min-width: 1100px) {
    grid-template-columns: 1.8fr 1fr;
  }
`;

export const InfoCardGrid = styled.div`
  background-color: #181A1F;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoBlockHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const InfoIconCircle = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 31, 31, 0.1);
  border: 1px solid rgba(255, 31, 31, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF1F1F;
  flex-shrink: 0;
`;

export const InfoTitle = styled.h4`
  font-size: 14px;
  font-weight: 800;
  color: #FFFFFF;
  margin: 0;
`;

export const InfoContent = styled.div`
  font-size: 13px;
  color: #8D8D94;
  line-height: 1.5;

  b {
    color: #FFFFFF;
  }

  .green-text {
    color: #22C55E;
    font-weight: 700;
  }
`;

export const CopyButton = styled.button`
  background: transparent;
  border: none;
  color: #8D8D94;
  cursor: pointer;
  padding: 2px 4px;
  display: inline-flex;
  align-items: center;
  transition: color 0.2s ease;

  &:hover {
    color: #FFFFFF;
  }
`;

export const SummaryCard = styled.div`
  background-color: #181A1F;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const SummaryTitle = styled.h3`
  font-size: 15px;
  font-weight: 800;
  text-transform: uppercase;
  color: #FFFFFF;
  letter-spacing: 0.5px;
  margin: 0 0 20px;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #8D8D94;
  margin-bottom: 12px;
`;

export const SummaryValue = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #FFFFFF;
`;

export const FreeShipping = styled.span`
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
`;

export const TotalAmount = styled.span`
  font-size: 26px;
  font-weight: 900;
  color: #FFFFFF;
`;

export const BuyAgainButton = styled.button`
  background: transparent;
  border: 1px solid #FF1F1F;
  color: #FF1F1F;
  height: 50px;
  width: 100%;
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

  &:hover {
    background: rgba(255, 31, 31, 0.1);
    box-shadow: 0 4px 15px rgba(255, 31, 31, 0.25);
    transform: translateY(-1px);
  }
`;

export const OrderItemsCard = styled.div`
  background-color: #181A1F;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 24px;
  animation: ${fadeInUp} 0.9s ease forwards;
`;

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const ItemMetaGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ItemImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background-color: #1D2025;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.05);
  flex-shrink: 0;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ItemName = styled.span`
  font-size: 15px;
  font-weight: 800;
  color: #FFFFFF;
`;

export const ItemVariant = styled.span`
  font-size: 13px;
  color: #8D8D94;
`;

export const ItemPrice = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: #FFFFFF;
`;
