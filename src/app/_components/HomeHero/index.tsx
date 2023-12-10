import styles from './styles.module.scss';

const { wrapper, container, content } = styles;

const HomeHero = () => {
  return (
    <section className={wrapper}>
      <div className={container}>
        <div className={content}>
          <h1>Home hero</h1>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
