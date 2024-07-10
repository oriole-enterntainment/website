import React from 'react';
import { Grid } from '@mui/material';
import './Artists.css';
import img1 from '../Assets/portfolio/1.png';
import img2 from '../Assets/portfolio/2.png';
import img3 from '../Assets/portfolio/3.png';
import img4 from '../Assets/portfolio/4.png';
import img5 from '../Assets/portfolio/5.png';
import img6 from '../Assets/portfolio/7.png';
import img7 from '../Assets/portfolio/8.JPG';
import img8 from '../Assets/portfolio/9.png';
import img9 from '../Assets/portfolio/10.png';
import img10 from '../Assets/portfolio/11.png';
import img11 from '../Assets/portfolio/12.png';
import img12 from '../Assets/portfolio/13.png';
import img13 from '../Assets/portfolio/14.png';
import img14 from '../Assets/portfolio/15.png';
import img15 from '../Assets/portfolio/17.JPG';
import img16 from '../Assets/portfolio/18.png';
import img17 from '../Assets/portfolio/19.jpg';
import img18 from '../Assets/portfolio/20.jpg';
import img19 from '../Assets/portfolio/21.JPG';
import img20 from '../Assets/portfolio/22.JPG';
import img21 from '../Assets/portfolio/23.JPG';
import img22 from '../Assets/portfolio/24.JPG';
import img23 from '../Assets/portfolio/25.JPG';
import img24 from '../Assets/portfolio/26.JPG';
import img25 from '../Assets/portfolio/27.JPG';
import img26 from '../Assets/portfolio/28.png';
import img27 from '../Assets/portfolio/29.png';
import img28 from '../Assets/portfolio/30.png';
import img29 from '../Assets/portfolio/31.png';
import img30 from '../Assets/portfolio/32.png';
import img31 from '../Assets/portfolio/33.png';
import img32 from '../Assets/portfolio/34.png';
import img33 from '../Assets/portfolio/35.png';
import img34 from '../Assets/portfolio/36.png';
import img35 from '../Assets/portfolio/37.png';
import img36 from '../Assets/portfolio/38.png';
import img37 from '../Assets/portfolio/39.png';

import LinkIcon from '@mui/icons-material/Link';

const Artists = () => {

    const artistData = [
        { image: img1, name: "Anubhav Singh Bassi", link: 'https://www.instagram.com/be_a_bassi?igsh=MWxvaWJ3OW1pcDNzbQ==' },
        { image: img2, name: "Harsh Gujral", link: 'https://www.instagram.com/realharshgujral?igsh=Y2V3NjJsdWxpbjJ0' },
        { image: img25, name: "Ravi Gupta", link: 'https://www.instagram.com/shudhdesicomic/' },
        { image: img32, name: "Pritish Narula", link: 'https://www.instagram.com/pritishnarula?igsh=aHZjYTJ4bWU0N2dm' },
        { image: img30, name: "Rakesh Addlakha", link: 'https://www.instagram.com/rakeshaddlakha?igsh=MTdjMGl3ZHJiajNocQ==' },
        { image: img19, name: "Onkar Yadav", link: '#' },
        { image: img3, name: "Zakir Khan", link: 'https://www.instagram.com/zakirkhan_208?igsh=MTh0bWUxdXZnamdmYg==' },
        { image: img20, name: "Pratyush Chaubey", link: 'https://www.instagram.com/chaubey.pratyush/' },
        { image: img29, name: "Kaustub Agarwal", link: 'https://www.instagram.com/hilarious_big?igsh=NnlkcmY5MXk1bDkx' },
        { image: img5, name: "Rahul Dua", link: 'https://www.instagram.com/therahuldua?igsh=MXZxNTBpdjRyMHUxOA==' },
        { image: img4, name: "Abhishek Upamanyu", link: 'https://www.instagram.com/aupmanyu?igsh=c3QybDcwaWpjZG9r' },
       
        { image: img6, name: "Gaurav Gupta", link: 'https://www.instagram.com/gaurav_comic?igsh=bWxrbDJlZ2JubnMz' },
        { image: img7, name: "Appurv Gupta (Guptaji)", link: 'https://www.instagram.com/appurv20?igsh=MW85N21nZHJoc2RlNQ==' },
        { image: img8, name: "Nishant Tanwar", link: 'https://www.instagram.com/nishanttanwar?igsh=MTZhZW9ucDJjNWJwYw==' },
        { image: img9, name: "Aakash Gupta", link: 'https://www.instagram.com/theskygupta?igsh=ZWFybG51cXVuaDUz' },
        { image: img10, name: "Rajat Chauhan", link: 'https://www.instagram.com/officialrajatchauhan?igsh=MWdsdWNvN29kNjU2eg==' },
        { image: img11, name: "Atul Khatri", link: 'https://www.instagram.com/one_by_two?igsh=cTc5a3UzbzkxeWty' },
        { image: img12, name: "Vijay Yadav", link: 'https://www.instagram.com/aslivijayyadav?igsh=MWN6N3l5OGc5YTIybA==' },
        { image: img13, name: "Abish Mathew", link: 'https://www.instagram.com/abishmathew?igsh=aTBqcHlvaHo0bXdo' },
        { image: img14, name: "Prashasti Singh", link: 'https://www.instagram.com/prashastisingh?igsh=MTRndHBzamh3cnVxYg==' },
        { image: img16, name: "Manik Mahna", link: '#' },
       
        { image: img17, name: "Aaditya Kulshreshth(Kullu)", link: 'https://www.instagram.com/kullubaaazi/' },
        { image: img18, name: "Rupali Tyagi", link: 'https://www.instagram.com/rustic_rupali/' },
        { image: img21, name: "Maheep Singh", link: 'https://www.instagram.com/maheep.singhh/' },
        { image: img22, name: "Daahab", link: 'https://www.instagram.com/daahab.chishti/' },
        { image: img23, name: "Raghav Mandava", link: 'https://www.instagram.com/raghavmandava/' },
        { image: img24, name: "Aashish Solanki", link: 'https://www.instagram.com/ashishsolanki_1/' },
        { image: img26, name: "Shreya Priyam", link: 'https://www.instagram.com/shreya.priyam/' },
        { image: img27, name: "Madhur Virli", link: 'https://www.instagram.com/madhurvirli/' },
        { image: img28, name: "Neeti Palta", link: 'https://www.instagram.com/neetipalta/' },
        { image: img31, name: "Himanshu Bhardwaj", link: '#' },
        { image: img33, name: "Rajat Sood", link: 'https://www.instagram.com/rajatsoodpomedy?igsh=MXhjanliZ21idWkwbA==' },
        { image: img34, name: "Anshu Mor", link: 'https://www.instagram.com/anshu_mor?igsh=NzZ2aXYzZjM2OWhy' },
        { image: img35, name: "Aanchal Agrawal", link: 'https://www.instagram.com/awwwnchal?igsh=MTl5OXV0OGJrbzhjbQ==' },
        { image: img36, name: "Gurleen Pannu", link: 'https://www.instagram.com/gurleen_pannu?igsh=MThzMnR4d3ZmNnNlNw==' },
        { image: img37, name: "Vidit Sharma", link: 'https://www.instagram.com/rjvidit?igsh=MWM0YmoxMHFjaXUxZg==' },
    ];

    return (
        <Grid className='ArtistsBox'>
            <div id='box1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '20px 0px 20px 70px' }} >
                <h1 className="title">
                    <span className="gradient">ARTISTS </span> <br />
                </h1>
                <div id='box2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                    <p style={{ fontWeight: '100', color: 'grey' }}>ARTISTS WE HAVE WORKED WITH</p>
                    <hr id='line' style={{ border: '.5px orange solid', width: '120px', marginLeft: '10px' }} />
                </div>
            </div>
            <div className="ArtistsGallery">
                {
                    artistData.map((artist, index) => {
                        return (
                            <div key={index} className='artist' id='artistOne'>
                                <img src={artist.image} alt={artist.name} />
                                <div className='artistDetails'>
                                    <p>{artist.name}</p>
                                    <a href={artist.link} target="_blank" rel="noopener noreferrer">
                                        <LinkIcon />
                                    </a>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </Grid>
    );
};

export default Artists;
