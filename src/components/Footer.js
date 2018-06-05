import React from 'react';
import { css } from 'react-emotion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import heart from '@fortawesome/fontawesome-free-solid/faHeart';

const footer = css({
  fontSize: '1.20rem',
  gridColumn: '1 / -1',
  background: '#EEE',
  display: 'grid',
  placeItems: 'center',
  justifySelf: 'stretch',
  alignSelf: 'stretch',
  textAlign: 'center',
  padding: '0.5rem',
  p: {
    // margin: '0',
  },
});

const Footer = () => (
  <footer className={footer}>
    <p>
      Built with &nbsp;
      <FontAwesomeIcon icon={heart} color={'crimson'} />
      &nbsp; using <a href="https://www.gatsbyjs.org/">Gatsby.</a>
      <br />
      Written and maintained by Yang Lorenzana, a full stack JS engineer.
    </p>
  </footer>
);

export default Footer;
