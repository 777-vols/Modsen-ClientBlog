import { getDictionary } from '@/lib/getDictionary';
import { ILocaleProps } from '@/types';

import Carousel from './Carousel';
import styles from './styles.module.scss';

const { wrapper, content, carousel, subtitle, title, description } = styles;

const Testimonials = ({ locale }: ILocaleProps) => {
  const { testimonials } = getDictionary(locale);
  const { titleText, subtitleText, descriptionText } = testimonials;

  return (
    <section className={wrapper}>
      <div className={content}>
        <h5 className={subtitle}>{subtitleText}</h5>
        <h3 className={title}>{titleText}</h3>
        <p className={description}>{descriptionText}</p>
      </div>
      <div className={carousel}>
        <Carousel />
      </div>
    </section>
  );
};

export default Testimonials;
