import React from "react";
import styled from "styled-components";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LogoC from "./Logo";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ color, HomeRef, AboutRef, FeaturesRef, ServicesRef }) => {
  const location = useLocation();

  const handleDirect = (ref, link) => {
    if (location.pathname === "/") {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      window.location.href = `/#${link}`;
    }
  };

  const smallSize = window.innerWidth < 768;

  return (
    <Container color={color}>
      <Wrapper>
        <Top>
          <LogoBox>
            <Link to="/">
              <LogoC color={color} />
            </Link>
          </LogoBox>
          <InfoItems>
            <a href="tel:+905537977391">
              <InfoItem>
                <PhoneInTalkOutlinedIcon
                  fontSize={smallSize ? "small" : "large"}
                />
                <InfoText>
                  <Title>+905537977391</Title>
                  <Subtitle>اتصل بنا</Subtitle>
                </InfoText>
              </InfoItem>
            </a>
            <a href="mailto:gm@hadiaccounting.com">
              <InfoItem>
                <EmailOutlinedIcon fontSize={smallSize ? "small" : "large"} />
                <InfoText>
                  <Title>gm@hadiaccounting.com</Title>
                  <Subtitle>البريد الالكتروني</Subtitle>
                </InfoText>
              </InfoItem>
            </a>
          </InfoItems>
        </Top>
        <Hr />
        <Bottom>
          <Menu>
            <CustomLink href="/">
              <MenuList>الرئيسية</MenuList>
            </CustomLink>

            <MenuList onClick={() => handleDirect(FeaturesRef, "features")}>
              المميزات
            </MenuList>
            <MenuList onClick={() => handleDirect(ServicesRef, "services")}>
              الخدمات
            </MenuList>
            <MenuList onClick={() => handleDirect(AboutRef, "about")}>
              من نحن
            </MenuList>
            <Link to="/contact">
              <MenuList>اتصل بنا</MenuList>
            </Link>
          </Menu>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  /* position: sticky; */
  width: 70%;
  margin: auto;
  top: 0px;
  left: 0px;
  color: ${(props) => (props.color === "light" ? "black" : "white")};

  @media (max-width: 765px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 5px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Bottom = styled.div``;
const LogoBox = styled.div``;
// const Logo = styled.img`
//   width: 100%;
//   height: 100px;
// `;
const InfoItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 765px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const InfoItem = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InfoText = styled.div`
  padding-left: 10px;
`;
const Title = styled.h4`
  @media (max-width: 765px) {
    font-size: 13px;
  }
`;
const Subtitle = styled.p`
  font-size: 14px;
  @media (max-width: 765px) {
    font-size: 12px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  direction: rtl;
`;
const MenuList = styled.li`
  font-size: 20px;
  cursor: pointer;
  @media (max-width: 765px) {
    font-size: 13px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Hr = styled.hr`
  border-color: rgba(255, 255, 255, 0.2);
  margin: 10px 0;
`;

const CustomLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
