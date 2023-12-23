import { IProps } from './types';

const EmptyPage = ({ pageName }: IProps) => {
  return (
    <main>
      <h1>{pageName}</h1>
    </main>
  );
};

export default EmptyPage;
