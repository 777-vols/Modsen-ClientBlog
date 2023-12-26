import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import JoinOurTeam from '.';

describe('Renders JoinOurTeam', () => {
  it('Should renders JoinOurTeam in English', () => {
    render(<JoinOurTeam locale="en" />);

    expect(screen.getByText('Join our team to be a part of our story')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Join Now')).toBeInTheDocument();
  });

  it('Should renders JoinOurTeam in Russian', () => {
    render(<JoinOurTeam locale="ru" />);

    expect(
      screen.getByText('Присоединяйтесь к нашей команде, чтобы стать частью нашей истории'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Присоедениться сейчас')).toBeInTheDocument();
  });
});
