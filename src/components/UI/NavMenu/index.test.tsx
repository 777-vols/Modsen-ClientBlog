import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';

import NavMenu from '.';

jest.mock('next/navigation');

describe('Renders NavMenu', () => {
  (usePathname as jest.Mock).mockImplementation(() => 'en');

  it('Should renders NavMenu in English', () => {
    render(<NavMenu locale="en" />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('Should renders NavMenu in Russian', () => {
    render(<NavMenu locale="ru" />);

    expect(screen.getByText('Главная')).toBeInTheDocument();
    expect(screen.getByText('Блог')).toBeInTheDocument();
    expect(screen.getByText('О нас')).toBeInTheDocument();
    expect(screen.getByText('Контакты')).toBeInTheDocument();
  });

  it('Should renders NavMenu for footer in English', () => {
    render(<NavMenu locale="en" isFooterNav />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('Should renders NavMenu for footer in Russian', () => {
    render(<NavMenu locale="ru" isFooterNav />);

    expect(screen.getByText('Главная')).toBeInTheDocument();
    expect(screen.getByText('Блог')).toBeInTheDocument();
    expect(screen.getByText('О нас')).toBeInTheDocument();
    expect(screen.getByText('Контакты')).toBeInTheDocument();
    expect(screen.getByText('Политика безопасности')).toBeInTheDocument();
  });
});
