import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.paragraph};
  }

  body #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  a {
    text-decoration: none;
    font-family: inherit;
    color: inherit;
  } 

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }   
`;
