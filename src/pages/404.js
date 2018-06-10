import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { css } from 'emotion';

// import avatar from '../assets/avatar.png';
import { colors } from '../layouts/cssConstants';

const wrapper = css({
  minHeight: '100vh',
  display: 'grid',
  placeItems: 'center',
  gridAutoFlow: 'rows',
  background: colors.primaryBlue,
  h1: {
    margin: '1rem',
  },
  a: {
    color: colors.tan,
  },
  'a:hover': {
    borderBottom: '0.2rem solid' + colors.tan,
  },
  img: {
    width: '5.5rem',
    height: '8rem',
  },
});

const message = css({
  textAlign: 'center',
  color: colors.white,
});

const notFound = css({
  fontSize: '10rem',
});

const NotFoundPage = () => (
  <div className={wrapper}>
    <Helmet title="Page cannot be found" />
    <div className={message}>
      <h1 className={notFound}>404</h1>
      <p>Woops! I can't find the page you are looking for.</p>
      <p>
        <Link to="/">&larr; Back to home</Link>
      </p>
    </div>
  </div>
);

export default NotFoundPage;
