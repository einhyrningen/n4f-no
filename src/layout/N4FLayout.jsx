import React from 'react';
import PropTypes from 'prop-types';
import N4FHeader from './components/N4FHeader';
import N4FFooter from './components/N4FFooter';
import './N4FLayout.scss';

function N4FLayout({children}) {
  return (
    <div>
      <N4FHeader />
      <div className="n4f-layout">
        {children}
      </div>
      <N4FFooter />
    </div>
  );
}


N4FLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default N4FLayout;
