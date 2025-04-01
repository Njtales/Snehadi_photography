import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

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
import SocialIcons from '../../container/Socialicons/Socialicons';

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
              {/* <div className="footer-submenu footer-submenu-common"></div> */}
                <div className="home-navigation-submenu submenu-portfolio">
                  {portCategories.map((category, index) => (
                    <a href={`/gallery/${category.title.replace(/\s+/g, '').replace(/\//g, '').toLowerCase()}`} key={index}>

                      {category.title}
                    </a>
                  ))}
                </div>
                  
              <a href="/WhoIAm" className="home-navsubmenu-link">WHO I AM</a>
              <a  className="home-navsubmenu-link">MORE INFO</a>
                    <div className="home-navigation-submenu submenu-moreinfo">
                      <a href="/testimonial">Kind Words</a>
                      {/* <a href="/pricing">Pricing</a> */}
                      <a href="/contact">Book</a>
                    </div>
            </div>
            <div className="PageHeaderhome-center-nav">
              <a href="/" className="PageHeaderhome-center-nav-link">
                <img 
                  src={images.child_icon} // child_icon -- sj_logo
                  alt="SNEHAL JATALE PHOTOGRAPHY"
                  className="PageHeaderhome-center-nav-logo" />
                {/* <h1>BABY BLISS</h1><span>STUDIO</span> */}
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
              <a href="/testimonial" className="home-navsubmenu-link">TESTIMONIALS</a>   {/* className="home-navsubmenu-link" */}
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
                  <a href="/WhoIAm">Doha, Qatar</a>
                  <a className="about-nav-description" 
                  href="/WhoIAm">Meet the Artist</a>
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
                            Motherhood is a story of fleeting moments- quiet anticipation, tender first embraces, and the beautiful chaos of family life. My work is about preserving these moments with a soft, film-like aesthetic that feels timeless from the very first glance. <br/><br/>
                            With a relaxed and effortless approach, I create images that are elegant yet deeply personal- where the focus is on connection, not posing. Whether in the glow of pregnancy or the delicate early days of newborn life, I capture the essence of your family in a way that is both artistic and true to you.<br/><br/>
                            Sessions take place in the comfort of your home, where your love naturally unfolds. If you're looking for photography that is understated, emotive, and beautifully crafted, I'd love to create something unforgettable for you.
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
              <div className="testimonial-textwrapper">
                <div className="testimonial-text">
                  <span>Words of Love from {testimonial.name}.</span>
                  <p>{testimonial.feedback}</p>
                  <a href="/testimonial" className="testimonial-read-more">Read more</a>
                </div>
              </div>
              <div className="testimonial-imagewrapper">
                <div className="testimonial-image">
                  {testimonial.imgUrl && (
                    <img src={urlFor(testimonial.imgUrl).url()} alt={`${testimonial.name}'s testimonial`} />
                  )}
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
            </div>
    );
  };


  // ============================================== Contact Component ==============================================

  const navigateToContact = () => {
    window.location.href = '/contact';
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


// Wrap each section with MotionWrap
const HomeWithMotion = MotionWrap(Home);
const AboutWithMotion = MotionWrap(About);
const TestimonialWithMotion = MotionWrap(Testimonial);
const ContactWithMotion = MotionWrap(Contact);
const UpperFooterWithMotion = MotionWrap(UpperFooter);
const MidFooterWithMotion = MotionWrap(MidFooter);
const SocialIconsWithMotion = MotionWrap(SocialIcons);
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
      <SocialIconsWithMotion />
      <LowerFooterWithMotion />
    </>
  );
};

export default AppWrap(HomePage, 'Home');
