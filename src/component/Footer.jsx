import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MapIcon from "@material-ui/icons/Map";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import EmailIcon from "@material-ui/icons/Email";
import LogoC from "./Logo";
import { miniData } from "../data/data";
import { Link, useLocation } from "react-router-dom";

const Footer = ({ HomeRef, AboutRef, FeaturesRef, ServicesRef }) => {
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

  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoBox>
            <LogoC />
            <LogoTitle>All Busniess Services at one station</LogoTitle>
          </LogoBox>
          <Desc>
            شركة للاستشارات المالية والخدمات المحاسبية والتدريبية وفق
            استراتيجيات توافق احتياجاتكم المالية بالتعاون مع مجموعة مميزة من
            الخبراء.
          </Desc>
          <SocialMedia>
            <a
              href="https://www.facebook.com/hadiaccounting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialMediaIcon>
                <FacebookIcon />
              </SocialMediaIcon>
            </a>
            <SocialMediaIcon>
              <InstagramIcon />
            </SocialMediaIcon>
            <a
              href="https://api.whatsapp.com/send?phone=905537977391&text=Busniess+Station+مرحبا+شركة+محطة+الاعمال+&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialMediaIcon>
                <WhatsAppIcon />
              </SocialMediaIcon>
            </a>
          </SocialMedia>
        </Left>
        <CenterOne>
          <MenuBox>
            <MenuTitle>الخدمات</MenuTitle>
            <MenuLists>
              {miniData.map((item, index) => (
                <Link to={item.link} key={`footerServices${index}`}>
                  <MenuItem>{item.title}</MenuItem>
                </Link>
              ))}
            </MenuLists>
          </MenuBox>
        </CenterOne>
        <CenterTwo>
          <MenuBox>
            <MenuTitle>الراوبط</MenuTitle>
            <MenuLists>
              <MenuItem onClick={() => handleDirect(HomeRef, "")}>
                الرئيسية
              </MenuItem>

              <MenuItem onClick={() => handleDirect(FeaturesRef, "features")}>
                المميزات
              </MenuItem>

              <MenuItem onClick={() => handleDirect(ServicesRef, "services")}>
                الخدمات
              </MenuItem>

              <MenuItem onClick={() => handleDirect(AboutRef, "about")}>
                من نحن{" "}
              </MenuItem>
              <Link to="/contact">
                <MenuItem>اتصل بنا</MenuItem>
              </Link>
            </MenuLists>
          </MenuBox>
        </CenterTwo>
        <Right>
          <MenuTitle>اتصل بنا </MenuTitle>
          <ContactItem>
            <MapIcon />
            <ContactText>إسطنبول - تركيا</ContactText>
          </ContactItem>
          <a href="tel:+905537977391">
            <ContactItem>
              <PhoneInTalkIcon />
              <ContactText>+90-553-797-7391</ContactText>
            </ContactItem>
          </a>
          <a href="mailto:gm@hadiaccounting.com">
            <ContactItem>
              <EmailIcon />
              <ContactText>gm@hadiaccounting.com</ContactText>
            </ContactItem>
          </a>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #06152c;

  color: white;
  border-top: 10px solid #020d1f;
`;
const Wrapper = styled.div`
  padding: 50px 0;
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin: auto;

  @media (max-width: 765px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 0.3;
`;

const CenterOne = styled.div`
  flex: 0.1;
  @media (max-width: 765px) {
    margin: 20px 0;
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
`;
const CenterTwo = styled.div`
  flex: 0.1;
  @media (max-width: 765px) {
    margin: 20px 0;
    padding: 20px 0;
    margin-top: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const Right = styled.div`
  flex: 0.3;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;
// const LogoImage = styled.img`
//   width: 80px;
// `;
const LogoTitle = styled.div`
  padding: 5px;
  max-width: 200px;
`;

const Desc = styled.div`
  padding-top: 20px;
`;
const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding-top: 20px;
`;

const SocialMediaIcon = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-left: 1px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const MenuBox = styled.div``;
const MenuTitle = styled.div`
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 1.1rem;
`;

const MenuLists = styled.ul`
  padding-left: 20px;
  cursor: pointer;
`;
const MenuItem = styled.li`
  padding: 8px 0;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ContactText = styled.p`
  padding-left: 10px;
`;

// const CopyRight = styled.div`
//   width: 100%;
//   font-size: small;
// `;
