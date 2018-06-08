import React from 'react';
import { css } from 'emotion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import twitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import github from '@fortawesome/fontawesome-free-brands/faGithub';
import linkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import envelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

import { colors } from '../layouts/cssConstants';

const iconBar = css({
  display: 'flex',
  a: {
    margin: '0 0.8rem',
    color: colors.lighterBlue,
    transition: 'all 0.15s ease',
    transform: 'scale(1.1)',
  },
  'a:hover': {
    transform: 'scale(1.2)',
  },
  'a:active': {
    transform: 'scale(1.2)',
  },
});

const IconBar = () => (
  <div className={iconBar}>
    <a href="https://github.com/ylorenzana">
      <FontAwesomeIcon icon={github} size="lg" />
    </a>
    <a href="https://www.linkedin.com/in/yang-lorenzana-0b036911a/">
      <FontAwesomeIcon icon={linkedin} size="lg" />
    </a>
    <a href="https://twitter.com/yanglorenzana">
      <FontAwesomeIcon icon={twitter} size="lg" />
    </a>
    <a href="mailto:ylorenzana95@gmail.com">
      <FontAwesomeIcon icon={envelope} size="lg" />
    </a>
  </div>
);

export default IconBar;
