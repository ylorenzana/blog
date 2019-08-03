import { injectGlobal } from 'emotion';

import { colors } from './cssConstants';

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
    .gatsby-resp-image-link:hover, .gatsby-resp-image-link {
      border-bottom: 0;
    }
    h2, h3, h4 {
     color: #222; 
    }
    blockquote {
      border-left: 0.5rem solid #666;
      padding-left: 1.5rem;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
