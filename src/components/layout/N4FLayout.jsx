import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as T from 'prop-types';
import N4FHeader from './components/N4FHeader';
import N4FFooter from './components/N4FFooter';
import Slice from '../Slice/Slice';
import './N4FLayout.scss';

function N4FLayout({ children }) {
  /**
   * @todo Clean up N4FLayout component
   * @body This needs a bit of cleaning/clearing
   */

  // const { allPrismicPage: { edges: [,{ node: { data } }] } } = useStaticQuery(graphql`
  //   {
  //     allPrismicPage {
  //       edges {
  //         node {
  //           data {
  //             body {
  //               ... on PrismicPageBodyImageGallery {
  //                 id
  //                 items {
  //                   gallery_image {
  //                     alt
  //                     copyright
  //                     localFile {
  //                       url
  //                       childImageSharp {
  //                         fluid(maxWidth: 600) {
  //                           aspectRatio
  //                           base64
  //                           originalImg
  //                           originalName
  //                           presentationHeight
  //                           presentationWidth
  //                           sizes
  //                           src
  //                           srcSet
  //                           srcSetWebp
  //                           srcWebp
  //                           tracedSVG
  //                         }
  //                       }
  //                     }
  //                   }
  //                 }
  //                 slice_type
  //                 primary {
  //                   name_of_the_gallery {
  //                     text
  //                   }
  //                 }
  //               }
  //               ... on PrismicPageBodyText {
  //                 id
  //                 slice_type
  //                 primary {
  //                   text {
  //                     html
  //                     text
  //                     raw {
  //                       text
  //                       type
  //                     }
  //                   }
  //                 }
  //               }
  //               ... on PrismicPageBodyText1 {
  //                 id
  //                 primary {
  //                   text {
  //                     html
  //                     text
  //                     raw {
  //                       text
  //                       type
  //                     }
  //                   }
  //                 }
  //                 slice_type
  //               }
  //             }
  //             title {
  //               text
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <div>
      <N4FHeader />
      {/*<Slice body={data.body} />*/}
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
