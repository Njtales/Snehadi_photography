import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown, IoIosArrowRoundUp } from "react-icons/io";
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Portfolio.scss';

const Portfolio = () => {
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
                      <a href={`/gallery/${category.title.replace(/\s+/g, '').replace(/\//g, '').toLowerCase()}`} key={index}>

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
                      {/* <a href="/pricing">Pricing</a> */}
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
                {/* <h1>SNEHAL JATALE</h1><span>PHOTOGRAPHY</span> */}
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

const PortfolioContent  = () => {
  return (
      <div className="portfolio-content">
        <div>PORTFOLIO</div>
        <p>
        Welcome to my Portfolio, where every image tells a story—a glimpse into life’s most cherished moments. Specializing in capturing love, connection, and authenticity, I believe in preserving emotions in a timeless and natural style. My goal is to create photographs that reflect the warmth of your journey, turning fleeting moments into lasting memories.
<br/>
        </p>
        <span>
        If my work speaks to you, I would be honored to document your story with artistry and heart.
        </span>
      </div>
    );
  };


  const PortfolioCategory = () => {
    const [portCategories, setPortCategories] = useState([]);
  
    useEffect(() => {
      const query = '*[_type == "portfoliocategory"]';
  
      client.fetch(query).then((data) => {
        setPortCategories(data);
      });
    }, []);
  
    return (
      <div className="portfolio-category">
        <div className="portfolio-images">
          {portCategories.map((category, index) => (
            <div className="portfolio-image-item" key={index}>
              {category.imgUrl && (
                <img 
                  src={urlFor(category.imgUrl).url()} 
                  alt={`Category Image ${index + 1}`}
                  className="portfolio-footer-image"
                />
              )}
              <div className="portfolio-image-info">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>

      <div className="portfolio-category-content">
          <a href="testimonial" className="portfolio-testimonial-button">Find out what other clients have to say about their experience!</a>
          <p>
          I believe babies and children are perfect just the way they are. That is why I keep things simple. My sessions are laid back, with an emphasis on natural, safe posing for newborn and babies, and relaxed, fun sessions for older children and families. My goal is to create timeless images of your child and family that will be cherished forever.</p>
        </div>
      </div>
    );
  }; 

const PortfolioFooter  = () => {
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

 const Portfoliofooternav  = () => {
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
              <a href={`/gallery/${category.title.replace(/\s+/g, '').replace(/\//g, '').toLowerCase()}`} key={index}>

                {category.title}
              </a>
            ))}
          </div>
        <a href="/whoiam">WHO I AM</a>
          <a  className="footer-link">MORE INFO</a>
          <div className="footer-moreinfo-submenu footer-submenu-common">
            <a href="/testimonial">Kind Words</a>
            {/* <a href="/pricing">Pricing</a> */}
            <a href="/contact">Book</a>
          </div>
        <a href="/contact">CONTACT</a>
        <a href="/Testimonial">TESTIMONIALS</a>
      </div>
    );
  };

const Portfoliofooterinfo = () => {

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

  const PortfolioMotion = MotionWrap(Portfolio);
  const PortfolioContentMotion = MotionWrap(PortfolioContent);
  const PortfolioCategoryMotion = MotionWrap(PortfolioCategory);
  const PortfolioFooterMotion = MotionWrap(PortfolioFooter);
  const PortfoliofooternavMotion = MotionWrap(Portfoliofooternav);
  const PortfoliofooterinfoMotion = MotionWrap(Portfoliofooterinfo);

  const PortfolioPage = () => {
    return (
      <>
        <PortfolioMotion />
        <PortfolioContentMotion />
        <PortfolioCategoryMotion />
        <PortfolioFooterMotion />
        <PortfoliofooternavMotion />
        <PortfoliofooterinfoMotion />
      </>
    );
  };

export default AppWrap(PortfolioPage, 'portfolio');