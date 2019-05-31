import React from 'react';
import { Link } from 'gatsby';
import N4FNav from './N4FNav';
import N4FLogo from './N4FLogo';
import './N4FHeader.scss';

function N4FHeader() {
  return (
    <div>
      <header className="n4f-header">
        <div className="n4f-header__inner">
          <Link to="/">
            <N4FLogo className="n4f-header__inner-logo" fill="#FFFFFF" />
          </Link>
          <N4FNav className="n4f-header__inner-nav" />
        </div>
      </header>
    </div>
  );
}

export default N4FHeader;
