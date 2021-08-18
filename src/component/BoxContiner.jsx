import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { miniData } from "../data/data";
// import Accounting from "../image/icons/account.png";
// import Ausbildung from "../image/icons/ausbildung.png";
// import Consultation from "../image/icons/consultation.png";
// import Budget from "../image/icons/budget.png";
// import Establishment from "../image/icons/company.png";

const BoxContiner = () => {
  return (
    <Container>
      {miniData.map((item, index) => (
        <Link to={item.link} key={`miniData${item.title}${index}`}>
          <Box>
            <Image src={item.image} />
            <Title>{item.title}</Title>
          </Box>
        </Link>
      ))}
    </Container>
  );
};

export default BoxContiner;

const Container = styled.div`
  display: flex;
  direction: rtl;
  @media (max-width: 765px) {
    /* flex-direction: column; */
  }
`;

const Title = styled.p`
  font-size: 1.1rem;
  padding-top: 10px;
  font-weight: bold;
  color: #084f8a;
  text-align: center;

  @media (max-width: 950px) {
    font-size: 0.9rem;
  }

  @media (max-width: 650px) {
    font-size: 0.7rem;
  }
`;

const Image = styled.img`
  width: 40px;

  @media (max-width: 950px) {
    width: 30px;
  }

  @media (max-width: 650px) {
    width: 20px;
  }
`;

const Box = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 150%;
    z-index: -1;
    transition: all 0.5s;
  }

  &:hover::before {
    background-color: #0c81ff;
  }

  &:hover ${Title} {
    color: white;
  }

  &:hover ${Image} {
    -webkit-filter: grayscale(1) invert(1);
    filter: grayscale(1) invert(1);
  }

  @media (max-width: 950px) {
    width: 100px;
  }

  @media (max-width: 650px) {
    width: 75px;
    /* height: 100px; */
  }

  &::after {
    content: "";
    position: absolute;
    height: 35px;
    width: 1px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.2);
  }

  /* &:nth-child(1):after {
    width: 0px;
  } */
`;
