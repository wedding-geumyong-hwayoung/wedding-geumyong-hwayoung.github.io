import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; // style-reset 패키지

const GlobalStyles = createGlobalStyle` 
    ${reset}
    
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
`;

export default GlobalStyles;
