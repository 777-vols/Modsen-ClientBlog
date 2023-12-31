'use client';

import 'react-toastify/dist/ReactToastify.min.css';

import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import { envVariables, footerFormValidator } from '@/constants';
import { getDictionary } from '@/i18n/getDictionary';
import { ILocaleProps } from '@/types';

import styles from './styles.module.scss';
import { ISendMessageFormData } from './types';

const { emailJSPublicKey, emailJSServiceId, emailJSFormTemplate } = envVariables;

const SendMessageForm: FC<ILocaleProps> = ({ locale }) => {
  const { forms } = getDictionary(locale);
  const {
    emailPlaceholderText,
    namePlaceholderText,
    messagePlaceholderText,
    subscribeButtonText,
    successMessageText,
    errorMessageText,
  } = forms;

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
    <form className={styles.form} ref={formRef} onSubmit={handleSubmit(handleSendMessage)}>
      <div className={styles.inputsWrapper}>
        <span className={styles.errorMessage}>{errors.fullName?.message}</span>
        <input
          data-cy="footerFormFullName"
          className={styles.input}
          type="text"
          placeholder={namePlaceholderText}
          {...register('fullName')}
        />
        <span className={styles.errorMessage}>{errors.email?.message}</span>
        <input
          data-cy="footerFormEmail"
          className={styles.input}
          type="email"
          placeholder={emailPlaceholderText}
          {...register('email', {
            required: true,
          })}
        />
        <span className={styles.errorMessage}>{errors.message?.message}</span>
        <textarea
          data-cy="footerFormTextarea"
          className={styles.textarea}
          placeholder={messagePlaceholderText}
          {...register('message')}
        />
      </div>
      <button className={styles.formButton} type="submit">
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
