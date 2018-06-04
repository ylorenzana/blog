import React from 'react';
import Link from 'gatsby-link';
import { css } from 'emotion';

import proPic from './propicv2.jpg';
import IconBar from '../components/IconBar';

const header = css({
  gridColumn: '1 / -1',
  gridAutoFlow: 'column',
  display: 'grid',
  // gridTemplateRows: 'repeat(2, 1fr)',
  justifySelf: 'stretch',
  alignSelf: 'stretch',
  gridAutoFlow: 'rows',
  placeItems: 'center',
  background: '#2C3E50',
  padding: '0.5rem',
  // gridTemplateRows: 'auto auto',
  h1: {
    margin: '0',
    alignSelf: 'end',
    color: '#ECF0F1',
  },
  nav: {
    gridColumn: '-1',
    justifySelf: 'end',
    marginTop: '1.5rem',
    marginRight: '1.5rem',
    alignSelf: 'start',
  },
  span: {
    color: '#BDC3C7',
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
  span: {
    textDecoration: 'none',
    borderBottom: '0.15rem solid transparent',
    color: '#BDC3C7',
    transition: 'all 0.25s ease-out',
  },
  'span:hover': {
    borderBottom: '0.15rem solid #BDC3C7',
  },
});

const activeLink = css({
  span: {
    borderBottom: '0.15rem solid #BDC3C7',
  },
});

const pic = css({
  borderRadius: '50%',
  width: '17rem',
});

const Header = () => (
  <header className={header}>
    <nav className={navBar}>
      <Link to="/about" activeClassName={activeLink}>
        <span>About</span>
      </Link>
    </nav>
    <div className={logo}>
      <img
        src={proPic}
        alt="A picture of Yang Lorenzana in a stylish hat!"
        className={pic}
      />
      <Link to={'/'}>
        <h1>the blog of yanglorenzana</h1>
      </Link>
      <IconBar />
    </div>
  </header>
);

export default Header;
