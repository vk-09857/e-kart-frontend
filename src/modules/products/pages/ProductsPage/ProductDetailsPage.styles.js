import styled from "@emotion/styled";
export const PageWrapper = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(
      circle at top left,
      rgba(230, 0, 0, 0.08),
      transparent 35%
    ),
    #0a0a0f;
  padding: 60px 40px;
`;

export const ProductContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ImageCard = styled.div`
  width: 500px;
  height: 500px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.45);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(230, 0, 0, 0.2);
  }
    &:hover img {
  transform: scale(1.05);
}
  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
  }
`;

export const DetailsCard = styled.div`
  flex: 1;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.35);

  &:hover {
    border-color: rgba(230, 0, 0, 0.15);
  }
`;

export const Badge = styled.div`
  display: inline-block;
  background: rgba(0, 208, 132, 0.15);
  color: #00d084;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const ProductTitle = styled.h1`
  color: white;
  font-size: 64px;
  letter-spacing: -1px;
  margin-bottom: 15px;
  text-transform: uppercase;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fbbf24;
  font-size: 20px;
  margin-bottom: 24px;

  span {
    color: rgba(255,255,255,0.7);
    font-size: 15px;
  }
`;

export const Price = styled.h2`
  color: #00d084;
  font-size: 52px;
  font-weight: 800;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: rgba(255,255,255,0.7);
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 30px;
`;

export const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-bottom: 35px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 16px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    color: rgba(255,255,255,0.9);
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  div:hover {
    border-color: rgba(230, 0, 0, 0.35);
    background: rgba(255,255,255,0.06);
    transform: translateY(-2px);
  }

  svg {
    color: #e60000;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const AddToCartButton = styled.button`
  padding: 16px 34px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #ff6b00, #ff8500);
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(255, 107, 0, 0.35);
  }
`;

export const BuyNowButton = styled.button`
  padding: 16px 34px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(37, 99, 235, 0.35);
  }
`;

export const WishlistButton = styled.button`
  padding: 16px 24px;
  border-radius: 14px;
  border: 1px solid ${(props) => (props.$isWishlisted ? "var(--color-primary)" : "rgba(255, 255, 255, 0.15)")};
  background: ${(props) => (props.$isWishlisted ? "rgba(230, 0, 0, 0.15)" : "rgba(255, 255, 255, 0.04)")};
  color: ${(props) => (props.$isWishlisted ? "#e60000" : "white")};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--color-primary);
    color: #e60000;
  }
`;


