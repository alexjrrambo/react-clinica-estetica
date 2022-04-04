import React, { useEffect } from 'react';
import DztImageGalleryComponent from 'reactjs-image-gallery';

import { GalleryContainer } from './styles';

const Gallery = ({ imagesData, title }) => {
  useEffect(() => {
    const onKeydown = e => {
      if (e.key === 'ArrowLeft') {
        let backButton = document.getElementsByClassName('__react_modal_image__icon_menu');
        if (backButton.length > 0) {
          backButton = backButton[0].getElementsByTagName('a');
          backButton[0].click();
        }
      } else if (e.key === 'ArrowRight') {
        let nextButton = document.getElementsByClassName('__react_modal_image__icon_menu');
        if (nextButton.length > 0) {
          nextButton = nextButton[0].getElementsByTagName('a');
          nextButton[nextButton.length === 3 ? 0 : 1].click();
        }
      }
    };
    document.addEventListener('keydown', onKeydown);

    return () => window.removeEventListener('keydown', onKeydown);
  }, []);

  return (
    <GalleryContainer>
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
