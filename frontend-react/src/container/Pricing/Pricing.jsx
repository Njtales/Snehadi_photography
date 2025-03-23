import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown, IoIosArrowRoundUp } from "react-icons/io";
import { images } from '../../constants';
import Slider from 'react-slick';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Pricing.scss';

const Pricing = () => {
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
                  <a href="/Pricing" className="PageHeader-link">WHO I AM</a>
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

const UpperPricing  = () => {
    return (
        <div className="UpperPricing-container">
          <div className="UpperPricing-image-section">
            <img src={images.myimg} alt="Family on the beach" />
          </div>
          <div className="UpperPricing-text-section">
            <div>An Experience, as Beautiful as the Images</div>
            <p>From the first enquiry to the final delivery of your images, your experience is designed to feel effortless, thoughtful, and truly special. This isn't just about photographs-it's about capturing the essence of your family in a way that feels timeless, emotive, and uniquely yours.</p>
            <p>Expect a seamless, high-end service where every detail is taken care of, so you can simply relax and enjoy the moment. Your session will be calm, natural, and filled with warmth-no awkward posing, just genuine connection and beautifully crafted imagery.</p>
            <p>The investment: The session fee is £200, and Collections start at £600. Clients typically invest between £1,000 and £3,000 in their photography experience, images and artwork.</p>
            <p>For full pricing details and availability, please get in touch. I'd love to create something truly unforgettable for you.</p>
            <a href="/contact" className="UpperPricing-get-in-touch">Book your session now!</a>
          </div>
        </div>
      );
    };

// ===============================================================================================
const MidPricing = () => {
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
                  <a href="/testimonial" className="testimonial-read-more">Read more from the clients.</a>
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
          {/* <hr className="custom-line" /> */}
          </div>
  );
};
 //================================================================================================

// MidPricing

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
          <a href="/contact" className="portfolio-testimonial-button">Book Your Session Now!</a>
        </div>
      </div>
    );
  }; 
//================================================================================================
      
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
            <a href={`/gallery/${category.title.replace(/\s+/g, '').replace(/\//g, '').toLowerCase()}`} key={index}>

              {category.title}
            </a>
          ))}
        </div>
      <a href="/Pricing">WHO I AM</a>
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

  const PricingMotion = MotionWrap(Pricing);
  const UpperPricingMotion = MotionWrap(UpperPricing);
  const MidPricingMotion = MotionWrap(MidPricing);
  const PortfolioCategoryMotion = MotionWrap(PortfolioCategory);
  const UpperFooterWithMotion = MotionWrap(UpperFooter);
  const MidFooterWithMotion = MotionWrap(MidFooter);
  const LowerFooterWithMotion = MotionWrap(LowerFooter);

  const PortfolioPage = () => {
    return (
      <>
        <PricingMotion />
        <UpperPricingMotion />
        <MidPricingMotion />
        <PortfolioCategoryMotion />
        <UpperFooterWithMotion />
        <MidFooterWithMotion />
        <LowerFooterWithMotion />
      </>
    );
  };

export default AppWrap(PortfolioPage, 'Pricing');