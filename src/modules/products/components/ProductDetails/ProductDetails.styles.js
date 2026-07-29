import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #16191d;
  color: #ffffff;
  padding: 40px 24px 60px 24px;
  font-family: inherit;
`;

export const Container = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 520px 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

/* Gallery Styles */
export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const MainImageCard = styled.div`
  width: 100%;
  height: 520px;
  background-color: #181a1f;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: border-color 250ms ease, transform 250ms ease;

  &:hover {
    border-color: rgba(255, 31, 31, 0.25);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 300ms ease;
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    height: 380px;
  }
`;

export const ThumbnailRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #181a1f;
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #8d8d94;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 250ms ease;

  &:hover:not(:disabled) {
    background-color: #1d2025;
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const ThumbnailList = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 4px 0;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const ThumbnailCard = styled.button`
  width: 72px;
  height: 72px;
  border-radius: 14px;
  background-color: #181a1f;
  border: ${(props) =>
    props.$isActive
      ? "2px solid #FF1F1F"
      : "1px solid rgba(255, 255, 255, 0.05)"};
  box-shadow: ${(props) =>
    props.$isActive ? "0 0 12px rgba(255, 31, 31, 0.3)" : "none"};
  padding: 8px;
  cursor: pointer;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 250ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${(props) => (props.$isActive ? "#FF1F1F" : "rgba(255, 255, 255, 0.2)")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

/* Product Info Card Styles */
export const InfoCard = styled.div`
  background-color: #181a1f;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 36px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: border-color 250ms ease;

  &:hover {
    border-color: rgba(255, 31, 31, 0.2);
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const StockBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: rgba(34, 197, 94, 0.12);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.25);
  border-radius: 9999px;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 700;
  width: fit-content;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 44px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  line-height: 1.1;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .stars {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #facc15;
  }

  .text {
    color: #8d8d94;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .main-price {
    color: #ff1f1f;
    font-size: 44px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.5px;
  }

  .sub-desc {
    color: #8d8d94;
    font-size: 14px;
    font-weight: 500;
  }

  .old-price-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 4px;
  }

  .old-price {
    color: #8d8d94;
    font-size: 18px;
    text-decoration: line-through;
  }

  .discount-pill {
    background-color: rgba(255, 31, 31, 0.15);
    color: #ff1f1f;
    border: 1px solid rgba(255, 31, 31, 0.3);
    border-radius: 9999px;
    padding: 2px 10px;
    font-size: 12px;
    font-weight: 700;
  }
`;

export const DescriptionText = styled.p`
  color: #8d8d94;
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.05);
  width: 100%;
`;

/* Feature Grid Styles */
export const FeatureGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCardContainer = styled.div`
  background-color: #1d2025;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  padding: 18px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  transition: transform 250ms ease, border-color 250ms ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 31, 31, 0.3);
  }

  .icon-wrapper {
    color: #ff1f1f;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .title {
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
  }

  .subtitle {
    color: #8d8d94;
    font-size: 12px;
    line-height: 1.4;
  }
`;

/* Quantity Selector & Action Buttons Styles */
export const ControlsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const QuantityLabel = styled.span`
  color: #8d8d94;
  font-size: 14px;
  font-weight: 600;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  background-color: #1d2025;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 4px 8px;

  button {
    background: transparent;
    border: none;
    color: #ffffff;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    transition: all 200ms ease;

    &:hover:not(:disabled) {
      color: #ff1f1f;
      background-color: rgba(255, 31, 31, 0.1);
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  span {
    color: #ffffff;
    font-size: 15px;
    font-weight: 800;
    min-width: 40px;
    text-align: center;
  }
`;

export const ButtonsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BaseButton = styled.button`
  height: 56px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 250ms ease, box-shadow 250ms ease, background-color 250ms ease, border-color 250ms ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const AddToCartBtn = styled(BaseButton)`
  background-color: #ff1f1f;
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 16px rgba(255, 31, 31, 0.25);

  &:hover {
    box-shadow: 0 8px 24px rgba(255, 31, 31, 0.4);
    background-color: #e01b1b;
  }
`;

export const WishlistBtn = styled(BaseButton)`
  background-color: #181a1f;
  color: #ff1f1f;
  border: 1px solid #ff1f1f;

  &:hover {
    background-color: rgba(255, 31, 31, 0.1);
    border-color: #ff1f1f;
  }
`;

export const BuyNowBtn = styled(BaseButton)`
  background-color: #ff1f1f;
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 16px rgba(255, 31, 31, 0.25);

  &:hover {
    box-shadow: 0 8px 24px rgba(255, 31, 31, 0.4);
    background-color: #e01b1b;
  }
`;
