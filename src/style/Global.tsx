import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@dragonchaindex/toolkit/dist/theme'

declare module '' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url(images/bg-home.webp);
    background-attachment: scroll;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;

    img {
      height: auto;
      max-width: 100%;
    }
  }
  iframe{
    display:none !important;
  }
  @keyframes flame{
    0% {height:150px; width:150px;}
    50% {height:140px; width:140px;}
    100% {height:150px; width:150px;}
  }
`

export default GlobalStyle
