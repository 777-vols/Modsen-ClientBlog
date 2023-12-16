'use client';

import { useState } from 'react';

import { authorsArray } from '@/constants/Authors';

import styles from './styles.module.scss';

const {
  message,
  panel,
  author,
  info,
  avatar,
  fullName,
  adress,
  buttonWrapper,
  controls,
  disabledPrevNextButton,
  activePrevNextButton,
} = styles;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { from, image, name, review } = authorsArray[currentSlide];

  const handlePrevious = () => {
    if (currentSlide !== 0) {
      setCurrentSlide((prevState) => prevState - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide !== authorsArray.length - 1) {
      setCurrentSlide((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <p className={message}>{review}</p>
      <div className={panel}>
        <div className={author}>
          <div className={avatar}>{image}</div>
          <div className={info}>
            <span className={fullName}>{name}</span>
            <span className={adress}>{from}</span>
          </div>
        </div>
        <div className={controls}>
          <div className={buttonWrapper}>
            <button
              className={currentSlide !== 0 ? activePrevNextButton : disabledPrevNextButton}
              type="button"
              onClick={handlePrevious}>
              ←
            </button>
          </div>
          <div className={buttonWrapper}>
            <button
              className={
                currentSlide !== authorsArray.length - 1
                  ? activePrevNextButton
                  : disabledPrevNextButton
              }
              type="button"
              onClick={handleNext}>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
