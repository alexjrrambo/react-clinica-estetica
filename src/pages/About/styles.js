import styled from 'styled-components';

export const MainContainer = styled.section`
  min-height: calc(100vh - 12rem);
  display: flex;
  margin: 9rem 5rem 0 5rem;

  > div {
    margin: 2rem;
  }

  @media (max-width: 1250px) {
    //flex-direction: column;
  }
`;

export const ContentLeft = styled.div`
  flex: 2;
`;

export const ContentRight = styled.div`
  height: 20rem;

  .image-wrapper {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
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
    width: 400px
  }

  .left {
    -webkit-transform: skew(-80deg) translateX(1000px);
        -ms-transform: skew(-80deg) translateX(1000px);
            transform: skew(-80deg) translateX(1000px);
    right: 0;
  }
`;