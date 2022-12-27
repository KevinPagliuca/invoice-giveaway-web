import React from 'react';

import { Wrapper } from 'components/Wrapper';

import * as S from './Participation.styles';

export const Participation = () => {
  return (
    <Wrapper>
      <S.ParticipationContainer>
        <S.ParticipationTitle>Como participar ?</S.ParticipationTitle>
        <S.ParticipationContent>
          <S.ParticipationItem>
            <span>1</span>
            <p>Faça seu cadastro</p>
          </S.ParticipationItem>
          <S.ParticipationItem>
            <span>2</span>
            <p>Cadastre suas notas fiscais</p>
          </S.ParticipationItem>
          <S.ParticipationItem>
            <span>3</span>
            <p>
              <strong>Pronto!</strong>
              <br />
              Você já está concorrendo com o seu código da sorte gerado
            </p>
          </S.ParticipationItem>
        </S.ParticipationContent>
      </S.ParticipationContainer>
    </Wrapper>
  );
};
