import React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';

import { colors } from '../layouts/cssConstants';
import avatar from '../assets/avatar.png';
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

const Header = () => (
  <header className={header}>
    <nav className={navBar}>
      <Link to="/about" activeClassName={activeLink}>
        <span>About</span>
      </Link>
    </nav>
    <div className={logo}>
      <Link to={'/'}>
        <img
          src={avatar}
          alt="A drawing of Yang Lorenzana in a stylish hoodie!"
          className={pic}
        />
      </Link>
      <Link to={'/'}>
        <h1>the dev blog of yang lorenzana</h1>
      </Link>
      <IconBar />
    </div>
  </header>
);

export default Header;
