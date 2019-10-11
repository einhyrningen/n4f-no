const path = require('path');

const GalleryFragment = type => `
fragment GalleryFragment on Prismic${type}BodyImageGallery {
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

const TextFragment = type => `
fragment TextFragment on Prismic${type}BodyText {
    id
    slice_type
    primary {
        text {
          html
          raw {
            text
            type
          }
          text
        }
    }
}
`;

const HighlightFragment = type => `
fragment HighlightFragment on Prismic${type}BodyHighlight {
    id
    slice_type
    primary {
      text {
        html
        raw {
          text
          type
        }
        text
      }
    }
}
`;

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   /**
//    * Static Pages
//    */

//   const pages = await graphql(`
//     {
//       allPrismicPage {
//         edges {
//           node {
//             id
//             slugs
//             type
//             uid
//             href
//             data {
//               title {
//                 text
//               }
//               body {
//                 ...GalleryFragment
//                 ...TextFragment
//                 ...HighlightFragment
//               }
//             }
//           }
//         }
//       }
//     }
//     ${GalleryFragment('Page')}
//     ${TextFragment('Page')}
//     ${HighlightFragment('Page')}
//   `);

//   const templatePage = path.resolve('src/pages/page.jsx');

//   pages.data.allPrismicPage.edges.forEach((edge) => {
//     createPage({
//       path: `/${edge.node.uid}`,
//       component: templatePage,
//       context: {
//         uid: edge.node.uid,
//         data: edge.node.data,
//       },
//     });
//   });

//   /**
//    * Posts
//    */

//   const posts = await graphql(`
//     {
//       allPrismicPost {
//         edges {
//           node {
//             id
//             slugs
//             type
//             uid
//             href
//             data {
//               title {
//                 text
//               }
//               body {
//                 ...GalleryFragment
//                 ...TextFragment
//                 ...HighlightFragment
//               }
//             }
//           }
//         }
//       }
//     }
//     ${GalleryFragment('Post')}
//     ${TextFragment('Post')}
//     ${HighlightFragment('Post')}
//   `);

//   console.log(posts);

//   const templatePost = path.resolve('src/pages/page.jsx');

//   posts.data.allPrismicPost.edges.forEach((edge) => {
//     createPage({
//       path: `/blog/${edge.node.uid}`,
//       component: templatePost,
//       context: {
//         uid: edge.node.uid,
//         data: edge.node.data,
//       },
//     });
//   });
// };
