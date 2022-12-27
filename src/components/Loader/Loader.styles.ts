import styled, { css } from 'styled-components';

import { type LoaderContainerAttributes } from './Loader.interfaces';

export const LoaderContainer = styled.div<LoaderContainerAttributes>`
  ${({ theme, size, show }) => css`
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);

    position: fixed;
    z-index: -1;
    inset: 0;
    visibility: hidden;
    opacity: 0;
    filter: drop-shadow(${theme.shadows.floating});

    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${theme.transitions.default};

    ${show &&
    css`
      z-index: 9999;
      visibility: visible;
      opacity: 1;
    `}

    svg {
      width: ${size || '4rem'};
      transform-origin: center;
      animation: rotate 2s linear infinite;
    }

    circle {
      fill: none;
      stroke: ${theme.colors.background};
      stroke-width: 2;
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -35px;
      }
      100% {
        stroke-dashoffset: -125px;
      }
    }
  `}
`;
