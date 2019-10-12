const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pages = await graphql(`
    {
      allWordpressPost {
        nodes {
          id
          title
          slug
          content
          excerpt
          categories {
            slug
          }
        }
      }
    }
  `);

  /*
    Featured Media 👇
    (Test API does not have *any* media)

  featured_media {
    localFile {
      childImageSharp {
        fixed(width: 10) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  */

  const postParentSlug = ({ id, categories }) => {
    return categories.filter(s => s !== 'uncategorized')
      ? categories
          .map(s => s.slug)
          .filter(s => s !== 'uncategorized')
          .join('/')
      : `${id}/`;
  };

  pages.data.allWordpressPost.nodes.forEach(node =>
    createPage({
      path: `/${postParentSlug(node)}/${node.slug}`,
      component: path.resolve('src/pages/page.jsx'),
      context: { uid: node.id, data: node },
    })
  );
};
