import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { css } from 'emotion';

import {
  mq,
  colors,
  mainContent,
  contentWrapper,
} from '../layouts/cssConstants';
import Header from '../components/Header';
import Footer from '../components/Footer';

const blogPosts = css(mq({ gridColumn: ['2 / -2', '2 / -2', '3 / -3'] }), {
  display: 'grid',
  justifyItems: 'center',
  height: '100%',
  gridGap: '1rem 0',
  padding: '2rem 25rem',
  background: '#fff',
  borderRadius: '1%',
});

const blogPost = css(
  mq({
    gridColumn: ['2 / -2', '2 / -2', '3 / -3'],
  }),
  {
    justifySelf: 'center',
    a: {
      color: colors.grey,
      fontWeight: 400,
      borderBottom: 'none',
    },
    'a:hover': {
      borderBottom: 'none',
    },
  }
);

const blogTitle = css({
  marginBottom: '0',
  a: {
    color: colors.darkGrey,
    borderBottom: 'none',
  },
  'a:hover': {
    borderBottom: 'none',
  },
});
class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div className={contentWrapper}>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Header />
        <div className={mainContent}>
          {posts.map(post => {
            if (post.node.path !== '/404/') {
              const title =
                get(post, 'node.frontmatter.title') || post.node.path;
              return (
                <div key={post.node.frontmatter.path} className={blogPost}>
                  <Link to={post.node.frontmatter.path}>
                    <h2 className={blogTitle}>{post.node.frontmatter.title}</h2>
                    <small>{post.node.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                    />
                  </Link>
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
