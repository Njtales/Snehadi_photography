import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown, IoIosArrowRoundUp } from "react-icons/io";
import { images } from '../../constants';
import { GiRotaryPhone } from 'react-icons/gi';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Contact.scss';


const Contactthankyou = () => {
const [portCategories, setPortCategories] = useState([]);

  useEffect(() => {

    window.scrollTo(0, 0);

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
                <a href="/Portfolio" className="PageHeader-link">PORTFOLIO</a>
                  <div className="PageHeader-submenu">
                    {portCategories.map((category, index) => (
                      <a href={`/${category.title.replace(/\s+/g, '').toLowerCase()}`} key={index}>
                        {category.title}
                      </a>
                    ))}
                  </div>
                  <a href="/WhoIAm" className="PageHeader-link">WHO I AM</a>
                </div>
              <div className="below-vertical-divider">
                  <a  className="PageHeader-link">MORE INFO</a>
                    <div className="PageHeader-submenu">
                      <a href="/testimonial">Kind Words</a>
                      <a href="/pricing">Pricing</a>
                      <a href="/contact">Book</a>
                    </div>
                  </div>
                </div>
            
              <div className="PageHeader-center-nav">
                <a href="/" className="PageHeader-center-nav-link">
                  <img 
                    src={images.child_icon} // child_icon -- sj_logo
                    alt="SNEHAL JATALE PHOTOGRAPHY"
                    className="PageHeader-center-nav-logo" />
                  <h1>SNEHAL JATALE</h1><span>PHOTOGRAPHY</span>
                  </a>
              </div>

            <div className="PageHeader-right-nav">
            <img 
                src={images.portfolio_right_nav_svg}
                alt="portfolio_right_nav_svg"
                className="PageHeader-svg-right-nav" />
              <a href="/contact">CONTACT</a>
              <a href="/testimonial">TESTIMONIALS</a>
            </div>
          </nav>
      </div>
    </>
  );
};

const Thankyou = () => {
  return (
    <div className="thankyou-message">
      <p className="thankyou-main-message">I can't wait to speak to you and start planning your session!</p>
      <p className="thankyou-reply">
        I will reply to your message within the next 1-2 business days 
        (<span className="emphasis">please also check your spam folder for replies</span>). 
        If you haven't heard from me in 48 hours, please check your junk folder or resend your form.
      </p>
      <p className="thankyou-closing-remark">Have a lovely day.</p>
      <p className="thankyou-signature">x</p>
      <p className="thankyou-ps-message">Psst! In the meantime, browse the galleries below so you can tell me which images you love most!</p>
    </div>
  );
};

const GalleryLinks = () => {
  const [currentImage, setCurrentImage] = useState(images.family_img01);
  
  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  const handleMouseLeave = () => {
    setCurrentImage(images.family_img02);
  };

  return (
    <>
      <div className="gallery-section">
        <div className="gallery-links-container">
            <p className="gallery-title">BROWSE OUR GALLERIES</p>  
            <div className="gallery-links">
              <a href="/newborn" onMouseEnter={() => handleMouseEnter(images.newborn_img06)}>01. Newborn</a>
              {/* <a href="/cake-smash" onMouseEnter={() => handleMouseEnter(images.cake_img02)}>02. Cake Smash</a> */}
              {/* <a href="/kids" onMouseEnter={() => handleMouseEnter(images.kids_img03)}>03. kids</a> */}
              <a href="/maternity" onMouseEnter={() => handleMouseEnter(images.bump_img01)}>02. Maternity / Bump</a>
              <a href="/family"onMouseEnter={() => handleMouseEnter(images.family_img13)}>03. Family</a>
            </div>
          </div>
          <div className="gallery-image">
            <img src={currentImage} alt="Gallery-image" />
          </div>
      </div>
    </>
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
          <a href="/portfolio" className="footer-link">PORTFOLIO</a>
            <div className="footer-submenu footer-submenu-common">
              {portCategories.map((category, index) => (
                <a href={`/${category.title.replace(/\s+/g, '').toLowerCase()}`} key={index}>
                  {category.title}
                </a>
              ))}
            </div>
          <a href="/whoiam">WHO I AM</a>
            <a  className="footer-link">MORE INFO</a>
            <div className="footer-moreinfo-submenu footer-submenu-common">
              <a href="/testimonial">Kind Words</a>
              <a href="/pricing">Pricing</a>
              <a href="/contact">Book</a>
            </div>
          <a href="/contact">CONTACT</a>
          <a href="/Testimonial">TESTIMONIALS</a>
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

    const ContactthankyouMotion = MotionWrap(Contactthankyou);
    const ThankyouMotion = MotionWrap(Thankyou);
    const GalleryLinksMotion = MotionWrap(GalleryLinks);
    const ContactFooterMotion = MotionWrap(ContactFooter);
    const ContactfooternavMotion = MotionWrap(Contactfooternav);
    const ContactfooterinfoMotion = MotionWrap(Contactfooterinfo);

  const ContactPage = () => {
    return (
      <>
        <ContactthankyouMotion />
        <ThankyouMotion />
        <GalleryLinksMotion />
        <ContactFooterMotion />
        <ContactfooternavMotion />
        <ContactfooterinfoMotion />
      </>
    );
  };

export default AppWrap(ContactPage, 'contact-thank-you');