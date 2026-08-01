import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(15px, -10px); }
  66% { transform: translate(-10px, 8px); }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #0a0a0f;
  overflow-x: hidden;
`;

export const HeroBand = styled.div`
  background-color: #0a0a0f;
  background-image: linear-gradient(rgba(10, 10, 15, 0.3), rgba(10, 10, 15, 0.85)), url('/images/hero.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  padding: var(--spacing-3xl);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 70%, rgba(230, 0, 0, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(120, 0, 255, 0.05) 0%, transparent 50%);
    animation: ${float} 15s ease-in-out infinite;
  }
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-family-base);
  font-size: var(--font-size-display-lg);
  font-weight: var(--font-weight-heavy);
  line-height: var(--line-height-display-lg);
  letter-spacing: -1px;
  text-transform: uppercase;
  color: var(--color-on-dark);
  margin: 0;
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;

  @media (min-width: 992px) {
    font-size: var(--font-size-display-xl);
    line-height: var(--line-height-display-xl);
  }
`;

export const ContentBand = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl) var(--spacing-xl);
  background-color: #0a0a0f;
  position: relative;

  @media (max-width: 480px) {
    padding: var(--spacing-2xl) var(--spacing-md);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  @media (min-width: 992px) {
    height: 100vh;
    padding: var(--spacing-3xl);
  }
`;

export const AuthCard = styled.div`
  width: 100%;
  max-width: 420px;
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 0.1s;
  opacity: 0;
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  font-size: 13px;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-2xl);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    color: var(--color-primary);
    transform: translateX(-4px);
  }
`;

export const Speechmark = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--color-primary), #ff1a1a);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-2xl);
  box-shadow: 0 8px 24px rgba(230, 0, 0, 0.25);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(5deg);
  }

  svg {
    color: var(--color-on-primary);
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`;

export const Title = styled.h2`
  font-family: var(--font-family-base);
  font-size: 28px;
  font-weight: var(--font-weight-heavy);
  line-height: 1.2;
  color: var(--color-on-dark);
  margin-bottom: var(--spacing-xs);
  letter-spacing: -0.5px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: var(--spacing-3xl);
  line-height: 1.5;
`;

export const FormGroup = styled.div`
  margin-bottom: var(--spacing-xl);
  position: relative;
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: var(--spacing-sm);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px var(--spacing-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.04);
  color: var(--color-on-dark);
  font-size: var(--font-size-body-sm);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(230, 0, 0, 0.15);
    background-color: rgba(255, 255, 255, 0.06);
  }

  &:hover:not(:focus) {
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: 12px;
  color: #ff6b6b;
  margin-top: var(--spacing-xs);
  font-weight: var(--font-weight-bold);
  animation: ${fadeInUp} 0.3s ease forwards;
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px var(--spacing-2xl);
  background: linear-gradient(135deg, var(--color-primary), #ff1a1a);
  color: var(--color-on-primary);
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: var(--font-weight-bold);
  cursor: pointer;
  margin-top: var(--spacing-lg);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(230, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const LinkText = styled.p`
  margin-top: var(--spacing-3xl);
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  
  a {
    color: var(--color-on-dark);
    text-decoration: none;
    font-weight: var(--font-weight-bold);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.2s ease;
    padding-bottom: 2px;
    
    &:hover {
      color: var(--color-primary);
      border-bottom-color: var(--color-primary);
    }
  }
`;
