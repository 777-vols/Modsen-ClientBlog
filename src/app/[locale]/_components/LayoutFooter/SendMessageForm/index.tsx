'use client';

import 'react-toastify/dist/ReactToastify.min.css';

import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import { envVariables } from '@/constants/envVariables';
import { footerFormValidator } from '@/constants/formValidators';

import styles from './styles.module.scss';
import { IProps, ISendMessageFormData } from './types';

const { emailJSPublicKey, emailJSServiceId, emailJSFormTemplate } = envVariables;

const { form, input, textarea, formButton, inputsWrapper, errorMessage } = styles;

const SendMessageForm: FC<IProps> = ({ footerForm }) => {
  const {
    emailPlaceholderText,
    namePlaceholderText,
    messagePlaceholderText,
    subscribeButtonText,
    successMessageText,
    errorMessageText,
  } = footerForm;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISendMessageFormData>({
    resolver: yupResolver(footerFormValidator),
    mode: 'onChange',
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSendMessage: SubmitHandler<ISendMessageFormData> = () => {
    emailjs
      .sendForm(emailJSServiceId, emailJSFormTemplate, formRef.current!, emailJSPublicKey)
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
      <div className={inputsWrapper}>
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
        <span className={errorMessage}>{errors.message?.message}</span>
        <textarea
          className={textarea}
          placeholder={messagePlaceholderText}
          {...register('message')}
        />
      </div>
      <button className={formButton} type="submit">
        {subscribeButtonText}
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
