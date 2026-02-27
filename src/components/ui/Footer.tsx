'use client';

import React, { memo } from 'react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">✦</span>
              <span className="footer__logo-text">Beauty by Chloe</span>
            </div>
            <p className="footer__description">
              Where luxury meets artistry. A sanctuary of beauty, wellness, and transformation.
            </p>
            <div className="footer__social">
              {['Instagram', 'Facebook', 'Pinterest', 'TikTok'].map((name) => (
                <a key={name} href="#" className="footer__social-link" aria-label={name}>
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h4 className="footer__heading">Experience</h4>
            <ul className="footer__list">
              {['The Spa', 'Tanning Suite', 'Hair Studio', 'Nail Bar', 'Facial Room'].map((item) => (
                <li key={item}>
                  <a href="#services" className="footer__link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="footer__column">
            <h4 className="footer__heading">Information</h4>
            <ul className="footer__list">
              {['About Us', 'Careers', 'Gift Cards', 'Membership', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="footer__link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__column">
            <h4 className="footer__heading">Visit Us</h4>
            <div className="footer__contact">
              <p>42 Mayfair Lane<br />London, W1K 3AB</p>
              <p>
                <a href="tel:+442071234567" className="footer__link">+44 (0)20 7123 4567</a>
              </p>
              <p>
                <a href="mailto:hello@beautybychloe.com" className="footer__link">hello@beautybychloe.com</a>
              </p>
              <p className="footer__hours">
                Mon–Sat: 9:00–21:00<br />
                Sun: 10:00–18:00
              </p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Beauty by Chloe. All rights reserved.</p>
          <p className="footer__crafted">Crafted with ✦ in London</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
