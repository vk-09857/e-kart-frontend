import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ModalBox = styled.div`
  width: 100%;
  max-width: 440px;
  background: #141418;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 480px) {
    padding: 20px 16px;
  }
`;

export const IconContainer = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(230, 0, 0, 0.15);
  border: 1px solid rgba(230, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Message = styled.p`
  color: #9b9b9b;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 28px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

export const CancelButton = styled.button`
  flex: 1;
  height: 48px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ConfirmButton = styled.button`
  flex: 1;
  height: 48px;
  border-radius: 12px;
  border: none;
  background: #e60000;
  color: white;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ff1a1a;
    box-shadow: 0 6px 20px rgba(230, 0, 0, 0.4);
  }
`;
