import React from 'react'
import About from '../Components/About/About';
import Gallery from '../Components/Gallery/Gallery';
import Slider_1 from '../Components/Slider_1/Slider_1';
import Reviewsection from './Reviewsection';
import Subscribesection from './Subscribesection';
import Contactus from './Contactus';

const Home = () => {
    return (
        <>
            <Slider_1></Slider_1>
            <About></About>
            <Gallery></Gallery>
            <Reviewsection></Reviewsection>
            {/* <Subscribesection></Subscribesection> */}
            <Contactus/>
        </>
    )
}

export default Home
