import styled from 'styled-components';

import { type WrapperContainerAttributes } from './Wrapper.interfaces';

export const WrapperContainer = styled.div<WrapperContainerAttributes>`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme, bg }) => (bg ? theme.colors[bg] : 'transparent')};
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.pageMaxWidth};
`;
