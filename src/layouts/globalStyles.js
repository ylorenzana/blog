import { injectGlobal } from 'emotion';

import { colors, mq } from './cssConstants';

injectGlobal`
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Ubuntu', sans-serif;    
    font-size: 1.8rem;
    font-weight: 400;    
    color: ${colors.grey}; 
    line-height: 1.5;   
    box-sizing: border-box;
    a {
      font-weight: 500;
      text-decoration: none;
      border-bottom: 0.15rem solid transparent;
      color: ${colors.darkTan}; 
      transition: all 0.25s ease-out;
    }
    a:hover {
      border-bottom: 0.15rem solid ${colors.darkTan};
    }
    h2, h3, h4{
     color: #222; 
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
