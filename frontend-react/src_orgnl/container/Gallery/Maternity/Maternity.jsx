import React, { useState, useEffect, useRef } from 'react';
import { images } from '../../../constants';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward,IoIosArrowDown, IoIosArrowRoundUp } from "react-icons/io";

import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { urlFor, client } from '../../../client';
import Slider from 'react-slick';
import { AppWrap, MotionWrap } from '../../../wrapper';
import Masonry from 'react-masonry-css';
import './Maternity.scss';

const Maternity = () => {
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
                  </a>
              </div>

            <div className="PageHeader-right-nav">
            <img 
                src={images.portfolio_right_nav_svg}
                alt="portfolio_right_nav_svg"
                className="PageHeader-svg-right-nav" />
              <a href="#/contact">CONTACT</a>
              <a href="#/testimonial">TESTIMONIAL</a>
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

const UpperMaternity = () => {
  const [maternityImages, setMaternityImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const query = `*[_type == "maternityGallery"]`;
    client.fetch(query)
      .then((data) => {
        setMaternityImages(data);
      })
      .catch(console.error);
  }, []);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  if (!maternityImages.length) {
    return <div>Loading Maternity Gallery...</div>;
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <div className="masonry-gallery">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {maternityImages.map((item, index) => (
            <div key={index} className="masonry-item"
              onClick={() => {
                setSelectedImage(index);
                setIsModalOpen(true);
              }}
            >
              {item.imgUrl && (
                <img
                  loading="lazy"
                  src={urlFor(item.imgUrl).width(1200).quality(75).url()}
                  alt={item.altText || item.title}
                />
              )}
              {item.title && <p className="image-title">{item.title}</p>}
            </div>
          ))}
        </Masonry>
      </div>
  
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <button className="modal-arrow left" onClick={(e) => {
            e.stopPropagation();
            setSelectedImage((prev) =>
              prev === 0 ? maternityImages.length - 1 : prev - 1
            );
          }}>
            <MdArrowBackIos  />
          </button>
  
          <img
            src={urlFor(maternityImages[selectedImage].imgUrl).width(1600).quality(90).url()}
            alt="Enlarged"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
  
          <button className="modal-arrow right" onClick={(e) => {
            e.stopPropagation();
            setSelectedImage((prev) =>
              prev === maternityImages.length - 1 ? 0 : prev + 1
            );
          }}>
            <MdArrowForwardIos />
          </button>
        </div>
      )}
    </>
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
          <a href="#/contact">Book</a>
        </div>
      <a href="#/contact">CONTACT</a>
      <a href="#/testimonial">TESTIMONIAL</a>
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
  
  const MaternityMotion = MotionWrap(Maternity);
  const UpperMaternityMotion = MotionWrap(UpperMaternity);
  const UpperFooterWithMotion = MotionWrap(UpperFooter);
  const MidFooterWithMotion = MotionWrap(MidFooter);
  const LowerFooterWithMotion = MotionWrap(LowerFooter);

  const maternityPage = () => {
    return (
      <>
        <MaternityMotion />
        <UpperMaternityMotion />
        <UpperFooterWithMotion />
        <MidFooterWithMotion />
        <LowerFooterWithMotion />
      </>
    );
  };

export default AppWrap(maternityPage, 'maternity');