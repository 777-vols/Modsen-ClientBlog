import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Categories from '.';

describe('Renders Categories', () => {
  it('Should renders Categories in English', () => {
    render(<Categories locale="en" titleText="Choose A Catagory" />);

    expect(screen.getByText('Choose A Catagory')).toBeInTheDocument();
    expect(screen.getByText('Business')).toBeInTheDocument();
    expect(screen.getByText('Startup')).toBeInTheDocument();
    expect(screen.getByText('Economy')).toBeInTheDocument();
    expect(screen.getByText('Technology')).toBeInTheDocument();
  });

  it('Should renders Categories in Russian', () => {
    render(<Categories locale="ru" titleText="Выберите категорию" />);

    expect(screen.getByText('Бизнес')).toBeInTheDocument();
    expect(screen.getByText('Стартап')).toBeInTheDocument();
    expect(screen.getByText('Экономика')).toBeInTheDocument();
    expect(screen.getByText('Технологии')).toBeInTheDocument();
  });
});
