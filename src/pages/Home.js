import React, { useRef } from 'react'
import styled from 'styled-components';
import Into from '../component/Intro'
import About from '../component/About';
import Features from '../component/Features';
import Services from '../component/Services';
import Footer from '../component/Footer'

const Home = () => {
    const HomeRef = useRef();
    const AboutRef = useRef();
    const FeaturesRef = useRef();
    const ServicesRef = useRef();
    return (
        <Container>
            <div ref={HomeRef}>
                <Into HomeRef={HomeRef} AboutRef={AboutRef} FeaturesRef={FeaturesRef} ServicesRef={ServicesRef} />
            </div>

            <div ref={AboutRef}>
                <About />
            </div>

            <div ref={FeaturesRef}>
                <Features />
            </div>

            <div ref={ServicesRef}>
                <Services />
            </div>

            <div style={{ height: '10px' }} />
            <Footer HomeRef={HomeRef} AboutRef={AboutRef} FeaturesRef={FeaturesRef} ServicesRef={ServicesRef} />

        </Container>
    )
}

export default Home


const Container = styled.div`
    /* height: 100vh; */
    position: relative;
`
