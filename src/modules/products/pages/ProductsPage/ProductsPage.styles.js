import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #0a0a0f;
  padding-bottom: var(--spacing-3xl);
  padding-top: 40px;
  overflow-x: hidden;
  max-width: 100vw;
  position: relative;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 15% 50%, rgba(230, 0, 0, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 85% 30%, rgba(120, 0, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const HeaderSection = styled.div`
  padding: 20px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: var(--spacing-3xl);
  animation: ${fadeInUp} 0.6s ease forwards;
`;

export const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  font-weight: var(--font-weight-heavy);
  color: var(--color-on-dark);
  margin: 0;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  border-left: 3px solid var(--color-primary);
  padding-left: 16px;
  word-break: break-word;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  margin: var(--spacing-sm) 0 0;
  padding-left: 19px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    gap: var(--spacing-2xl);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xl);
  margin-top: 60px;
  padding-top: var(--spacing-2xl);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

export const PageInfo = styled.span`
  font-size: 14px;
  font-weight: var(--font-weight-bold);
  color: rgba(255, 255, 255, 0.6);
  min-width: 60px;
  text-align: center;
  letter-spacing: 0.5px;
`;

export const PaginationButton = styled.button`
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-on-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover:not(:disabled) {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-on-primary);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(230, 0, 0, 0.25);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: none;
  }

  &:disabled {
    border-color: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.2);
    cursor: not-allowed;
    background: transparent;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  margin-top: var(--spacing-xl);
  backdrop-filter: blur(8px);
`;
