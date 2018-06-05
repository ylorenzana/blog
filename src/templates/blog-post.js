import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import { css } from 'emotion';

import Header from '../components/Header';
import Footer from '../components/Footer';

const blogPost = css({
  display: 'grid',
  gridColumn: '3 / -3',
  gridGap: '1rem 0',
  padding: '1rem',
  lineHeight: '2',
  h1: {
    color: '#222',
  },
  h2: {
    margin: 0,
  },
});

const blogTitle = css({
  marginBottom: 0,
});

const timeStamp = css({
  margin: 0,
});
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <div className="content-wrapper">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Header />
        <article className={blogPost}>
          <h1 className={blogTitle}>{post.frontmatter.title}</h1>
          <p className={timeStamp}>{post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <span>
            <Link to="/">Back to home page</Link>
          </span>
        </article>
        <Footer />
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
