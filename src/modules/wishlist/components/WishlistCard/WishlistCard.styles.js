import styled from "@emotion/styled";

export const Card = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 260px 1fr 320px;
  gap: 40px;
  align-items: center;

  padding: 28px;

  margin-bottom: 24px;

  border-radius: 22px;

  background: linear-gradient(
    180deg,
    rgba(24,24,28,.96),
    rgba(16,16,20,.96)
  );

  border: 1px solid rgba(255,255,255,.06);

  transition: .3s;

  &:hover{
    transform: translateY(-3px);
    border-color: rgba(230,0,0,.25);
    box-shadow: 0 18px 45px rgba(0,0,0,.35);
  }
`;

export const ImageSection = styled.div`
  width: 260px;
  height: 170px;

  border-radius: 18px;

  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: .35s;

  ${Card}:hover &{
    transform: scale(1.05);
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div`
  width: fit-content;

  padding: 6px 14px;

  border-radius: 999px;

  background: rgba(230,0,0,.12);

  color: var(--color-primary);

  font-size: 12px;
  font-weight: 700;

  text-transform: uppercase;
`;

export const Title = styled.h2`
  margin: 18px 0 12px;

  color: white;

  font-size: 32px;
  font-weight: 700;
`;

export const Description = styled.p`
  margin-bottom: 18px;

  color: #9b9b9b;

  line-height: 1.6;
`;

export const Price = styled.div`
  color: white;

  font-size: 34px;
  font-weight: 800;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  gap: 20px;
`;

export const StockSection = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  color: #43d46b;

  font-weight: 700;
`;

export const StockDot = styled.div`
  width: 10px;
  height: 10px;

  border-radius: 50%;

  background: #43d46b;
`;

export const ActionSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 14px;
`;

export const MoveButton = styled.button`
  width: 100%;
  height: 56px;

  border: none;

  border-radius: 14px;

  background: var(--color-primary);

  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;

  font-size: 15px;
  font-weight: 700;

  cursor: pointer;

  transition: .3s;

  &:hover{
    transform: translateY(-2px);
  }
`;

export const RemoveButton = styled.button`
  width: 100%;
  height: 56px;

  border-radius: 14px;

  border: 1px solid rgba(255,255,255,.08);

  background: transparent;

  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition: .3s;

  &:hover{
    border-color: var(--color-primary);
  }
`;

export const ArrowSection = styled.div`
  display: flex;
  justify-content: flex-end;

  color: #8f8f8f;

  cursor: pointer;
`;