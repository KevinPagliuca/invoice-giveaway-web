import Image from 'next/image';
import React from 'react';

import { Wrapper } from 'components/Wrapper';

import * as S from './styles';

export const HomeBanner = () => {
  return (
    <Wrapper bg="white">
      <S.HomeBannerContainer>
        <Image src="/giveaway.svg" alt="giveway-image" width={600} height={450} />
        <S.HomeBannerContent>
          <S.HomeBannerTitle>
            Participe dos nossos{' '}
            <S.HomeBannerHightlightedText>sorteios!</S.HomeBannerHightlightedText>
          </S.HomeBannerTitle>
          <S.HomeBannerSubtitle>
            Cadastre suas <S.HomeBannerHightlightedText>Notas Ficais </S.HomeBannerHightlightedText>
            que você não informou no caixa e concorra a
            <S.HomeBannerHightlightedText> prêmios incríveis.</S.HomeBannerHightlightedText>
          </S.HomeBannerSubtitle>
        </S.HomeBannerContent>
      </S.HomeBannerContainer>
    </Wrapper>
  );
};
