import React, { useState, useEffect, useRef } from 'react';
import { images } from '../../../constants';
import { IoIosArrowBack, IoIosArrowForward,IoIosArrowDown, IoIosArrowRoundUp } from "react-icons/io";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { urlFor, client } from '../../../client';
import Slider from 'react-slick';
import { AppWrap, MotionWrap } from '../../../wrapper';

import './Cakesmash.scss';

const Cakesmash = () => {
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
              <a href="/testimonial">TESTIMONIAL</a>
            </div>
          </nav>
      </div>
    </>
  );
};


function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-next" onClick={onClick}>
      {'>'} {/* You can replace these with your custom icons or images */}
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-prev" onClick={onClick}>
      {'<'} {/* You can replace these with your custom icons or images */}
    </div>
  );
}

const UpperCakesmash = () => {
  const [Cakesmash, setCakesmash] = useState([]);
  const sliderRef = useRef(); 
  const goToNext = () => sliderRef.current.slickNext();
  const goToPrevious = () => sliderRef.current.slickPrev();
  
  useEffect(() => {
    const query = `*[_type == "cakesmash"]`;
    client.fetch(query)
      .then((data) => {
        setCakesmash(data);
      })
      .catch(console.error);
  }, []);

  if (!Cakesmash.length) {
    return <div>Loading Cakesmash...</div>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (



    <div className="cakesmash-slider">
    <div className="cakesmash-headline">
      <p className="cakesmash-headline_title">"Stop looking and book her. No one else compares!"</p>
      <p className="cakesmash-headline_author"> - Nikhil & Sayli</p>
    </div>
      <Slider ref={sliderRef} {...settings} className="cakesmash-slider">
        {Cakesmash.map((cakesmash, index) => (
          <div key={index} className="cakesmash-slide">
            <div className="cakesmash-content">
              <div className="cakesmash-text-content">
                <p className="cakesmash-author">{cakesmash.name}</p>
                <p className="cakesmash-quote">"{cakesmash.feedback}"</p>
              </div>
              <div className="cakesmash-image">
                {cakesmash.imgUrl && (               
                  <img src={urlFor(cakesmash.imgUrl).url()} alt={`${cakesmash.name}'s cakesmash`} />
                )}
              </div>
            </div>
          </div>
          
        ))}
      </Slider>
      <div className="cakesmash-navigation">
        <HiOutlineArrowNarrowLeft onClick={goToPrevious} />
        <HiOutlineArrowNarrowRight onClick={goToNext} />
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
      <a href="/testimonial">TESTIMONIAL</a>
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
      <p>© 2024 Snehal Jatale Photography | PH: 07753 918384</p><br />
      <p>Snehal Jatale is an award-winning newborn photographer, maternity photographer, family photographer, and baby photographer based in Doha, Qatar. Snehal offers timeless pregnancy portraits, artistic newborn photography, beautiful family photos.</p>
      <p>Organic, natural, soulful photography.</p><br />
      <p>By appointments only.</p>

      <div className="footer-uparrow" onClick={scrollToTop}>
      <IoIosArrowRoundUp />
      </div>
    </div>
    );
  };
  
  const CakesmashMotion = MotionWrap(Cakesmash);
  const UpperCakesmashMotion = MotionWrap(UpperCakesmash);
  const UpperFooterWithMotion = MotionWrap(UpperFooter);
  const MidFooterWithMotion = MotionWrap(MidFooter);
  const LowerFooterWithMotion = MotionWrap(LowerFooter);

  const cakesmashPage = () => {
    return (
      <>
        <CakesmashMotion />
        <UpperCakesmashMotion />
        <UpperFooterWithMotion />
        <MidFooterWithMotion />
        <LowerFooterWithMotion />
      </>
    );
  };

export default AppWrap(cakesmashPage, 'cakesmash');