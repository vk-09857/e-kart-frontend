import styled from "@emotion/styled";

export const Button = styled.button`
  height: 58px;
  padding: 0 28px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 16px;
  border: 1px solid rgba(255, 59, 59, 0.35);

  background: rgba(255, 59, 59, 0.08);
  color: white;

  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.5px;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 59, 59, 0.16);
    border-color: var(--color-primary);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 52px;
    font-size: 14px;
  }
`;