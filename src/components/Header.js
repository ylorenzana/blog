import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { css } from 'emotion';
import Img from 'gatsby-image';

import { colors } from '../layouts/cssConstants';
import IconBar from '../components/IconBar';

const header = css({
  gridColumn: '1 / -1',
  display: 'grid',
  justifySelf: 'stretch',
  alignSelf: 'stretch',
  gridAutoFlow: 'rows',
  placeItems: 'center',
  padding: '0.5rem',
  h1: {
    margin: '0',
    alignSelf: 'end',
    color: colors.white,
    padding: '0.25rem 2rem',
    textAlign: 'center',
  },
  a: {
    borderBottom: 'none',
  },
  'a:hover': {
    borderBottom: 'none',
  },
});

const logo = css({
  display: 'grid',
  gridAutoFlow: 'rows',
  placeItems: 'center',
  gridGap: '0.5rem',
  margin: '1.5rem 0',
});

const navBar = css({
  gridColumn: '-1',
  justifySelf: 'end',
  marginTop: '1.5rem',
  marginRight: '1.5rem',
  alignSelf: 'start',
  span: {
    textDecoration: 'none',
    borderBottom: '0.15rem solid transparent',
    transition: 'all 0.25s ease-out',
    color: colors.tan,
  },
  'span:hover': {
    borderBottom: '0.15rem solid' + colors.tan,
  },
});

const activeLink = css({
  span: {
    borderBottom: '0.15rem solid' + colors.tan,
  },
});

const pic = css({
  borderRadius: '50%',
  width: '10rem',
  height: '12rem',
});

const Header = ({ avatar }) => (
  <header className={header}>
    <nav className={navBar}>
      <Link to="/about" activeClassName={activeLink}>
        <span>About</span>
      </Link>
    </nav>
    <div className={logo}>
      <Link to={'/'}>
        <Img fixed={avatar} className={pic} />
      </Link>
      <Link to={'/'}>
        <h1>the dev blog of yang lorenzana</h1>
      </Link>
      <IconBar />
    </div>
  </header>
);

export default () => (
  <StaticQuery
    query={graphql`
      query ImageQuery {
        avatar: file(relativePath: { eq: "avatar.png" }) {
          childImageSharp {
            fixed(width: 105) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => <Header avatar={data.avatar.childImageSharp.fixed} />}
  />
);
