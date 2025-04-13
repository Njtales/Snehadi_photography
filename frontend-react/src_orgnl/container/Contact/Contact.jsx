import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown, IoIosArrowRoundUp } from "react-icons/io";
import { images } from '../../constants';
import { GiRotaryPhone } from 'react-icons/gi';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Contact.scss';


const Contact = () => {
const [portCategories, setPortCategories] = useState([]);
  
  useEffect(() => {
    const query = '*[_type == "portfoliocategory"]';

    client.fetch(query).then((data) => {
      setPortCategories(data);
    });
  }, []);
return (
    <>
        <div className="PageHeader-section">
          <nav className="PageHeader-navigation">
            <div className="PageHeader-left-nav">
              <img 
                src={images.portfolio_left_nav_svg}
                alt="portfolio_left_nav_svg"
                className="PageHeader-svg-left-nav" />
              
              <div className="above-vertical-divider">
                <a href="#/Portfolio" className="PageHeader-link">PORTFOLIO</a>
                  <div className="PageHeader-submenu">
                    {portCategories.map((category, index) => (
                      <a href={`#/gallery/${category.title.replace(/\s+/g, '').replace(/\//g, '').toLowerCase()}`} key={index}>

                        {category.title}
                      </a>
                    ))}
                  </div>
                  <a href="#/WhoIAm" className="PageHeader-link">WHO I AM</a>
                </div>
              <div className="below-vertical-divider">
                  <a  className="PageHeader-link">MORE INFO</a>
                    <div className="PageHeader-submenu">
                      <a href="#/testimonial">Kind Words</a>
                      {/* <a href="#/pricing">Pricing</a> */}
                      <a href="#/contact">Book</a>
                    </div>
                  </div>
                </div>
            
            <div className="PageHeader-center-nav">
              <a href="#/" className="PageHeader-center-nav-link">
                <img 
                  src={images.child_icon} // child_icon -- sj_logo
                  alt="SNEHAL JATALE PHOTOGRAPHY"
                  className="PageHeader-center-nav-logo" />
                {/* <h1>SNEHAL JATALE</h1><span>PHOTOGRAPHY</span> */}
                </a>
            </div>

            <div className="PageHeader-right-nav">
            <img 
                src={images.portfolio_right_nav_svg}
                alt="portfolio_right_nav_svg"
                className="PageHeader-svg-right-nav" />
              <a href="#/contact">CONTACT</a>
              <a href="#/testimonial">TESTIMONIALS</a>
            </div>
          </nav>
      </div>
    </>
  );
};

const Contactbanner = () => {
  return (
    <div className="contactbanner">
      <div className="contactbanner-title">LET'S CREATE SOMETHING BEAUTIFUL...</div>
      <p>Every family has a story-full of quiet moments, deep connections, and fleeting details that deserve to be remembered. <br/>If my style speaks to you, I'd love to capture yours in a way that feels effortless, intimate, and beautifully timeless.
To enquire about a session, ask a question, or simply say hello, please fill out the form below. 
<br/><br/>I'll be in touch soon, and we can start planning something truly special.
I can't wait to hear from you.</p>
      <div>
        <a href="tel:+44 7826343049" className="contactbanner-contact-svg">
         <GiRotaryPhone /> 
         +44 7733 419784
        </a>
        </div>
    </div>
  );
};

const ContactForm = () => {
  const [sessionType, setSessionType] = useState('');
  
  const getMessageLabel = () => {
    switch (sessionType) {
      case 'maternity':
        return 'Your message (When is the baby due? Please share details if you would like any specific photo type)';
      case 'newborn':
        return 'Your message (When is the baby due? Please provide details for the Newborn session)';
      case 'family':
        return 'Your message (Please tell us more about your family and any ideas if you have for the session)';
      case 'cakesmash': 
        return 'Your message (Please describe your Cake smash / pre birthday session, any style/theme you can think of)';
      case 'sitter':
        return 'Your message (Please provide details about the Sitter session you would like)';
      default:
        return 'Your message';
    }
  };

  const getMessagePlaceholder = () => {
    switch (sessionType) {
      case 'maternity':
      case 'newborn':
        return 'Please tell us the due date and any other details...';
      case 'family':
        return 'Tell us more about your family session...';
      case 'cakesmash':
        return 'Please provide details about your Cake-smash or pre-birthday session...';
      case 'sitter':
        return 'Your message (Please provide details about the Sitter session you would like)';
      case 'other':
        return 'What would you like to talk about?';
      default:
        return 'Your Message';
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit action

    // Submit form data using fetch or another method to Formspree
    const formData = new FormData(event.target); // Assuming your inputs have 'name' attributes
    try {
      const response = await fetch('https://formspree.io/f/xzbnzewl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        navigate('/contact-thank-you'); // Navigate to the thank-you page on successful submission
      } else {
        // Handle errors (e.g., show an error message)
        console.error('Form submission failed');
      }
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-image">
        <img src={images.family_img12} alt="Family Portrait"/>
      </div>
      <div className="contact-form-content">
        <div className="contact-form-content-heading">GET IN TOUCH</div>
        <form action="https://formspree.io/f/xzbnzewl" method="POST" onSubmit={handleSubmit}>
          <div className="form-group-wrapper">
            <div className="form-group">
              <label htmlFor="first-name">First Name *</label>
              <input type="text" id="first-name" name="first-name" placeholder="First Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name *</label>
              <input type="text" id="last-name" name="last-name" placeholder="Last Name" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email *</label>
            <input type="email" id="email" name="user-email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone-number" placeholder="Phone Number" required />
          </div>
          <div className="form-group">

            <label htmlFor="session-type">What kind of session are we going to do together?</label>
              <select id="session-type" required onChange={(e) => setSessionType(e.target.value)}>
                <option value="" disabled selected>------Select------</option>
                  <option value="maternity">Maternity Photo Session</option>
                  <option value="newborn">Newborn Photo Session</option>
                  <option value="family">Family Photo Session</option>
                  <option value="cakesmash">Cake-Smash / Pre-birthday Photo Session</option>
                  <option value="sitter">Sitter Photo Session</option>
                  <option value="other">Something else</option>
              </select>
            
              { (sessionType === 'maternity' || sessionType === 'newborn') && (
                <div className="form-group">
                  <label htmlFor="due-date">Due Date *</label>
                  <input type="date" id="due-date" name="due-date" placeholder="due-date" required />
                </div>
              )}
            </div>
          <div className="form-group">
            <label htmlFor="message">{getMessageLabel()} *</label>
            <textarea id="message" name="message" placeholder={getMessagePlaceholder()} required rows="5"></textarea>
          </div>
          {/* <div className="form-group">
            <label htmlFor="photo-love">Tell me which photo you LOVE on my Website!</label>
            <input type="text" id="photo-love" placeholder="Favorite Photo" />
          </div> */}
          {/* <div className="form-group">
            <label htmlFor="postcode">Postal Code / Where are you based *</label>
            <input type="text" id="postcode" name="postal code" placeholder="postal code" required />
          </div> */}
          <div className="form-group">
            <label htmlFor="referral">Where did you hear about me?</label>
            <input type="text" id="referral" placeholder="Referral Source" />
          </div>
          <div className="button-container">
            <button type="submit">SUBMIT</button>
            <a href="#/contact-thank-you">for thank you test</a>
          </div>
        </form>
      </div>
    </div>
  );
};


const ContactFooter  = () => {
    const [footerImages, setFooterImages] = useState([]);
    
    useEffect(() => {
      const query = '*[_type == "home"]';
  
      client.fetch(query).then((data) => {
        const imageUrls = data.map(doc => doc.imgUrl);
        setFooterImages(imageUrls);
      });      
    }, []);
  
      return (
      <footer className="footer">
        <a href="https://www.instagram.com/snehaljatale_photography/" target="_blank" className="footer-link">
          <div className="footer-text">
            FOLLOW ME ON INSTAGRAM
            <p>@snehaljatale_photography</p>
          </div>
        </a>
  
        <div className="footer-images">
          {footerImages.map((image, index) => (
            <img 
              key={index}
              src={urlFor(image).url()} 
              alt={`Footer Image ${index + 1}`}
              className="footer-image"
            />
          ))}
  
        </div>
  
      </footer>
      );
    };
  
   const Contactfooternav  = () => {
    const [portCategories, setPortCategories] = useState([]);
    
      useEffect(() => {
        const query = '*[_type == "portfoliocategory"]';
    
        client.fetch(query).then((data) => {
          setPortCategories(data);
        });
      }, []);
  
      return (
          <div className="footer-nav">
          <a href="#/portfolio" className="footer-link">PORTFOLIO</a>
            <div className="footer-submenu footer-submenu-common">
              {portCategories.map((category, index) => (
                <a href={`#/gallery/${category.title.replace(/\s+/g, '').replace(/\//g, '').toLowerCase()}`} key={index}>

                  {category.title}
                </a>
              ))}
            </div>
          <a href="#/whoiam">WHO I AM</a>
            <a  className="footer-link">MORE INFO</a>
            <div className="footer-moreinfo-submenu footer-submenu-common">
              <a href="#/testimonial">Kind Words</a>
              {/* <a href="#/pricing">Pricing</a> */}
              <a href="#/contact">Book</a>
            </div>
          <a href="#/contact">CONTACT</a>
          <a href="#/Testimonial">TESTIMONIALS</a>
        </div>
      );
    };
  
  const Contactfooterinfo = () => {
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
      return (
      <div className="footer-info">
        <p>© 2025 Snehal Jatale Photography | PH: 07826 343049</p><br />
        <p>Snehal Jatale is an award-winning newborn photographer, maternity photographer, family photographer, and baby photographer based in Doha, Qatar. <br/>Snehal offers timeless pregnancy portraits, artistic newborn photography, beautiful family photos.</p>
        <p>Organic, natural, soulful photography.</p><br />
        <p>By appointments only.</p>
  
        <div className="footer-uparrow" onClick={scrollToTop}>
        <IoIosArrowRoundUp />
        </div>
      </div>
      );
    };

    const ContactMotion = MotionWrap(Contact);
    const ContactbannerMotion = MotionWrap(Contactbanner);
    const ContactFormMotion = MotionWrap(ContactForm);
    const ContactFooterMotion = MotionWrap(ContactFooter);
    const ContactfooternavMotion = MotionWrap(Contactfooternav);
    const ContactfooterinfoMotion = MotionWrap(Contactfooterinfo);

  const ContactPage = () => {
    return (
      <>
        <ContactMotion />
        <ContactbannerMotion />
        <ContactFormMotion />
        <ContactFooterMotion />
        <ContactfooternavMotion />
        <ContactfooterinfoMotion />
      </>
    );
  };

export default AppWrap(ContactPage, 'Contact');