import React from 'react';
import './Booking.css'
import { Link } from 'react-router-dom';
import event from '../../src/Assets/Event.png'

const Booking = () => {
    return (
        <div className='BookingBox'>
            <div id='box1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '85%', margin: '20px 0px' }} >
                <div id='box2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                    <p style={{ fontWeight: '100', color: 'grey' }} >BOOK YOUR FAVORITE ARTIST'S EVENT NOW</p>
                    <hr id='line' style={{ border: '.5px orange solid', width: '120px', marginLeft: '10px' }} />
                </div>
                <h1 className="title">
                    <span className="gradient">BOOK NOW </span> <br />
                </h1>
            </div>

            <div id='box1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '85%', margin: '20px 0px' }} >
                <h1 className="title">
                    <span className="gradient">LIVE SHOWS </span> <br />
                </h1>
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }} >
                    <div id='liveShow' >
                        <p>
                            No upcoming events from <Link to="/" >Oriole Entertainment</Link> at the moment! <br />
                            <a href='/'> Follow </a> us We will keep you posted.
                        </p>
                    </div>
                </div>
            </div>

            <p style={{ fontSize: '20px', margin: '25px 0px' }} >Past Events by Oriole Entertaintment</p>

            <div className="pastEvents">
                <div className="event">
                    <div id="e1" style={{ backgroundImage: `url(${event})` }} >
                    </div>
                    <div id="e2">
                        <div id="e3">
                            <p>July <br /> <span style={{ color: 'grey' }} >19</span></p></div>
                        <hr id='partition' />
                        <div id="e4">
                            <p id='e4name' >
                                Kal Ki Chinta Nahi Karta ft. Ravi Gupta Kolkata
                            </p>
                            <p id='e4place' >
                                Effingut Brewpub - Park Street, India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Booking
