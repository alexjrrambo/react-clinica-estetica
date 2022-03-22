import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetTags = ({ title, content }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={content} />
  </Helmet>
);

export default HelmetTags;
