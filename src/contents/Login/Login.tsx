import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Link from 'next/link';

import { Input } from 'components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { type LoginFormData, LoginFormSchema } from 'shared/LoginForm';
import { Button } from 'components/Button';

import * as S from './Login.styles';
import { LoginBackground } from './Background';

export const LoginContent = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>({
    shouldFocusError: true,
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = useCallback(
    // eslint-disable-next-line no-console
    handleSubmit((data) => console.log(data)),
    []
  );

  return (
    <S.LoginContainer>
      <LoginBackground>
        <S.LoginContent>
          <S.LoginTitle>Fazer login</S.LoginTitle>
          <S.LoginForm onSubmit={onSubmit}>
            <Controller
              name="cpf"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  name="cpf"
                  label="CPF"
                  mask="999.999.999-99"
                  error={errors['cpf']}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  name="password"
                  label="Senha"
                  type="password"
                  error={errors['password']}
                  withShowPassword
                />
              )}
            />
            <Button type="submit">Enviar</Button>
          </S.LoginForm>
          <S.SignUpText>
            Não tem uma conta ainda ?<Link href="/cadastro"> Cadastre-se</Link>
          </S.SignUpText>
        </S.LoginContent>
      </LoginBackground>
    </S.LoginContainer>
  );
};
