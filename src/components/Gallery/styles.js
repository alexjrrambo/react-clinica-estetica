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
    font-size: 1.5rem;
    position: relative;
    font-weight: 300;
    -webkit-transition: all 0.4s ease 0s;
    -o-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;
    text-align:center;

    :before {
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 80px;
      height: 2px;
      content: "";
      background-color: #59593D;
      left:50%;
      margin-left:-40px;
    }

  }

  && {
    > div {
      background: #fff;
      min-height: auto;
    }

    div > img {
      opacity: 1;

      :not(.__react_modal_image__medium_img) {
        transition: transform .5s ease;

        :hover {
          opacity: 0.9;
          transform: scale(1.05);
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
