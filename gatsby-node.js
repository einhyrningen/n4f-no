const path = require('path');

const GalleryFragment = `
fragment GalleryFragment on PrismicPageBodyImageGallery {
    id
    slice_type
    items {
        gallery_image {
            alt
            copyright
            dimensions {
            height
            width
            }
            url
        }
    }
}
`;

const TextFragment = `
fragment TextFragment on PrismicPageBodyText {
    id
    slice_type
    primary {
        text {
            html
            raw{
              type
              text
            }
        }
    }
}
`;

const HighlightFragment = `
fragment HighlightFragment on PrismicPageBodyHighlight {
    id
    slice_type
    primary {
        text {
            html
        }
    }
}
`;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicPage {
        edges {
          node {
            id
            slugs
            type
            uid
            href
            data {
              title {
                text
              }
              body {
                ...GalleryFragment
                ...TextFragment
                ...HighlightFragment
              }
            }
          }
        }
      }
    }
    ${GalleryFragment}
    ${TextFragment}
    ${HighlightFragment}
  `);

  const template = path.resolve('src/pages/page.jsx');

  pages.data.allPrismicPage.edges.forEach(edge => {
      console.log(edge);
    createPage({
      path: `/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
        data: edge.node.data
      }
    });
  });
};
