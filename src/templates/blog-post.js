import React from 'react';
import get from 'lodash/get';
import { css } from 'emotion';

import {
  mq,
  mainContent,
  contentWrapper,
  colors,
} from '../layouts/cssConstants';
import Header from '../components/Header';
import SEO from '../components/SEO';
import HomeButton from '../components/HomeButton';
import Footer from '../components/Footer';

const blogPost = css(
  mq({ gridColumn: ['2 / -2', '2 / -2', '2 / -2', '2 / -2', '3 / -3'] }),
  {
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
  }
);

const blogTitle = css({
  marginBottom: 0,
});

const timeStamp = css({
  margin: 0,
});

const twitterHandle = css({
  color: colors.primaryBlue,
  padding: '0.1rem',
  border: 'none',
  ':hover': {
    backgroundColor: colors.lighterBlue,
    border: 'none',
  },
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
              Hey! I'm Yang Lorenzana. I like to build cool stuff! You should
              follow me on{' '}
              <a
                className={twitterHandle}
                href="https://twitter.com/yanglorenzana"
              >
                Twitter
              </a>
              . I welcome all conversations and reply to everyone {''}
              <span role="img" aria-label="A grinning emoji">
                😁
              </span>
              !
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
