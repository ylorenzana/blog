import React from 'react';
import { css } from 'react-emotion';

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
      Built with ❤️ using <a href="https://www.gatsbyjs.org/">Gatsby.</a>
      <br />
      Written, and maintained by Yang Lorenzana, a full stack JS engineer.
    </p>
  </footer>
);

export default Footer;
