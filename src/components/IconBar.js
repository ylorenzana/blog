import React from 'react';
import { css } from 'emotion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import twitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import github from '@fortawesome/fontawesome-free-brands/faGithub';
import linkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import envelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import pdf from '@fortawesome/fontawesome-free-solid/faFilePdf';

import { colors } from '../layouts/cssConstants';
import resume from '../assets/Lorenzana-Resume-Current.pdf';

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

const pdfIcon = css({
  transform: 'scale(1.15)',
});

const IconBar = () => (
  <div className={iconBar}>
    <a href="https://github.com/ylorenzana" title="GitHub Profile">
      <FontAwesomeIcon icon={github} size="lg" />
    </a>
    <a
      href="https://www.linkedin.com/in/yang-lorenzana-0b036911a/"
      title="LinkedIn Profile"
    >
      <FontAwesomeIcon icon={linkedin} size="lg" />
    </a>
    <a href="https://twitter.com/yanglorenzana" title="Twitter">
      <FontAwesomeIcon icon={twitter} size="lg" />
    </a>
    <a href="mailto:ylorenzana95@gmail.com" title="Email">
      <FontAwesomeIcon icon={envelope} size="lg" />
    </a>
    <a href={resume} title="Resume" download="YangLorenzana-Resume">
      <FontAwesomeIcon icon={pdf} className={pdfIcon} />
    </a>
  </div>
);

export default IconBar;
