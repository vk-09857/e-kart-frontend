import styled from "@emotion/styled";

export const Card = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 260px 1fr 170px auto 42px;
  align-items: center;
  gap: 32px;

  padding: 24px;

  margin-bottom: 24px;

  border-radius: 22px;

  background: linear-gradient(
    180deg,
    rgba(24, 24, 28, 0.95),
    rgba(15, 15, 18, 0.95)
  );

  border: 1px solid rgba(255,255,255,.06);

  transition: .35s;

  &:hover{
      transform:translateY(-5px);

      border-color:rgba(230,0,0,.25);

      box-shadow:
      0 15px 45px rgba(0,0,0,.35);
  }

  @media(max-width:1200px){
      grid-template-columns: 180px 1fr;
      gap: 24px;
  }

  @media(max-width:768px){
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 20px;
      padding: 20px;
  }
`;

export const ImageWrapper = styled.div`
  width:220px;
  height:220px;

  border-radius:18px;
  overflow:hidden;

  background:#151515;

  flex-shrink:0;

  img{
      width:100%;
      height:100%;
      object-fit:cover;
      transition:.4s;
  }

  @media(max-width:768px){
      width:100%;
      height:260px;
  }
`;

export const Content = styled.div`
  display:flex;
  flex-direction:column;
`;

export const Category = styled.div`
  display:inline-flex;
  align-items:center;

  width:max-content;

  padding:6px 14px;

  border-radius:999px;

  background:rgba(230,0,0,.12);

  color:var(--color-primary);

  font-size:12px;

  font-weight:700;

  text-transform:uppercase;

  letter-spacing:.6px;
`;

export const Title = styled.h2`
  margin:18px 0 14px;

  color:white;

  font-size:34px;

  line-height:1.25;

  @media(max-width:768px){
      font-size:28px;
  }

  @media(max-width:480px){
      font-size:24px;
  }
`;

export const Description = styled.p`
  color:#9b9b9b;

  line-height:1.7;

  margin-bottom:22px;

  font-size:15px;
`;

export const Price = styled.div`
  color:white;

  font-size:34px;

  font-weight:800;

  @media(max-width:768px){
      font-size:28px;
  }
`;

export const StockSection = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:26px;

  @media(max-width:1200px){
      justify-content:flex-start;
  }
`;

export const Divider = styled.div`
  width:1px;
  height:90px;

  background:rgba(255,255,255,.08);

  @media(max-width:1200px){
      display:none;
  }
`;

export const Stock = styled.div`
  display:flex;
  align-items:center;
  gap:10px;

  color:#49e27d;

  font-weight:700;
`;

export const Dot = styled.div`
  width:10px;
  height:10px;

  border-radius:50%;

  background:#49e27d;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: flex-end;

  min-width: 390px;

  @media (max-width: 1200px) {
    min-width: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const MoveButton = styled.button`
  width:230px;
  height:56px;

  border:none;
  border-radius:14px;

  background:var(--color-primary);
  color:#fff;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;

  font-size:16px;
  font-weight:700;

  cursor:pointer;

  transition:.3s;

  &:hover{
      filter:brightness(1.08);
  }

  @media(max-width:768px){
      width:100%;
  }
`;

export const RemoveButton = styled.button`
  width:160px;
  height:56px;

  flex-shrink: 0;
  border-radius:14px;

  border:1px solid rgba(255,255,255,.08);

  background:transparent;

  color:#fff;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;

  font-size:16px;
  font-weight:600;

  cursor:pointer;

  transition:.3s;

  &:hover{
      border-color:var(--color-primary);
      color:var(--color-primary);
  }

  @media(max-width:768px){
      width:100%;
  }
`;

export const Arrow = styled.div`
  width:40px;

  display:flex;
  align-items:center;
  justify-content:center;

  color:#7d7d7d;
`;