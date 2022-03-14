import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;

    font-family: "Raleway", sans-serif;
  }

  html, body, #root {
    height: 100%;
    font-size: 16px;

    .mobile-hide {
      @media (max-width: 1250px) {
        display: none;
      }
    }
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Helvetica, sans-serif;
    font-size: 25px;
    color: #011721;
    background: #fff;
  }

  h1 {
    margin: 1rem 0px;
    font-size: 1.5rem;
    margin: 2rem 0 0 0;
    font-size: 1.5rem;
    position: relative;
    font-weight: 300;
    -webkit-transition: all 0.4s ease 0s;
    -o-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;

    :before {
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 80px;
      height: 2px;
      content: "";
      background-color: #59593D;
    }
  }

  h4 {
    margin: 1rem 0px;
    font-size: 1.5rem;


    margin: 2rem 0 0 0;

    font-size: 1.2rem;
    position: relative;
    font-weight: 300;
    -webkit-transition: all 0.4s ease 0s;
    -o-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;


    text-transform: capitalize;
    text-align:center;
  }

  h2 {
    margin: 1rem 0px;
    font-size: 1.25rem;
  }

  button {
    height: 2.25rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 0.75rem;

    &:focus { outline: none; }
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 0.25rem 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;
