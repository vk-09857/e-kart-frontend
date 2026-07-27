import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  margin-top: 24px;
  padding: 56px 24px;
  border: 1px solid rgba(230, 0, 0, 0.3);
  border-radius: 22px;
  background: rgba(24, 24, 28, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h3`
  color: #ff4d4d;
  font-size: 22px;
  font-weight: 700;
  margin-top: 16px;
`;

export const Message = styled.p`
  color: #9b9b9b;
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const RetryButton = styled.button`
  height: 44px;
  padding: 0 24px;
  border-radius: 12px;
  border: none;
  background: var(--color-primary);
  color: white;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(230, 0, 0, 0.35);
  }
`;
