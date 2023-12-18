import { Suspense } from 'react';

import Loading from '@/app/[locale]/loading';

import MapGl from './_components/MapGl';

const Contact = ({ params: { locale } }: ILocaleParams) => {
  return (
    <Suspense fallback={<Loading />}>
      <main>contact</main>
      <MapGl />
    </Suspense>
  );
};

export default Contact;
