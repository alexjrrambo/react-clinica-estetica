import React from 'react';
import DztImageGalleryComponent from 'reactjs-image-gallery';

import { GalleryContainer } from './styles';

const Gallery = ({ imagesData, title }) => {
  console.log('Gallery');

  return (
    <GalleryContainer id="gallery">
      <h4>{title}</h4>
      <DztImageGalleryComponent
        hideRotate
        hideDownload
        images={imagesData}
      />
    </GalleryContainer>
  );
};

export default Gallery;
