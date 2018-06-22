import React from 'react';
import get from 'lodash/get';
import { css } from 'emotion';

import { mq, mainContent, contentWrapper } from '../layouts/cssConstants';
import Header from '../components/Header';
import SEO from '../components/SEO';
import HomeButton from '../components/HomeButton';
import Footer from '../components/Footer';

const blogPost = css(mq({ gridColumn: ['2 / -2', '2 / -2', '3 / -3'] }), {
  padding: '1rem',
  lineHeight: '2',
  maxWidth: '100%',
  h1: {
    color: '#222',
  },
  'h3, h4': {
    marginBottom: '0.25rem',
  },
  hr: {
    margin: '4rem 0',
    width: '100%',
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
      <div className={contentWrapper}>
        <SEO title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Header />
        <div className={mainContent}>
          <article className={blogPost}>
            <div>
              <h1 className={blogTitle}>{post.frontmatter.title}</h1>
              <p className={timeStamp}>{post.frontmatter.date}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <HomeButton />
            <hr />
            <div>
              Hey! I'm{' '}
              <a href="https://twitter.com/yanglorenzana">@yanglorenzana</a>. I
              like to build cool stuff. AMA on Twitter, or simply stop by to say
              hi!
            </div>
          </article>
        </div>
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
