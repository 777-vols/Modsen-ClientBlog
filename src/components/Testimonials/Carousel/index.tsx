'use client';

import { useState } from 'react';

import { allAuthors } from '@/constants/Authors';

import styles from './styles.module.scss';

const {
  wrapper,
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

  const { from, image, name, review } = allAuthors[currentSlide];

  const handlePrevious = () => {
    if (currentSlide !== 0) {
      setCurrentSlide((prevState) => prevState - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide !== allAuthors.length - 1) {
      setCurrentSlide((prevState) => prevState + 1);
    }
  };

  return (
    <div className={wrapper}>
      <p className={message}>{review}</p>
      <div className={panel}>
        <div className={author}>
          <div className={avatar}>{image}</div>
          <div className={info}>
            <h4 className={fullName}>{name}</h4>
            <h4 className={adress}>{from}</h4>
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
                currentSlide !== allAuthors.length - 1
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
