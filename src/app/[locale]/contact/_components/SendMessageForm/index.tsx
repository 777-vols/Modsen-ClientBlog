'use client';

import 'react-toastify/dist/ReactToastify.min.css';

import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useMemo, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import { contactFormValidator, envVariables, queryOptions } from '@/constants';
import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';
import { ISendMessageFormData } from './types';

const { emailJSPublicKey, emailJSServiceId, emailJSContactFormTemplate } = envVariables;

const { form, input, textarea, formButton, errorMessage, querySelector } = styles;

const SendMessageForm: FC<ILocaleProps> = ({ locale }) => {
  const { forms } = getDictionary(locale);
  const {
    emailPlaceholderText,
    namePlaceholderText,
    messagePlaceholderText,
    sendMessageButtonText,
    successMessageText,
    errorMessageText,
  } = forms;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISendMessageFormData>({
    resolver: yupResolver(contactFormValidator),
    mode: 'onChange',
  });

  const formRef = useRef<HTMLFormElement>(null);

  const queryOptionsArray = useMemo(
    () => queryOptions.map(({ value }) => <option key={value}>{value}</option>),
    [],
  );

  const handleSendMessage: SubmitHandler<ISendMessageFormData> = () => {
    emailjs
      .sendForm(emailJSServiceId, emailJSContactFormTemplate, formRef.current!, emailJSPublicKey)
      .then(
        (result) => {
          toast(`${successMessageText}${result.text}`);
        },
        () => {
          toast(`${errorMessageText}`);
        },
      );

    reset();
  };

  return (
    <form className={form} ref={formRef} onSubmit={handleSubmit(handleSendMessage)}>
      <span className={errorMessage}>{errors.fullName?.message}</span>
      <input
        className={input}
        type="text"
        placeholder={namePlaceholderText}
        {...register('fullName')}
      />
      <span className={errorMessage}>{errors.email?.message}</span>
      <input
        className={input}
        type="email"
        placeholder={emailPlaceholderText}
        {...register('email', {
          required: true,
        })}
      />
      <span className={errorMessage}>{errors.query?.message}</span>
      <select className={querySelector} {...register('query')}>
        {queryOptionsArray}
      </select>
      <span className={errorMessage}>{errors.message?.message}</span>
      <textarea
        className={textarea}
        placeholder={messagePlaceholderText}
        {...register('message')}
      />
      <button className={formButton} type="submit">
        {sendMessageButtonText}
      </button>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </form>
  );
};

export default SendMessageForm;
