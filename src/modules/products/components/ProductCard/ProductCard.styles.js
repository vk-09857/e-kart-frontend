import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const Card = styled.div`
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  backdrop-filter: blur(10px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(230, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
    border-color: rgba(230, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }

    img {
      transform: scale(1.08);
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    height: 220px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(to top, rgba(15, 15, 20, 1), transparent);
    pointer-events: none;
  }
`;

export const WishlistButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 42px;
  height: 42px;

  border: none;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(20, 20, 25, 0.75);
  backdrop-filter: blur(12px);

  cursor: pointer;

  z-index: 5;

  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.08);
    background: rgba(35, 35, 40, 0.9);
  }

  svg {
    transition: all 0.25s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    padding: var(--spacing-xl);
  }
`;

export const Category = styled.span`
  font-size: 9px;
  text-transform: uppercase;
  color: var(--color-primary);
  font-weight: var(--font-weight-heavy);
  letter-spacing: 1.5px;
  margin-bottom: var(--spacing-sm);
  display: inline-block;
  padding: 3px 8px;
  background: rgba(230, 0, 0, 0.1);
  border: 1px solid rgba(230, 0, 0, 0.15);
  border-radius: 4px;
  align-self: flex-start;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: var(--font-weight-bold);
  color: var(--color-on-dark);
  margin: 0 0 var(--spacing-xs);
  line-height: 1.4;
  letter-spacing: -0.2px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.45);
  margin: 0 0 var(--spacing-lg);
  flex-grow: 1;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 13px;
    margin: 0 0 var(--spacing-xl);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Price = styled.div`
  font-size: 16px;
  font-weight: var(--font-weight-heavy);
  color: var(--color-on-dark);
  letter-spacing: -0.5px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  background: linear-gradient(135deg, var(--color-primary), #ff1a1a);
  color: var(--color-on-primary);
  border: none;
  padding: 6px 14px;
  border-radius: var(--rounded-sm);
  font-size: 11px;
  font-weight: var(--font-weight-bold);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(230, 0, 0, 0.25);
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 12px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(230, 0, 0, 0.4);
    background: linear-gradient(135deg, #ff1a1a, var(--color-primary));
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(230, 0, 0, 0.3);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.4);
    box-shadow: none;
    cursor: default;
    transform: none;
  }
`;

/* Skeleton loading */
export const SkeletonCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
`;

export const SkeletonImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;

  @media (min-width: 768px) {
    height: 220px;
  }
`;

export const SkeletonContent = styled.div`
  padding: var(--spacing-xl);
`;

export const SkeletonLine = styled.div`
  height: ${(props) => props.$height || "14px"};
  width: ${(props) => props.$width || "100%"};
  background: linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
  margin-bottom: ${(props) => props.$mb || "12px"};
`;
