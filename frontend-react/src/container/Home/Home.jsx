import React, { useState, useEffect, useRef } from 'react';
import { images } from '../../constants';
import { IoIosArrowBack, IoIosArrowForward,IoIosArrowDown, IoIosArrowRoundUp } from "react-icons/io";
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css'; 
import Slider from 'react-slick';

import './Home.scss';
import './HeaderFooter.scss';
import './HomeAbout.scss'; 
import './HomeTestimonials.scss';
import './HomeContact.scss';

  // ============================================== Home Component ==============================================
const Home = () => {
    const [homes, setHomes] = useState([]);
    const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
    const timeoutRef = useRef(null); 
    const [portCategories, setPortCategories] = useState([]);
  
    useEffect(() => {
        const query = '*[_type == "home"]';
  
        client.fetch(query).then((data) => {
            if (Array.isArray(data)) {
                setHomes(data);
            }
        });
    }, []);

    useEffect(() => {
      const query = '*[_type == "portfoliocategory"]';
  
      client.fetch(query).then((data) => {
        setPortCategories(data);
      });
    }, []);
  
    useEffect(() => {
      const nextBackground = () => {
        setCurrentBackgroundIndex((prevIndex) => 
          prevIndex === homes.length - 1 ? 0 : prevIndex + 1
        );
      };
      timeoutRef.current = setTimeout(nextBackground, 6000);
      return () => clearTimeout(timeoutRef.current);
    }, [currentBackgroundIndex, homes.length]);

    const backgroundStyle = homes.length > 0 ? { 
      backgroundImage: `url(${urlFor(homes[currentBackgroundIndex].imgUrl).url()})` 
    } : {};
  
  return (
    <>
      <div className="home-hero" style={backgroundStyle}>       
        <div className="home-navigation">
          <img 
            src={images.home_left_nav_svg}
            alt="home_left_nav_svg"
            className="home-svg-left-nav" />
            <div className="home-left-nav">            
              <a href="/Portfolio" className="home-navsubmenu-link">PORTFOLIO</a>
              <div className="footer-submenu footer-submenu-common"></div>
                <div className="home-navigation-submenu">
                  {portCategories.map((category, index) => (
                    <a href={`/${category.title.replace(/\s+/g, '').toLowerCase()}`} key={index}>
                      {category.title}
                    </a>
                  ))}
                </div>
                  
              <a href="/WhoIAm" className="home-navsubmenu-link">WHO I AM</a>
              <a  className="home-navsubmenu-link">MORE INFO</a>
                    <div className="home-navigation-submenu">
                      <a href="/testimonial">Kind Words</a>
                      <a href="/pricing">Pricing</a>
                      <a href="/contact">Book</a>
                    </div>
            </div>
            <div className="PageHeaderhome-center-nav">
              <a href="/" className="PageHeaderhome-center-nav-link">
                <img 
                  src={images.child_icon} // child_icon -- sj_logo
                  alt="SNEHAL JATALE PHOTOGRAPHY"
                  className="PageHeaderhome-center-nav-logo" />
                <h1>SNEHAL JATALE</h1><span>PHOTOGRAPHY</span>
                </a>
            </div>
          <div className="home-scroll-indicator">
              <span>SCROLL FOR MORE</span>
              <div className="home-arrowdown"><IoIosArrowDown/></div>
          </div>
          <div className="home-right-nav">
              <img 
              src={images.home_right_nav_svg}
              alt="home_right_nav_svg"
              className="home-svg-right-nav" />
              <a href="/contact" className="home-navsubmenu-link">CONTACT</a>
              <a href="/testimonial" className="home-navsubmenu-link">TESTIMONIALS</a>
          </div>
        </div>
      </div>
    </>
    );  
  }


  // ============================================== About Component ==============================================
const About = () => {
    return (
      <div className="about-container">
          <div className="about-head-nav">
              <div className="about-nav-title">
                  <a href="/gallery">NEW-BORN <br/> PHOTOGRAPHY</a>
                  <a className="about-nav-description" 
                      href="/gallery">Natural. Soulful. Forever</a>
                  
              </div>
  
              <div className="about-nav-midtitle">
                  <a href="/who-i-am">Doha, Qatar</a>
                  <a className="about-nav-description" 
                  href="/who-i-am">Meet the Artist</a>
              </div>
  
              <div className="about-nav-title">
                  <a href="/portfolio" >PORTFOLIO</a>
                  <a className="about-nav-description" 
                  href="/portfolio" >Your story. Real moments. Unposed.</a>
              </div>
          </div>
  
          <div className="about-aboutme-textpic">
              <div className="about-aboutme-wrapper">
                  <div className="about-aboutme-textwrapper">
                      <div className="about-aboutme-text">
                          <span>Hello, I'm Snehal.</span>
                          <p>
                              I fell in love with photography before I turned ten years of age and the rest is history. 
                              I'm obsessed with light and creating film-like images that you will cherish forever. 
                              My goal is to capture your family as it is... the laughter, the magic, the madness. 
                              All of it! That is what makes every family so unique. I cannot wait to meet you!
                          </p>
                      </div>
                  </div>
                  
                  <div className="about-aboutme-picwrapper">
                      <div className="about-aboutme-pic">
                          <img src={images.myimg} alt="Img about me" />
                      </div>
                  </div>
  
              </div>
              
          </div>
      </div>
  
      
    );
  };

  // ============================================== Testimonial Component ==============================================

  // function NextArrow(props) {
  //   const { onClick } = props;
  //   return (
  //     <div className="slick-next" onClick={onClick}>
  //       {'>'} {/* You can replace these with your custom icons or images */}
  //     </div>
  //   );
  // }
  
  // function PrevArrow(props) {
  //   const { onClick } = props;
  //   return (
  //     <div className="slick-prev" onClick={onClick}>
  //       {'<'} {/* You can replace these with your custom icons or images */}
  //     </div>
  //   );
  // }

  const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    const sliderRef = useRef(); 
    const goToNext = () => sliderRef.current.slickNext();
    const goToPrevious = () => sliderRef.current.slickPrev();
  
    useEffect(() => {
      const query = `*[_type == "testimonial"]`;
      client.fetch(query)
        .then((data) => {
          setTestimonials(data);
        })
        .catch(console.error);
    }, []);
  
    if (!testimonials.length) {
      return <div>Loading testimonials...</div>;
    }
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      // nextArrow: <NextArrow />,
      // prevArrow: <PrevArrow />
    };
  
    return (
      <div className="testimonial-container">
        <Slider ref={sliderRef} {...settings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <div className="testimonial-content">
                <div className="testimonial-imagewrapper">
                  <div className="testimonial-image">
                    {testimonial.imgUrl && (
                      <img src={urlFor(testimonial.imgUrl).url()} alt={`${testimonial.name}'s testimonial`} />
                    )}
                    </div>
                </div>
                <div className="testimonial-textwrapper">
                  <div className="testimonial-text">
                    <span>Words of Love from {testimonial.name}.</span>
                    <p>{testimonial.feedback}</p>
                    <a href="/testimonial" className="testimonial-read-more">Read more from the clients.</a>
                  </div>
                </div>
              </div>
  
            </div>
          ))}
        </Slider>

          <div className="testimonial-navigation">
              <IoIosArrowBack onClick={goToPrevious} />
              <IoIosArrowForward onClick={goToNext} />
            </div>
            {/* <hr className="custom-line" /> */}
            </div>
    );
  };


  // ============================================== Contact Component ==============================================

  const navigateToContact = () => {
    window.location.href = '/ContactMe';
  };

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <hr className="divider" />
        <button className="contact-button" onClick={navigateToContact}>Book Now!</button>
        <p className="contact-description">
          Creating heirloom quality art for you. I am based in Doha, Qatar.
          <br /><br />
          I believe babies are beautiful, family is everything and classic photography is something that will never go out of style. My approach is simple and honest.
          No posing. No props. Just your baby and family photographed as they are now, in a style that is timeless and will be treasured for generations to come.
          <br />
        </p>
        
        <p className="contact-services">
        Capturing Life's Precious Moments. Newborn Photography. Baby Photography. Maternity Photography. Family Photography.
        </p>
        <hr className="divider" />
      </div>
    </div>
  );
};

  // ============================================== Footer Component ==============================================
const UpperFooter = () => {
    const [footerImages, setFooterImages] = useState([]);
  
    useEffect(() => {
      const query = '*[_type == "home"]';
  
      client.fetch(query).then((data) => {
        const imageUrls = data.map(doc => doc.imgUrl);
        setFooterImages(imageUrls);
      });      
    }, []);
  
    return (
      <>
      <footer className="footer">
      <a href="https://www.instagram.com/snehaljatale_photography/" target="_blank" className="footer-link">
        <div className="footer-text">
          FOLLOW ME ON INSTAGRAM
          <p>@snehaljatale_photography</p>
        </div>
      </a>
    </footer>
    
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
    </>
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


// Wrap each section with MotionWrap
const HomeWithMotion = MotionWrap(Home);
const AboutWithMotion = MotionWrap(About);
const TestimonialWithMotion = MotionWrap(Testimonial);
const ContactWithMotion = MotionWrap(Contact);
const UpperFooterWithMotion = MotionWrap(UpperFooter);
const MidFooterWithMotion = MotionWrap(MidFooter);
const LowerFooterWithMotion = MotionWrap(LowerFooter);

const HomePage = () => {
  return (
    <>
      <HomeWithMotion />
      <AboutWithMotion />
      <TestimonialWithMotion />
      <ContactWithMotion />
      <UpperFooterWithMotion />
      <MidFooterWithMotion />
      <LowerFooterWithMotion />
    </>
  );
};

export default AppWrap(HomePage, 'Home');
