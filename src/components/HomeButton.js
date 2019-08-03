import React from 'react';
import { css } from 'emotion';
import { Link } from 'gatsby';

const button = css({
  display: 'inline-block',
  marginTop: '1rem',
});

const HomeButton = () => (
  <div className={button}>
    <Link to="/">&larr; Back to home page</Link>
  </div>
);

export default HomeButton;
