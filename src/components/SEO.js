import React from 'react';
import Helmet from 'react-helmet';

const SEO = ({ title }) => (
  <Helmet title={title}>
    <html lang="en" />
    <meta
      name="description"
      content="The dev blog of Yang Lorenzana, a full stack developer that loves JavaScript. Blogs about all things dev related. Built using Gatsby.js."
    />
  </Helmet>
);

export default SEO;
