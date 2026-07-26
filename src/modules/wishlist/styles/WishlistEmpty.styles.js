import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 80px 20px;
  border: 1px solid rgba(230, 0, 0, 0.25);
  border-radius: 18px;
  background: rgba(255,255,255,0.02);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.div`
  font-size: 60px;
  color: #ff2020;
`;

export const Title = styled.h2`
  color: white;
  margin-top: 18px;
  font-size: 36px;
  font-weight: 800;
`;

export const Subtitle = styled.p`
  color: #8f8f8f;
  margin-top: 10px;
  font-size: 18px;
`;

export const Button = styled.button`
  margin-top: 30px;
  height: 52px;
  padding: 0 32px;
  border-radius: 12px;
  border: none;
  background: #ff2020;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    background: #ff3434;
  }
`;