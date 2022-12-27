import React, { forwardRef, Fragment, useCallback, useMemo, useRef, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import type ReactInputMask from 'react-input-mask';

import { type IInputProps } from './Input.interfaces';
import * as S from './Input.styles';

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      name,
      label,
      error,
      mask,
      placeholder = ' ',
      withShowPassword,
      value,
      onChange,
      onValueChange,
      currency,
      type,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const inputMaskRef = useRef<ReactInputMask | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    const hasPlaceholder = useMemo(() => placeholder.trim().length > 0, [placeholder]);
    const { hasError, errorMessage } = useMemo(() => {
      return {
        hasError: !!error,
        errorMessage: !!error ? error.message : undefined,
      };
    }, [error]);

    const handleShowPassword = useCallback(() => {
      setShowPassword((prevState) => !prevState);
    }, [withShowPassword]);

    const inputType = useMemo(() => {
      if (withShowPassword) return showPassword ? 'text' : 'password';
      return type;
    }, [withShowPassword, showPassword, type]);

    const inputRefCallback = useCallback(
      (input: HTMLInputElement | null) => {
        if (!input) return null;
        inputRef.current = input;
        if (ref && typeof ref === 'function') {
          ref(input);
        } else if (ref && typeof ref === 'object') {
          ref.current = input;
        }
      },
      [ref]
    );

    const handleFocusInput = useCallback(() => {
      inputRef.current?.focus();
    }, [inputRef]);

    return (
      <S.InputWrapper>
        <S.InputContainer hasError={hasError} onClick={handleFocusInput}>
          {currency && (
            <S.InputFieldCurrency
              id={name}
              name={name}
              intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
              decimalsLimit={2}
              maxLength={value?.toString().includes(',') ? 13 : 9}
              value={value}
              onValueChange={onValueChange}
              placeholder={placeholder}
              ref={inputRefCallback}
            />
          )}

          {mask && !currency && (
            <S.InputFieldMasked
              {...rest}
              id={name}
              name={name}
              type={inputType}
              ref={inputMaskRef}
              inputRef={inputRefCallback}
              mask={mask}
              placeholder={placeholder}
              maskChar={null}
              value={value}
              onChange={onChange}
              className={hasPlaceholder ? `${rest?.className} hasPlaceholder` : rest?.className}
            />
          )}
          {!mask && !currency && (
            <S.InputField
              id={name}
              name={name}
              type={inputType}
              ref={inputRefCallback}
              placeholder={placeholder}
              hasPlaceholder={hasPlaceholder}
              value={value}
              onChange={onChange}
              {...rest}
            />
          )}

          {label && (
            <Fragment>
              <S.InputLabel hasPlaceholder={hasPlaceholder} onClick={handleFocusInput}>
                {label}
              </S.InputLabel>
              <S.StyledLegend hasPlaceholder={hasPlaceholder}>{label}</S.StyledLegend>
            </Fragment>
          )}

          {withShowPassword && (
            <S.ShowPasswordButton type="button" onClick={handleShowPassword}>
              {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </S.ShowPasswordButton>
          )}
        </S.InputContainer>

        {hasError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </S.InputWrapper>
    );
  }
);

Input.displayName = 'InputComponent';
