'use client';

import React, { useState, useEffect, memo } from 'react';
import { navLinks } from '@/data/services';
import { cn } from '@/lib/utils';

const Navbar: React.FC = memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn('navbar', scrolled && 'navbar--scrolled')}
      id="main-nav"
    >
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="navbar__logo-icon">✦</span>
          <span className="navbar__logo-text">Beauty by Chloe</span>
        </a>

        {/* Desktop links */}
        <div className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'navbar__link',
                link.label === 'Book Now' && 'navbar__link--cta'
              )}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className={cn('navbar__toggle', mobileOpen && 'navbar__toggle--active')}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          id="nav-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn('navbar__mobile', mobileOpen && 'navbar__mobile--open')}>
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            style={{ transitionDelay: `${i * 60}ms` }}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar;
