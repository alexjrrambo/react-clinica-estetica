import React from 'react';
import { Route } from 'react-router-dom';
import HelmetTags from '../../components/HemletTags';

export const CustomRoute = ({ title, content, ...props }) => (
  <>
    <HelmetTags
      title={title}
      content={content}
    />
    <Route
      {...props}
    />
  </>
);
