import { injectGlobal } from 'emotion';

injectGlobal`
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Ubuntu', sans-serif;    
    font-size: 1.8rem;
    font-weight: 400;    
    background:#FCFCFC;
    color: #393E46;
    line-height: 1.5;   
    box-sizing: border-box;
    a {
      text-decoration: none;
      border-bottom: 0.15rem solid transparent;
      color: #2C3E50;
      transition: all 0.25s ease-out;
    }
    a:hover {
      border-bottom: 0.15rem solid #2C3E50;
    }
    h1 {
      color: #2C3E50;
    }
    h2, h3, h4{
     color: #222; 
    }
    .content-wrapper {
      min-height: 100vh;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: minmax(30vh, auto) minmax(50vh, auto) minmax(8vh, auto);
      grid-gap: 2rem 1rem;
      margin: 0;
      align-items: start;
      justify-items: center;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  @font-face {
 
  }
`;
