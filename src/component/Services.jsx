import React from "react";
import styled from "styled-components";
import Accounting from "../image/icons/account.png";
import Legal from "../image/icons/legal-document.png";
import Consultation from "../image/icons/consultation.png";
import SearchColor from "../image/icons/searchColor.png";
import Establishment from "../image/icons/company.png";
import Global from "../image/global.png";

const Services = () => {
  const windowsSize = window.innerWidth <= 1440 ? "300px" : "350px";

  const items = [
    {
      image: Accounting,
      title: "المحاسبة",
      desc: "اعداد القوائم المالية والتقارير المحاسبية الشهرية",
      link: "/service/accounting",
    },
    {
      image: Establishment,
      title: "خدمات الـتأسيس",
      desc: "أنشاء النظام المحاسبي للشركة",
      link: "/service/establishment",
    },
    {
      image: Consultation,
      title: "الاستشارات",
      desc: "اعداد دراسة الجدوى الاقتصادية للمنشأة بالتعاون مع فريق مختص",
      link: "/service/consultation",
    },
    {
      image: SearchColor,
      title: "التدقيق",
      desc: "تدقيق البيانات المالية والتأكد من صحتها",
      link: "/service/audit",
    },
    {
      image: Legal,
      title: "خدمات القانونية",
      desc: "تأسيس الشركات (شخصية،محدودة المسؤولية،مساهمة مغفلة)",
      link: "/service/legal",
    },
    // {
    //   image: Ausbildung,
    //   title: "التدريب",
    //   desc: "تقديم خدمة التدريب في المجال المالي",
    //   link: "/service/training",
    // },
  ];
  return (
    <Container global={Global} id="services">
      <Wrapper>
        <Items>
          <Title width={windowsSize}>الخـدمـات الذي نقدمها لك </Title>
          {items.map((item, index) => (
            <Item key={index} width={windowsSize}>
              <Image src={item.image} />
              <ItemTitle>{item.title}</ItemTitle>
              <Desc>
                {item.desc}
                <a href={item.link}>قراءة المزيد ... </a>
              </Desc>
            </Item>
          ))}
        </Items>
      </Wrapper>
      <BackgoundImage src={Global} />
    </Container>
  );
};

export default Services;

const Container = styled.div`
  background-color: #08254f;
  width: 100%;
  /* height: 400px; */
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  direction: rtl;
`;
const Wrapper = styled.div`
  width: 70%;
  padding: 40px 0;
  z-index: 1;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 30px; */
  flex-wrap: wrap;
`;

const Item = styled.div`
  border: solid black;
  border-width: 0px 1px 1px;
  border-color: rgba(255, 255, 255, 0.4);
  position: relative;
  width: ${(props) => props.width};
  height: 150px;
  color: #ffffff;
  padding: 40px 20px;
  margin: 20px 0;

  ::before,
  ::after {
    position: absolute;
    background: rgba(255, 255, 255, 0.4);
    content: "";
    height: 1px;
    width: 5%;
    top: 0;
    left: 0;
  }

  ::after {
    left: auto;
    right: 0;
    width: 75%;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const Title = styled.h1`
  width: ${(props) => props.width};
  color: #ffffff;
`;

const Image = styled.img`
  width: 50px;
  position: absolute;
  top: -25px;
  left: 30px;
`;
const ItemTitle = styled.h1`
  font-size: 1rem;
  font-weight: bold;
`;
const Desc = styled.p`
  font-size: 15px;
  > a {
    padding: 10px;
    color: white;
    font-weight: bold;
  }
`;

const BackgoundImage = styled.img`
  position: absolute;
  width: 300px;
  bottom: -75px;
  right: -70px;
  z-index: 0;
  pointer-events: none;
`;
