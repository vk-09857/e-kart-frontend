import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  margin-top: 24px;
  padding: 48px 24px;
  border: 1px dashed rgba(230, 0, 0, 0.35);
  border-radius: 22px;
  background: linear-gradient(
    180deg,
    rgba(24, 24, 28, 0.95),
    rgba(15, 15, 18, 0.95)
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(230, 0, 0, 0.12);
  border: 1px solid rgba(230, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  color: white;
  margin-top: 20px;
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.5px;
`;

export const Subtitle = styled.p`
  color: #9b9b9b;
  margin-top: 8px;
  font-size: 15px;
`;

export const Button = styled.button`
  margin-top: 24px;
  height: 48px;
  padding: 0 28px;
  border-radius: 12px;
  border: 1px solid rgba(230, 0, 0, 0.5);
  background: rgba(230, 0, 0, 0.1);
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-primary);
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(230, 0, 0, 0.3);
  }
`;