import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  margin-bottom: 48px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
  }
`;

export const Left = styled.div`
  flex: 1;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;
`;

export const Line = styled.div`
  width: 5px;
  height: 78px;
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    #ff3b3b,
    #c80000
  );

  @media (max-width:768px){
    height:58px;
  }
`;

export const Title = styled.h1`
  margin:0;

  display:flex;
  align-items:center;
  gap:12px;

  color:white;

  font-size:clamp(2rem,4vw,3.8rem);

  font-weight:900;

  letter-spacing:-2px;

  line-height:1;

  span{
    color:var(--color-primary);
    font-size:.9em;
  }
`;

export const Subtitle = styled.p`
  margin:16px 0 18px;

  color:#8f8f8f;

  font-size:clamp(.95rem,1.5vw,1.15rem);

  line-height:1.7;

  max-width:600px;
`;

export const Count = styled.div`
  color:white;

  font-size:18px;

  span{
    color:var(--color-primary);
    font-weight:800;
    margin-right:6px;
  }

  @media(max-width:768px){
    font-size:16px;
  }
`;