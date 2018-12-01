import React from 'react';
import PropTypes from 'prop-types';
import './N4FNav.scss';
import { Link } from 'react-router-dom';
// <div className="n4f-nav__menu-button">Meny</div>

function N4FNav({ className }) {
  return (
    <div className={className}>
      <nav className="n4f-nav">
        <Link to="/" className="n4f-nav__link">Forside</Link>
        <Link to="about-us" className="n4f-nav__link">Om oss</Link>
        <Link to="contact-us" className="n4f-nav__link">Kontakt oss</Link>
        <Link to="member" className="n4f-nav__link">Bli medlem</Link>
      </nav>
    </div>
  );
}

N4FNav.defaultProps = {
  className: '',
};

N4FNav.propTypes = {
  className: PropTypes.string,
};

export default N4FNav;
