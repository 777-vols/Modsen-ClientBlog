import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';

import Navbar from '.';

jest.mock('next/navigation');

describe('Renders Navbar', () => {
  (usePathname as jest.Mock).mockImplementation(() => 'en');

  it('Should renders Navbar in English', () => {
    render(<Navbar locale="en" />);

    expect(screen.getByText('Modsen Client Blog')).toBeInTheDocument();
    expect(screen.getByText('Video about us')).toBeInTheDocument();
    expect(screen.getByText('en/ru')).toBeInTheDocument();
  });

  it('Should renders Navbar in Russian', () => {
    render(<Navbar locale="ru" />);

    expect(screen.getByText('Блог Клиента Модсен')).toBeInTheDocument();
    expect(screen.getByText('Видео о нас')).toBeInTheDocument();
    expect(screen.getByText('en/ru')).toBeInTheDocument();
  });
});
