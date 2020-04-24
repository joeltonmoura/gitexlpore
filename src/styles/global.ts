import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;

  }

  body{
    background-color: #F0F0F5;
    background-image: url(${githubBackground}) ;
    background-repeat: no-repeat;
    background-position-x: 70%;
    background-position-y: top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    font-family:Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-right: 20px;
    padding-left: 20px;
  }

  button {
    cursor: pointer;
  }
`;
