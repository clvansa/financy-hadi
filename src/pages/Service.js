import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import { data } from '../data/data'


const Service = (porps) => {
    const ServiceRef = useRef();

    
    const params = porps.match.params.id
    const item = data.find(item => item.type === params)
    
    useEffect(() => {
        ServiceRef.current.scrollIntoView({
            behavior:"smooth"
        })
    }, [params])


    return (
        <Container ref={ServiceRef}>
            {/* <Intro /> */}
            <Navbar color="light" />
            <Warpper>
                <Top>
                    <Title>{item.title}</Title>
                    <Subtitle>من الشركات الشخصية إلى الشركات الناشئة إلى الشركات المحدودة ، نقدم مجموعة من الخدمات التي سنخصصها وفقًا لاحتياجاتك الخاصة.</Subtitle>
                </Top>
                <Bottom>
                    <Left>
                        <Image src={item.img} />
                    </Left>
                    <Right>
                        {item.list.map((el, i) => (
                            <li key={i}>{el}</li>
                        ))}
                    </Right>
                </Bottom>
            </Warpper>
            <Footer />
        </Container>
    )
}

export default Service

const Container = styled.div``

const Warpper = styled.div`
    margin: 50px auto;
    display: flex;
    /* justify-content: center;
    align-items: center; */
    flex-direction: column;
    width: 70%;
    text-align: center;
    min-height: 70vh;
`;

const Top = styled.div``
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 30px;
    flex-wrap: wrap;
    margin-top:60px;

`
const Title = styled.h1`
    font-size: 2rem;
    padding-bottom: 30px;
`
const Subtitle = styled.p``
const Left = styled.div`
    width: 50%;

    @media (max-width: 1380px) {
        width: 100%;
  }
`;
const Right = styled.div`
    direction: rtl;
    font-size: 1.5rem;
    text-align: right;
    /* width: 50%; */
    min-width: 325px;
    max-width: 500px;
    line-height: 2.5rem;
    list-style: disc;

    @media (max-width: 1380px) {
        width: 100%;
        font-size: 1rem;
        margin: auto;

  }
    @media (max-width: 480px) {
        min-width:250px;
        font-size: 1rem;

  }
`;

const Image = styled.img`
    width:100%;
    max-width: 500px;
    min-width:350px;
    transition: all 0.5s;

    &:hover{
        transform: scale(1.05) ;
    }

    @media (max-width: 1380px) {
        /* min-width: 250px; */
    }
    @media (max-width: 480px) {
        min-width: 250px;
    }
`

