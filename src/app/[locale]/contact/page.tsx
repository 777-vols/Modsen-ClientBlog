import { ContactInfo } from './_components/ContactInfo';
import MapGl from './_components/MapGl';
import SendMessageForm from './_components/SendMessageForm';
import styles from './styles.module.scss';

const Contact = ({ params: { locale } }: ILocaleParams) => {
  return (
    <main>
      <section className={styles.contentWrapper}>
        <div className={styles.content}>
          <ContactInfo locale={locale} />
          <SendMessageForm locale={locale} />
        </div>
      </section>
      <MapGl />
    </main>
  );
};

export default Contact;
