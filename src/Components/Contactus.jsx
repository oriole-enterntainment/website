import React, { useState } from "react";
import "./Contactus.css";
import phoneicon from './icons/phone-icon.svg';
import mailicon from './icons/mail-icon.svg';
import locationicon from './icons/location-icon.svg';
import { getFirestore,setDoc, doc, Timestamp } from "firebase/firestore";
import { app ,db } from '../firebase/firebaseConfig'


const Contactus =  () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

  const handleSubmit = async (e) => {
  
      setLoading(true);
      console.log("I am here")
      if (name ==='' || email==='' || subject==='' || message==='') {
        setError('Please fill all the fields');
        setLoading(false);
        return;
      } else {
        const documentName = generateRandomString(10)
        await setDoc(doc(db, "contactus",documentName), {
         name: name,
         email: email,
         subject: subject,
         message: message,
         sent_at : Timestamp.now()
       }).then((result) => {
         
         setSuccess(true);
         setLoading(false);
         setName('');
         setEmail('');
         setSubject('');
         setMessage('');
         
         
       }).catch((error) => {
         setError('Error adding document: ', error);
         setLoading(false);
       
       })
      }
     
      
   
  }




  return (
    <div id="contactus">
      <div id='box1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '20px 0px 20px 70px' }} >
        <h1 className="title">
          <span className="gradient">CONTACT </span> <br />
        </h1>
        <div id='box2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
          <p style={{ fontWeight: '100', color: 'black' }} >Reach out to Us</p>
          <hr id='line' style={{ border: '.5px orange solid', width: '120px', marginLeft: '10px' }} />
        </div>
      </div>
      <div id="contactus-grid">
        <div id="grid-part1">
          <div id="our-address">
            <div><img src={phoneicon} alt="phone-icon" /></div>
            <p className="heading-text">Our Address</p>
            <p>B4/201, Safdarjung Enclave, Delhi, India-110029</p>
          </div>
          <div id="grid-part1a">
            <div id="email-us">
              <div><img src={mailicon} alt="mail-icon" /></div>
              <p className="heading-text">Email Us</p>
              <p className="main-text">team@orioleentertainment.com</p>
              <p className="main-text">orioleentertainment@gmail.com</p>
            </div>
            <div id="call-us">
              <div><img src={locationicon} alt="phone-icon" /></div>
              <p className="heading-text">Call Us</p>
              <p className="main-text">+91 078301 00001</p>
            </div>
          </div>
        </div>
        {!success &&(<div id="grid-part2">
          <div id="contact-details">
            <div className="input-line1">
              <input type="text" placeholder="Your Name" value={name} onChange={(e) => {
                setName(e.target.value)
              }} />
              <input type="text" placeholder="Your Email" value={email} onChange={(e) => {
                setEmail(e.target.value)
              }} /></div>
            <div><input type="text" placeholder="Subject" value={subject} onChange={(e) => {
              setSubject(e.target.value)
            }} /></div>
            <div><textarea type="text" placeholder="Message" value={message} onChange={(e) => {
              setMessage(e.target.value)
            }} /></div>
            <button id="send-button" onClick={(e) => {handleSubmit(e)}}>Send Message</button>
            {loading && (<p className="success-text">Loading...</p>)}
            {error && (<p className="error-text">{error}</p>)}
          </div>
        </div>)}
        {success && (<div id="grid-part2">
          <div id="contact-details">
            <p className="success-text">Thank you for contacting us. We will get back to you soon.</p>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default Contactus;
