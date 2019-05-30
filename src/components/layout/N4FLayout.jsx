import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import * as T from 'prop-types';
import N4FHeader from './components/N4FHeader';
import N4FFooter from './components/N4FFooter';
import './N4FLayout.scss';

function N4FLayout({children}) {

  const pages = useStaticQuery(graphql`
    {
      allPrismicPage {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  console.log(pages);

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
  children: T.node.isRequired,
};

export default N4FLayout;
