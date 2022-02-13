import React from 'react';
import { Link } from 'gatsby';
import get from 'lodash/get';
import { css } from '@emotion/css';
import { graphql } from 'gatsby';

import {
  mq,
  colors,
  mainContent,
  contentWrapper,
} from '../layouts/cssConstants';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

const blogPost = css(
  mq({
    gridColumn: ['2 / -2', '2 / -2', '2 / -2', '2 / -2', '3 / -3'],
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
      <Layout>
        <div className={contentWrapper}>
          <SEO title={siteTitle} />
          <Header />
          <div className={mainContent}>
            {posts.map((post) => {
              if (post.node.path !== '/404/') {
                const title =
                  get(post, 'node.frontmatter.title') || post.node.path;
                return (
                  <div key={post.node.frontmatter.path} className={blogPost}>
                    <Link to={post.node.frontmatter.path}>
                      <h2 className={blogTitle}>{title}</h2>
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
      </Layout>
    );
  }
}

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
