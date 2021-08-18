import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components'
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import { useForm, ValidationError } from "@formspree/react";


import MapIcon from "@material-ui/icons/Map";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import EmailIcon from "@material-ui/icons/Email";

const Contact = () => {
    const [state, handleSubmit] = useForm("mvodwnkj");
    const [succeeded, setSucceeded] = useState(false);
    const formRef = useRef();

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            if (state.succeeded) {
                formRef.current.reset();
                setSucceeded(true);
            }
        }

        return () => (mounted = false);
    }, [state.succeeded]);

    return (
        <Contianer>
            <Navbar color="light" />
            <Wrapper>
                <Top>
                    <Title>اتصل بنا</Title>
                </Top>
                <Bottom>
                    <Left>
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

                    </Left>
                    <Right>

                        <Form onSubmit={handleSubmit} ref={formRef}>
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />

                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />

                            <Input id="name"
                                type="text"
                                name="name"
                                required
                                placeholder="الاسم بالكامل" />

                            <Input id="email"
                                type="email"
                                name="email"
                                required
                                placeholder="بريدك الالكتروني" />

                            <Input type="text"
                                name="phone"
                                id="phone"
                                required
                                placeholder="هاتفك" />
                            <Textarea id="message"
                                name="message"
                                required
                                placeholder="رسالتك" />

                            <Button type="submit" disabled={state.submitting}>
                                إرسال
                            </Button>
                        </Form>
                        <p style={{ textAlign: 'center' }}>{succeeded && "تم إرسال الرسالة بنجاح"}</p>

                    </Right>
                </Bottom>
            </Wrapper>
            <Footer />
        </Contianer>
    )
}

export default Contact

const Contianer = styled.div``
const Wrapper = styled.div`
      margin: 50px auto;
    display: flex;
    flex-direction: column;
    width: 70%;
    text-align: center;
    min-height: 70vh;
`
const Top = styled.div``
const Title = styled.h1``
const Bottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 30px;
    flex-wrap: wrap;
    margin-top:60px;
`

const Left = styled.div`
    width: 50%;
    
    @media (max-width: 480px){
        width: 100%;

    }
`;
const Right = styled.div`
    direction: rtl;
    font-size: 1.5rem;
    text-align: right;
    min-width: 325px;
    max-width: 500px;
    line-height: 2.5rem;
    list-style: disc;
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`;


const ContactText = styled.p`
  padding-left: 10px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    padding: 10px;
    margin: 10px 0;
    max-width: 400px;
    direction: rtl;
    border:1px solid rgba(0, 0, 0,0.1);

    &:focus{
        outline:none;
    }

    @media (max-width: 480px){
        width: 90%;
        margin: 10px auto;
    }
`

const Textarea = styled.textarea`
    max-width: 400px;
    height: 200px;
    padding: 10px;
    resize: none;
    border:1px solid rgba(0, 0, 0,0.1);
    direction: rtl;

    &:focus{
        outline:none;
    }

    @media (max-width: 480px){
        width: 90%;
        margin: 10px auto;

    }

`

const Button = styled.button`
    margin: 30px auto;
    padding: 10px 20px;
    border-radius: 30px;
    border: none;
    outline: none;
    background-color: #b1afb0;
    color: #2b2a30;
    cursor: pointer;
    transition: 0.5s all;

    &:hover {
        color: white;
        background-color: #666566;
    }
`;