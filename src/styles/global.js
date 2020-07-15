import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     outline: 0;             
  }
  
  body {
    background: #fff;        
    font-family: 'Space Mono', monospace, sans-serif;
    -webkit-font-smoothing: antialiased;        
  }

  body, input, button {             
    font-family: 'Space Mono', monospace, sans-serif;        
  }

  button {
    cursor: pointer;
    transition: filter 0.2s;

   &:hover {
    filter: brightness(90%);
   }
  }
`;