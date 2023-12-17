'use client';

import { FC, useRef } from 'react';

import { useOnClickOutside } from '@/hooks';

import styles from './styles.module.scss';
import { IProps } from './types';

const { background, wrapper, closeModalButton } = styles;

const AboutUsModal: FC<IProps> = ({ handleCloseModal }) => {
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => {
    handleCloseModal();
  });

  return (
    <div className={background}>
      <div className={wrapper} ref={modalRef}>
        <button className={closeModalButton} type="button" onClick={handleCloseModal}>
          X
        </button>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/RD2E9MfjY2Q?si=gliiQinEk_H2cUuX&amp;start=101&autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
};

export default AboutUsModal;
