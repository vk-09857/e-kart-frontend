import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  background-color: #16191d;
  padding-top: 20px;
  width: 100%;
  position: relative;
  z-index: 10;
`;

export const FooterCard = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  background-color: #181a1f;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: none;
  border-radius: 24px 24px 0 0;
  padding: 48px 48px 30px 48px;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: 32px 20px 24px 20px;
    border-radius: 20px 20px 0 0;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.1fr;
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .brand-logo {
    font-size: 24px;
    font-weight: 900;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #ffffff;
    span {
      color: #ff1f1f;
    }
  }

  .brand-desc {
    color: #8d8d94;
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
  }

  .column-title {
    color: #ffffff;
    font-size: 15px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li, a {
    color: #8d8d94;
    font-size: 14px;
    text-decoration: none;
    transition: color 200ms ease, transform 200ms ease;
    display: inline-block;

    &:hover {
      color: #ff1f1f;
      transform: translateX(2px);
    }
  }
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
`;

export const SocialIconButton = styled.a`
  width: 40px !important;
  height: 40px !important;
  border-radius: 50% !important;
  background-color: #1d2025;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #8d8d94;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-decoration: none !important;
  transition: all 200ms ease;
  flex-shrink: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;

  svg {
    width: 18px !important;
    height: 18px !important;
    min-width: 18px !important;
    min-height: 18px !important;
    max-width: 18px !important;
    max-height: 18px !important;
    display: block !important;
    margin: 0 auto !important;
    padding: 0 !important;
    flex-shrink: 0 !important;
    vertical-align: middle !important;
  }

  &:hover {
    background-color: #ff1f1f;
    color: #ffffff;
    border-color: #ff1f1f;
    transform: translateY(-2px);
  }
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #8d8d94;
    font-size: 14px;

    svg {
      color: #ff1f1f;
      flex-shrink: 0;
    }
  }
`;

export const BottomDivider = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  .copyright {
    color: #8d8d94;
    font-size: 13px;
    font-weight: 500;
  }
`;