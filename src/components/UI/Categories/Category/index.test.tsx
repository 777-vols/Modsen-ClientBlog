import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Category from '.';

describe('Renders Category', () => {
  it('Should renders Category Business in English', () => {
    render(<Category locale="en" categoryKey="business" />);

    expect(screen.getByText('Business')).toBeInTheDocument();
    expect(
      screen.getByText('Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'),
    ).toBeInTheDocument();
  });

  it('Should renders Category Business in Russian', () => {
    render(<Category locale="ru" categoryKey="business" />);

    expect(screen.getByText('Бизнес')).toBeInTheDocument();
    expect(
      screen.getByText('Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'),
    ).toBeInTheDocument();
  });
});
