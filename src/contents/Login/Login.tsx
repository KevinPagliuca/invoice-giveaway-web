import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Link from 'next/link';

import { Input } from 'components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'components/Button';
import { Background } from 'contents/CommonLoginRegister';
import { useAuth } from 'contexts/Auth';
import { type LoginFormData, LoginFormSchema } from 'shared/forms/LoginForm';

import * as S from './Login.styles';

export const LoginContent = () => {
  const { handleLogin } = useAuth();

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<LoginFormData>({
    shouldFocusError: true,
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = useCallback(
    handleSubmit(async (data) => {
      await handleLogin(data);
    }),
    []
  );

  const hasErrors = errors && Object.keys(errors).length > 0;

  return (
    <S.LoginContainer>
      <Background
        backlink={{ href: '/', label: 'Ir para Home' }}
        heroConfig={{ path: '/login.svg', alt: 'Login Illustration' }}
        title="Bem-vindo de volta !"
      >
        <S.LoginContent>
          <S.LoginTitle>Fazer login</S.LoginTitle>
          <S.LoginForm onSubmit={onSubmit}>
            <Controller
              name="cpf"
              control={control}
              render={({ field }) => (
                <Input label="CPF" mask="999.999.999-99" error={errors?.cpf} {...field} />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  label="Senha"
                  type="password"
                  error={errors?.password}
                  withShowPassword
                  {...field}
                />
              )}
            />
            <S.ForgotPasswordLink href="/recuperar-senha">Esqueci minha senha</S.ForgotPasswordLink>
            <Button type="submit" disabled={hasErrors} isLoading={isSubmitting}>
              Entrar
            </Button>
          </S.LoginForm>
          <S.SignUpText>
            Não tem uma conta ainda ?<Link href="/cadastro">Cadastre-se</Link>
          </S.SignUpText>
        </S.LoginContent>
      </Background>
    </S.LoginContainer>
  );
};
