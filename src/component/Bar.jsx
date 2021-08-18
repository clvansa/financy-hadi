import React from "react";
import styled from "styled-components";

const Bar = ({ active, onChange }) => {
  return (
    <div>
      <Continer>
        <Item>
          <Label htmlFor="1" active={active === 1}>
            عن الشركة
          </Label>
          <Radio
            type="radio"
            value={1}
            id="1"
            name="3"
            onChange={(e) => onChange(e.target.value)}
            checked={active === 1}
          />
        </Item>
        <Line />
        <Item>
          <Label htmlFor="2" active={active === 2}>
            فريق العمل
          </Label>
          <Radio
            type="radio"
            value={2}
            id="2"
            name="3"
            onChange={(e) => onChange(e.target.value)}
            checked={active === 2}
          />
        </Item>
        <Line />
        <Item>
          <Label htmlFor="3" active={active === 3}>
            عن الخدمات
          </Label>
          <Radio
            type="radio"
            value={3}
            id="3"
            name="3"
            onChange={(e) => onChange(e.target.value)}
            checked={active === 3}
          />
        </Item>
      </Continer>
    </div>
  );
};

export default Bar;

const Radio = styled.input`
  cursor: pointer;
`;
const Label = styled.label`
  position: absolute;
  top: -50px;
  left: -45px;
  width: 100px;
  color: ${(props) => (props.active ? "#084f8a" : "gray")};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;
const Continer = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-top: 80px;
  direction: rtl;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Line = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  width: 100%;
`;
