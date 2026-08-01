import styled from "@emotion/styled";

export const Page = styled.div`
  width: 100%;
  max-width: 1450px;
  margin: auto;
  padding: 40px 60px;

  @media (max-width: 1024px) {
    padding: 32px 32px;
  }

  @media (max-width: 640px) {
    padding: 20px 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 45px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 52px;
  font-weight: 900;
  margin: 0;

  display: flex;
  align-items: center;
  gap: 12px;

  span{
    color:#ff2020;
    font-size:42px;
  }

  &::before{
    content:"";
    width:4px;
    height:58px;
    background:#ff2020;
    display:block;
    margin-right:20px;
  }
`;

export const Subtitle = styled.p`
  color:#9d9d9d;
  font-size:24px;
  margin-top:18px;
`;

export const Count = styled.p`
  margin-top:30px;

  color:white;

  font-size:28px;

  span{
    color:#ff2020;
    font-weight:700;
  }
`;

export const ClearButton = styled.button`
  height:58px;

  padding:0 30px;

  border-radius:14px;

  border:1px solid #ff2020;

  background:transparent;

  color:white;

  font-size:18px;

  font-weight:700;

  cursor:pointer;

  transition:.25s;

  &:hover{

    background:#ff2020;

  }
`;