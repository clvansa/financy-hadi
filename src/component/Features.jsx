import React, { useState } from "react";
import styled from "styled-components";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Image1 from "../image/features/a3.jpg";
import Image2 from "../image/features/a4.jpg";
import Image3 from "../image/features/a7.jpg";
import Image4 from "../image/features/a8.jpg";
import Image6 from "../image/features/csm_SAP_Financial_Accounting_16ba910973.jpg";
import Image7 from "../image/features/freeagent-accounting-software.png";

const Features = () => {
  const [translate, setTranslate] = useState(0);
  const items = [
    {
      image: Image1,
      title: "مجال الاستشارات الضريبية",
      desc: "يقدم مكتبنا خدمات الاستشارات الضريبية لعملائنا من الشركات بداية من تجهيز مستندات الفحص الضريبي، وحضور الفحص الضريبي لتوضيح وجهة نظر الشركة وتجنب الخلاف الضريبي منذ بداية الفحص",
      link: "",
    },
    {
      image: Image6,
      title: "مجال الاستشارات المحاسبية",
      desc: "خدمات الاستشارات المحاسبية من خلال إجراء المقابلات المنتظمة مع القطاعات المالية بالشركات والتعرف على المشكلات المحاسبية الناتج عن تلك المشكلات وطرح الحلول المناسبة",
      link: "",
    },
    {
      image: Image3,
      title: "مجال الدورات المستندية ",
      desc: "قام مكتبنا بالمشاركة في تأسيس وإعداد ومراجعة كافة الدورات المستندية للعديد من الشركات في مجالات مختلفة",
      link: "",
    },
    {
      image: Image2,
      title: "مجال تأسيس الكيانات",
      desc: "تقوم المجموعة القانونية بمكتبنا بالعمل على إنهاء عملية إجراءات تأسيس الشركات في اقل فترة زمنية بما تمتلكه من خبرات ، وقد تم اكتساب تلك الخبرات من خلال تأسيس العديد من شركات الأشخاص والشركات المساهمة",
      link: "",
    },
    {
      image: Image4,
      title: "مجال تنظيمات العمل",
      desc: "يقدم مكتبنا العديد من الاستشارات القانونية اللازمة لانتظام العمل في إطار تطبيق قانون العمل وقانون التأمينات الاجتماعية بهدف تجنيب الشركات عقوبات وغرامات مخالفة تلك القوانين",
      link: "",
    },
    {
      image: Image7,
      title: "مجال مراقبة الحسابات",
      desc: "يتميز مكتبنا بأداء عمليات مراجعة الحسابات داخل الشركات الصناعية ذات الكيانات الكبيرة متعددة الاستثمارات في إطار معايير المحاسبة والمراجعة المصرية والقوانين ذات العلاقة",
      link: "",
    },
  ];

  const currentWidth = (items.length - 2) * -220;

  const smallSize = window.innerWidth < 550;

  const width = smallSize ? currentWidth - 230 : currentWidth;

  const prvStep = () => {
    setTranslate((prvState) => (translate > width ? prvState - 230 : 0));
  };
  const nextStep = () => {
    setTranslate((prvState) => translate < 0 && prvState + 230);
  };
  return (
    <Container id="features">
      <Wrapper>
        <Introduction>
          <Title>المزايا والمجالات المحاسبية والضريبة الذي نقدمها لك </Title>
          <Desc>
            يقدم مكتبنا خدمات الاستشارات الضريبية والمحاسبية لعملائنا من الشركات
            حيث يقوم مكتبنا بمتابعة تنفيذ الإجراءات من خلال المقابلات الدورية
            وبما يتناسب مع الأثر المحاسبي والضريبي لتلك المشكلات في ضوء معايير
            المحاسبة المصرية وقوانين ضريبة المبيعات وضريبة الدخل وضريبة الدمغة
            .وقانون الجمارك والقوانين ذات العلاقة
          </Desc>
        </Introduction>
        <CarouselContainer>
          <Items>
            {items.map((item, index) => (
              <Item
                key={index}
                style={{ transform: `translateX(${translate}px)` }}
              >
                <Image src={item.image} />
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDesc>{item.desc}</ItemDesc>
              </Item>
            ))}
          </Items>
          <Controls>
            <Button onClick={nextStep}>
              <NavigateBeforeIcon />
            </Button>
            <Button onClick={prvStep}>
              <NavigateNextIcon />
            </Button>
          </Controls>
        </CarouselContainer>
      </Wrapper>
    </Container>
  );
};

export default Features;

const Container = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    height: auto;
    padding: 30px 0;
  }
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Introduction = styled.div`
  flex: 4;
`;
const CarouselContainer = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    margin: 40px;
  }
`;

const Items = styled.div`
  display: flex;
  width: 450px;
  height: 303px;
  align-items: flex-start;
  overflow: hidden;
  margin: auto;
  transition: all 0.3s;

  @media (max-width: 550px) {
    width: 230px;
  }
`;
const Item = styled.div`
  padding-right: 30px;
  transition: all 0.3s;
`;

const Controls = styled.div`
  padding-top: 20px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  width: 50%;
`;
const Image = styled.img`
  width: 200px;
  height: 110px;
  border-radius: 10px;
`;
const ItemTitle = styled.div`
  color: #084f8a;
  font-size: 1.1rem;
  font-weight: bold;
  padding-left: 8px;
  text-align: right;

`;
const ItemDesc = styled.div`
  color: gray;
  font-size: 14px;
  padding: 4px 8px;
  text-align: right;
`;

const Title = styled.h1`
  color: #084f8a;
  text-align: right;

`;
const Desc = styled.p`
  padding-top: 20px;
  color: gray;
  text-align: right;
`;

const Button = styled.button`
  border-radius: 50%;
  color: white;
  background-color: #0c81ff;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #084f8a;
  }
`;
