import { rgba } from 'polished';
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

    &.no-scroll {
      overflow: hidden !important;
      overscroll-behavior: contain;
      position: relative !important;
      padding-left: 0px;
      padding-top: 0px;
      padding-right: 0px;
      margin-left: 0;
      margin-top: 0;
      margin-right: 6px !important;
    }
  } 

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => rgba(theme.colors.primary, 0.85)};
  }

  body #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  button {
    cursor: pointer;
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
