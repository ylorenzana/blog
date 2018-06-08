import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { css } from 'emotion';

import { mq } from '../layouts/cssConstants';
import Header from '../components/Header';
import IconBar from '../components/IconBar';
import Footer from '../components/Footer';

// const contentWrapper = css({
//   minHeight: '100vh',
//   display: 'grid',
//   gridTemplateColumns: 'repeat(8, 1fr)',
//   gridTemplateRows: 'minmax(28vh, auto) auto minmax(10vh, auto)',
//   gridGap: '2rem 1rem',
//   placeItems: 'center',
//   margin: '0',
// });

// const header = css({
//   gridColumn: '1 / -1',
//   gridAutoFlow: 'column',
//   display: 'grid',
//   gridTemplateRows: 'repeat(3, 1fr)',
//   justifySelf: 'stretch',
//   alignSelf: 'stretch',
//   gridAutoFlow: 'rows',
//   placeItems: 'center',
//   background: '#2C3E50',
//   padding: '0.5rem',
//   // gridTemplateRows: 'auto auto',
//   h1: {
//     margin: '0',
//     alignSelf: 'end',
//     color: '#ECF0F1',
//   },
//   nav: {
//     gridColumn: '-1',
//     justifySelf: 'end',
//     marginTop: 0,
//     marginRight: '1.5rem',
//   },
//   span: {
//     color: '#BDC3C7',
//   },
// });

const blogPosts = css(mq({ gridColumn: ['2 / -2', '2 / -2', '3 / -3'] }), {
  display: 'grid',
  justifyItems: 'center',
  gridGap: '1rem 0',
  padding: '1rem',
});

const blogPost = css({
  justifySelf: 'center',
});

const blogTitle = css({
  marginBottom: 0,
});
class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div className="content-wrapper">
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Header />
        <div className={blogPosts}>
          {posts.map(post => {
            if (post.node.path !== '/404/') {
              const title =
                get(post, 'node.frontmatter.title') || post.node.path;
              return (
                <div key={post.node.frontmatter.path} className={blogPost}>
                  <h2 className={blogTitle}>
                    <Link to={post.node.frontmatter.path}>
                      {post.node.frontmatter.title}
                    </Link>
                  </h2>
                  <small>{post.node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                </div>
              );
            }
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 280)
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
