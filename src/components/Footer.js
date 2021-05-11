import React from 'react';
import { css } from 'emotion';

import { colors } from '../layouts/cssConstants';

const footer = css({
  fontSize: '1.2rem',
  gridColumn: '1 / -1',
  color: colors.white,
  display: 'grid',
  placeItems: 'center',
  justifySelf: 'stretch',
  alignSelf: 'stretch',
  textAlign: 'center',
  padding: '0.5rem',
  a: {
    color: colors.lighterBlue,
    borderBottom: '0.12rem solid transparent',
  },
  'a:hover': {
    borderBottom: '0.12rem solid' + colors.lighterBlue,
  },
});

const Footer = () => (
  <footer className={footer}>
    <p>
      This blog was built and is maintained by &nbsp;
      <a href="https://twitter.com/yanglorenzana">Yang Lorenzana</a>, a
      full-stack software developer.
      <br />
      Built with &nbsp;
      <a href="https://www.gatsbyjs.org/">Gatsby.</a>
    </p>
  </footer>
);

export default Footer;
