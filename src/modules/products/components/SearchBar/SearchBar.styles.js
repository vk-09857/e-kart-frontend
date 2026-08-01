import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 16px 10px 40px;
  background-color: rgba(255, 255, 255, 0.04);
  color: var(--color-on-dark);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--rounded-pill-lg);
  font-size: 14px;
  font-family: var(--font-family-base);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);

  @media (max-width: 480px) {
    padding: 8px 12px 8px 34px;
    font-size: 12px;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(230, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-mute);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;
