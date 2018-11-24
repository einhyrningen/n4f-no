import React from 'react';
import N4FNav from './N4FNav.jsx'

function N4FHeader() {
  return <div>
    <header class="n4f-header">
      <div class="n4f-header__logo"></div>
      {N4FNav()}
    </header>
  </div>
}

export default N4FHeader;
