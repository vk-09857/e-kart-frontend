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

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #0a0a0f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const AuthCard = styled.div`
  width: 100%;
  max-width: 420px;
  background: #14141f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 36px 28px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  animation: ${fadeInUp} 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 24px;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    color: #e60000;
    transform: translateX(-4px);
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 28px;
  line-height: 1.5;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.04);
  color: #ffffff;
  font-size: 14px;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }

  &:focus {
    outline: none;
    border-color: #e60000;
    box-shadow: 0 0 0 3px rgba(230, 0, 0, 0.15);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px 24px;
  background: linear-gradient(135deg, #e60000, #ff1a1a);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(230, 0, 0, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const AlertMessage = styled.div`
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 13px;
  margin-bottom: 20px;
  line-height: 1.4;
  background: ${props => props.isError ? "rgba(230, 0, 0, 0.15)" : "rgba(0, 200, 83, 0.15)"};
  color: ${props => props.isError ? "#ff4d4d" : "#00e676"};
  border: 1px solid ${props => props.isError ? "rgba(230, 0, 0, 0.3)" : "rgba(0, 200, 83, 0.3)"};
`;
