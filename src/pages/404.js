import React from 'react';
import Link from 'gatsby-link';
import { css } from 'emotion';

const wrapper = css({
  minHeight: '100vh',
  display: 'grid',
  placeItems: 'center',
  gridAutoFlow: 'rows',
});

const message = css({
  textAlign: 'center',
});

const notFound = css({
  fontSize: '10rem',
});

const NotFoundPage = () => (
  <div className={wrapper}>
    <div className={message}>
      <h1 className={notFound}>404</h1>
      <p>Woops! The page you are looking for can't be found.</p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  </div>
);

export default NotFoundPage;
