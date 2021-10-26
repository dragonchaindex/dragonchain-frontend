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
    background-attachment: fixed;
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

  .shadow-flame{
    -webkit-animation: shadowflame 2s ease-in-out infinite !important;
    animation: shadowflame 2s ease-in-out infinite !important;
  }

  @keyframes shadowflame{
    0% {
      box-shadow: 0 0 5px #D20726;
    }
    50% {
        box-shadow: 0 0 15px #D20726;
    }
    100% {
        box-shadow: 0 0 5px #D20726;
    }
  }
  
`

export default GlobalStyle
