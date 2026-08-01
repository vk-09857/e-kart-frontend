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
  padding: 10px 0 28px;
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

export const ControlsBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;
  animation: ${fadeInUp} 0.6s ease forwards;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FilterTabsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 4px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterTab = styled.button`
  background: ${props => props.isActive ? '#FF1F1F' : '#181A1F'};
  color: ${props => props.isActive ? '#FFFFFF' : '#8D8D94'};
  border: ${props => props.isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.08)'};
  border-radius: 12px;
  padding: 10px 22px;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.25s ease;

  &:hover {
    color: #FFFFFF;
    border-color: ${props => props.isActive ? 'none' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-1px);
  }
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #181A1F;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 10px 16px;
  color: #8D8D94;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  position: relative;
  align-self: flex-start;

  @media (min-width: 768px) {
    align-self: auto;
  }

  select {
    background: transparent;
    color: #FFFFFF;
    border: none;
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    padding-right: 4px;
    font-family: inherit;

    option {
      background: #181A1F;
      color: #FFFFFF;
    }
  }
`;

export const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${fadeInUp} 0.7s ease forwards;
`;

export const OrderCard = styled.div`
  background-color: #181A1F;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 24px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  position: relative;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

export const OrderCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 0.85fr 1.65fr 1fr 1fr;
    align-items: center;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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

export const ViewDetailsLink = styled.button`
  background: transparent;
  border: none;
  color: #FF1F1F;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  margin-top: 4px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

export const ProductColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 14px;
  background-color: #1D2025;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.05);
  flex-shrink: 0;
`;

export const ProductMetaGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 800;
  color: #FFFFFF;
  text-transform: uppercase;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductVariant = styled.span`
  font-size: 13px;
  color: #8D8D94;
  font-weight: 500;
`;

export const QtyBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #1D2025;
  color: #8D8D94;
  border-radius: 999px;
  padding: 3px 12px;
  font-size: 12px;
  font-weight: 700;
  width: fit-content;
  margin-top: 2px;
`;

export const StatusColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ActionColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`;

export const OrderActionBtn = styled.button`
  background: transparent;
  border: 1px solid #FF1F1F;
  color: #FF1F1F;
  height: 46px;
  width: 100%;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 31, 31, 0.1);
    box-shadow: 0 4px 15px rgba(255, 31, 31, 0.2);
    transform: translateY(-1px);
  }
`;

export const FeatureSection = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  animation: ${fadeInUp} 0.8s ease forwards;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FeatureCard = styled.div`
  background-color: #181A1F;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.25s ease;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);

  &:hover {
    transform: translateY(-3px);
  }
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
  color: #8D8D94;
  margin: 0;
`;

export const EmptyOrdersCard = styled.div`
  background-color: #181A1F;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 60px 20px;
  text-align: center;
  color: #8D8D94;
  font-size: 15px;
`;
