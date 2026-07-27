import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.6;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const SkeletonCard = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 32px;
  animation: ${pulse} 1.5s infinite ease-in-out;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SkeletonImage = styled.div`
  width: 220px;
  height: 170px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

export const SkeletonContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const SkeletonBar = styled.div`
  height: ${(props) => props.height || "20px"};
  width: ${(props) => props.width || "100%"};
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
`;
