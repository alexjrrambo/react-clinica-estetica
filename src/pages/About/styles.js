import styled from 'styled-components';

export const MainContainer = styled.section`
  background: #cccac7;
  min-height: calc(100vh - 12rem);
`;

export const MainContent = styled.div`
  background: #cccac7;
  min-height: calc(100vh - 12rem);
  display: flex;
  margin: 9rem 5rem 0 5rem;

  > div {
    margin: 2rem;

    :last-child {
      @media (max-width: 1024px) {
        margin: 1rem;
      }
    }
  }

  @media (max-width: 1024px) {
    margin: 2rem 0 0 0;
    flex-direction: column;
  }
`;

export const ContentLeft = styled.div`
  flex: 2;

  span {
    line-height: 25px;
  }

  h1 {
    margin-bottom: 2rem;
  }
`;

export const ContentRight = styled.div`
  height: 25rem;

  .image-wrapper {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    @media (max-width: 1024px) {
      height: 20rem;
      width: 20rem;
    }
  }

  .image-wrapper > img {
    width: 100%;
    height: 100%;
  }

  .cut {
    background: #59593D; /* A cor dos elementos antes e depois */
    display: block;
    top: 0; bottom: 0;
    position: absolute;
    width: 500px
  }

  .left {
    -webkit-transform: skew(-80deg) translateX(1260px);
        -ms-transform: skew(-80deg) translateX(1260px);
            transform: skew(-80deg) translateX(1260px);
    right: 0;

    @media (max-width: 1024px) {
      right: 180px;
    }
  }
`;
