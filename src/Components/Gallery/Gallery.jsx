import React, { useEffect, useRef } from 'react';
import './Gallery.css';
import { Grid } from '@mui/material';
import img1 from '../../Assets/Gallery/DSC01251.JPG';
import img2 from '../../Assets/Gallery/16.JPG';
import img3 from '../../Assets/Gallery/4.jpg';
import img4 from '../../Assets/Gallery/17.JPG';
import img5 from '../../Assets/Gallery/14.JPG';
import img6 from '../../Assets/Gallery/19.JPG';
import img7 from '../../Assets/Gallery/13.JPG';
import img8 from '../../Assets/Gallery/15.JPG';
import img9 from '../../Assets/Gallery/18.JPG';
import img10 from '../../Assets/Gallery/img10.png';
import img11 from '../../Assets/Gallery/20.JPG';

const Gallery = () => {
    const box1Ref = useRef(null);
    const columnRefs = useRef([]);

    useEffect(() => {
        const options = {
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, options);

        if (box1Ref.current) {
            observer.observe(box1Ref.current);
        }

        columnRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            if (box1Ref.current) observer.unobserve(box1Ref.current);
            columnRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <Grid className='galleryBox'>
            <div id='box1' ref={box1Ref} className="animate-bottom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '20px 0px 20px 70px' }} >
                <h1 className="title">
                    <span className="gradient">GALLERY </span> <br />
                </h1>
                <div id='box2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                    <p style={{ fontWeight: '100', color: 'black' }} >Check out our gallery</p>
                    <hr style={{ border: '.5px orange solid', width: '120px', marginLeft: '10px' }} />
                </div>
            </div>
            <div className="row">
                <div className="column animate-left" ref={el => columnRefs.current[0] = el}>
                    <img src={img5} alt="Gallery Image 1" />
                    <img src={img7} alt="Gallery Image 2" />
                    <img src={img9} alt="Gallery Image 3" />
                    <img src={img6} alt="Gallery Image 4" />
                </div>
                <div className="column" ref={el => columnRefs.current[1] = el}>
                    <img src={img10} alt="Gallery Image 5" style={{ width: "65%" }} />
                    <img src={img3} alt="Gallery Image 6" />
                    <img src={img2} alt="Gallery Image 7" />
                </div>
                <div className="column animate-right" ref={el => columnRefs.current[2] = el}>
                    <img src={img8} alt="Gallery Image 8" />
                    <img src={img4} alt="Gallery Image 9" />
                    <img src={img1} alt="Gallery Image 10" />
                    <img src={img11} alt="Gallery Image 11" />
                </div>
            </div>
        </Grid>
    );
};

export default Gallery;
