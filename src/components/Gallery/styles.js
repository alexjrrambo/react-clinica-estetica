import styled from 'styled-components';

export const GalleryContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;

  h4 {
    margin: 2rem 0 0 0;
    color: #59593D;
  }

  && {
    > div {
      background: #fff;
      min-height: auto;
    }

    div > img {
      opacity: 1;

      :not(.__react_modal_image__medium_img) {
        :hover {
          opacity: 0.5;
        }
      }
    }

    figcaption {
      display: none;
    }

    .__react_modal_image__caption {
      display: none;
    }
  }
`;
