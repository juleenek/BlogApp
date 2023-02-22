import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { stackColor } from './_variables';

export const GlobalStyle = createGlobalStyle`
${reset}
html{
  font-size:16px;
}
*{
  color: ${stackColor.white}
}
  body {
   background: #ffffff;
   height: 100vh;
   font-family: 'Roboto', sans-serif;
  }
  a,p{
    color: ${stackColor.white};
    font-size: 1rem;
    text-decoration: none;
  }
`;
