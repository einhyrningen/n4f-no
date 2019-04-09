import React from 'react';
import PropTypes from 'prop-types';
import N4FHeader from './components/N4FHeader';
import N4FFooter from './components/N4FFooter';

function N4FFullWidthLayout({ children }) {
  return (
    <div>
      <N4FHeader />
      {children}
      <N4FFooter />
    </div>
  );
}

N4FFullWidthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default N4FFullWidthLayout;
