import React from 'react';
import './Socialicons.scss';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';

const Socialicons = () => {
  return (
    <div className="floating-social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a href="https://www.instagram.com/snehaljatale_photography/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="tel:+97450530042"><MdPhone /></a>
      <a href="https://wa.me/97450530042" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      <a href="mailto:sneh.photography1512@gmail.com"><MdEmail /></a>
    </div>
  );
};

export default Socialicons;
