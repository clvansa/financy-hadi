import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Bar from "./Bar";
import Image1 from "../image/1.png";
import Image2 from "../image/2.jpg";
import Image3 from "../image/3.jpg";

const About = () => {
  const [index, setIndex] = useState({
    img1: 2,
    img2: 0,
    img3: 0,
  });
  const [active, setActive] = useState(0);

  const onChange = (id) => {
    setActive(Number(id));
  };

  const OnAnimationEnd = (id) => {
    if (id === 1) {
      setIndex({
        img1: 2,
        img2: index.img2 > 0 ? index.img2 - 1 : 0,
        img3: index.img3 > 0 ? index.img3 - 1 : 0,
      });
    } else if (id === 2) {
      setIndex({
        img1: index.img1 > 0 ? index.img1 - 1 : 0,
        img2: 2,
        img3: index.img3 > 0 ? index.img3 - 1 : 0,
      });
    } else if (id === 3) {
      setIndex({
        img1: index.img1 > 0 ? index.img1 - 1 : 0,
        img2: index.img2 > 0 ? index.img2 - 1 : 0,
        img3: 2,
      });
    }
  };
  return (
    <Container id="about">
      <Top>
        <Title>لماذا نحن ؟</Title>
      </Top>
      <Bar active={active} onChange={onChange} />
      <Bottom>
        <Left>
          <ImageBox>
            <Image
              active={active === 1}
              index={index.img1}
              onAnimationEnd={() => OnAnimationEnd(1)}
              src={Image3}
            />
            <Image
              active={active === 2}
              index={index.img2}
              onAnimationEnd={() => OnAnimationEnd(2)}
              src={Image2}
            />
            <Image
              active={active === 3}
              index={index.img3}
              onAnimationEnd={() => OnAnimationEnd(3)}
              src={Image1}
            />
          </ImageBox>
        </Left>
        <Right>
          {active === 1 || active === 0 ? (
            <Desc>
              شركة للاستشارات المالية والخدمات المحاسبية والتدريبية وفق
              استراتيجيات توافق احتياجاتكم المالية, بالتعاون مع مجموعة مميزة من
              الخبراء .
            </Desc>
          ) : active === 2 ? (
            <Desc>
              يمتلك مكتبنا فريق عمل مميز لديه خبرات كبيرة في مجال مراجعة حسابات
              الشركات الفردية وشركات الأشخاص والشركات المساهمة العاملة في كافة
              المجالات التجارية
            </Desc>
          ) : (
            <Desc>
              محاسب مالي تقدم لك مجموعة متنوعة من الخدمات الاستشارية الشاملة
              لكافة مواردكم المالية, والاستشارات الاستثمارية وخدمات المراجعية
              وفق استراتيجيات محددة ودقيقة استنادا إلى احتياجاتكم المالية
              المختلفة. نقدم الحلول المالية نحافظ على خصوصية معلومات شركتكم
            </Desc>
          )}
        </Right>
      </Bottom>
    </Container>
  );
};

export default About;

const Container = styled.div`
  min-height: 100vh;
  padding-top: 150px;
  width: 70%;
  margin: auto;
`;
const Top = styled.div``;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Left = styled.div``;
const Right = styled.div``;
const Title = styled.div`
  /* color: #0A2F75; */
  color: #084f8a;
  font-size: 2rem;
  text-align: center;
`;

const ImageBox = styled.div`
  width: 500px;
  height: 450px;
  position: relative;
  border: 15px solid #0a2f75;

  @media (max-width: 1200px) {
    width: 350px;
    height: 350px;
    margin: auto;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 300px;
    margin: auto;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  position: absolute;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.8);

  &:nth-child(1) {
    top: 50px;
    right: 20px;
    animation: ${(props) => props.active && Card} 2s normal forwards ease-in-out;
    z-index: ${(props) => props.index && props.index};
  }
  &:nth-child(2) {
    top: 25px;
    right: 35px;
    animation-iteration-count: 1;

    animation: ${(props) => props.active && Card} 2s normal forwards ease-in-out;
    z-index: ${(props) => props.index && props.index};
  }
  &:nth-child(3) {
    top: 75px;
    right: 50px;
    animation: ${(props) => props.active && Card} 2s normal forwards ease-in-out;
    z-index: ${(props) => props.index && props.index};
  }
`;
const Desc = styled.p`
  padding: 20px;
  width: 500px;
  text-align: right;
  border: 10px solid rgba(0, 0, 0, 0.1);
  box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.1),
    15px 15px 15px rgba(0, 0, 0, 0.1),
    -10px -10px 10px rgba(255, 255, 255, 0.2) inset,
    15px 15px 15px rgba(0, 0, 0, 0.1) inset;
  font-size: 1.3rem;

  @media (max-width: 1200px) {
    width: 350px;
    margin: auto;
  }
  @media (max-width: 765px) {
    width: 350px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;

const Card = keyframes`

    0%{
        transform: translate(-00px,-0);
       
    }
    50%{
        transform: translate(-00px,-400px);       
    }
    100%{
        transform: translate(-00px,00px);
        z-index:4       
    }
 
`;
