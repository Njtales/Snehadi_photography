import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown, IoIosArrowRoundUp } from "react-icons/io";
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

import './WhoIam.scss';

const WhoIam = () => {
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

const UpperWhoIam  = () => {
    return (
        <div className="UpperWhoIam-container">
          <div className="UpperWhoIam-text-section">
            <div>It's so lovely to meet you!</div>
            <p>It's so lovely to meet you. I'm a photographer based in Doha, Qatar.</p>
            <p>My aim is to capture you and your family in the most laid-back, authentic way. You will have film-like images of your story to look at forever; like opening a little window into that moment of time with your children and remember their tiny hands and cheeky smiles.</p>
            <p>I would like to capture your family as it is... the laughter, the magic, the madness.</p>
            <p>My style is natural, organic, and soulful. I love to capture the connection between you and your loved ones, the little details, and the in-between moments. My sessions are relaxed and fun, and I will guide you through the whole process. I want you to feel comfortable and enjoy the experience.</p>
            <p>I feel privileged to tell your story through my lens.</p>
            <a href="/contact" className="UpperWhoIam-get-in-touch">Get in touch!</a>
          </div>
          <div className="UpperWhoIam-image-section">
            <img src={images.myimg} alt="Family on the beach" />
          </div>
        </div>
      );
    };


const WhoIamPhotography = () => {
  
return (
        <>
            <div className="whoiamphotography-container">
                <div className="whoiamphotography-title">Gallery</div>
                <div className="whoiamphotography-list">
                    <a href="/Portfolio/Maternity" className="whoiamphotography">Maternity Photogaphy</a>
                    <a href="/Portfolio/Newborn" className="whoiamphotography">New Born Photography</a>
                    <a href="/Portfolio/Family" className="whoiamphotography">Family Photography</a>
                </div>
            </div>
        </>
    );
  }; 

const MidWhoIam  = () => {
    return (
        <div className="MidWhoIam-container">
          <div className="MidWhoIam-image-section">
            <img src={images.kids_img08} alt="Family on the beach" />
          </div>
          <div className="MidWhoIam-text-section">
            <div>Some random facts about me:</div>
            <ul>
                <li>I lived in Doha, Qatar for eight years (and have missed the rain ever since!)</li>
                <li>I fell in love with photography after finishing my Computer Science Engineering and the rest is history.</li>
                <li>I started capturing the moments of my first daughter, and the journey continues...</li>
                <li>I'm an Indian (hence like to share a vibrant theme).</li>
                <li>I'm obsessed with light and creating film-like images that you will cherish forever.</li>
                <li>All of it! That is what makes every family so unique. I cannot wait to meet you!</li>

            </ul>
          </div>
        </div>
      );
    };

const LowerWhoIam = () => {
    return (
      <div className="LowerWhoIam-container">
        <img src={images.kids_img11} alt="Family walking" className="LowerWhoIam-bg-image" />
        <div className="LowerWhoIam-overlay-text">
          <p>"TODAY'S LITTLE MOMENTS BECOME <br/>TOMORROW'S PRECIOUS MEMORIES."</p>
        </div>
      </div>
    );
  };
      
const UpperFooter  = () => {
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

 const MidFooter  = () => {
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

const LowerFooter = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
    return (
    <div className="footer-info">
      <p>© 2025 Snehal Jatale Photography | PH: 07826 343049</p><br />
      <p>Snehal Jatale is an award-winning newborn photographer, maternity photographer, family photographer, and baby photographer based in Doha, Qatar. Snehal offers timeless pregnancy portraits, artistic newborn photography, beautiful family photos.</p>
      <p>Organic, natural, soulful photography.</p><br />
      <p>By appointments only.</p>

      <div className="footer-uparrow" onClick={scrollToTop}>
      <IoIosArrowRoundUp />
      </div>
    </div>
    );
  };

  const WhoIamMotion = MotionWrap(WhoIam);
  const UpperWhoIamMotion = MotionWrap(UpperWhoIam);
  const WhoIamPhotographyWhoIamMotion = MotionWrap(WhoIamPhotography);
  const MidWhoIamMotion = MotionWrap(MidWhoIam);
  const LowerWhoIamMotion = MotionWrap(LowerWhoIam);
  const UpperFooterWithMotion = MotionWrap(UpperFooter);
  const MidFooterWithMotion = MotionWrap(MidFooter);
  const LowerFooterWithMotion = MotionWrap(LowerFooter);

  const PortfolioPage = () => {
    return (
      <>
        <WhoIamMotion />
        <UpperWhoIamMotion />
        <WhoIamPhotographyWhoIamMotion />
        <MidWhoIamMotion />
        <LowerWhoIamMotion />
        <UpperFooterWithMotion />
        <MidFooterWithMotion />
        <LowerFooterWithMotion />
      </>
    );
  };

export default AppWrap(PortfolioPage, 'WhoIam');