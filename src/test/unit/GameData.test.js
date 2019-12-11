import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GameData from '../../GameData';

describe('ReportUserForm test suite', () => {
  afterEach(cleanup);
  const white = 'w';
  const black = 'b';

  test('display white\'s turn', () => {
    const { getByText } = render(
      <GameData
        turn={white}
      />,
    );
    expect(getByText('White\'s turn')).toBeInTheDocument();
  });

  test('display black\'s turn', () => {
    const { getByText } = render(
      <GameData
        turn={black}
      />,
    );
    expect(getByText('Black\'s turn')).toBeInTheDocument();
  });

  test('render victory by checkmate', () => {
    const { getByText } = render(
      <GameData
        turn={white}
        gameResult="checkmate"
      />,
    );
    expect(getByText('Black wins (checkmate)')).toBeInTheDocument();
  });

  test('render victory by extinction', () => {
    const { getByText } = render(
      <GameData
        turn={black}
        gameResult="extinction"
      />,
    );
    expect(getByText('White wins (extinction)')).toBeInTheDocument();
  });

  test('render repitition', () => {
    const { getByText } = render(
      <GameData
        gameResult="repetition"
      />,
    );
    expect(getByText('Draw (three-fold repetition)')).toBeInTheDocument();
  });

  test('render stalemate', () => {
    const { getByText } = render(
      <GameData
        gameResult="stalemate"
      />,
    );
    expect(getByText('Draw (stalemate)')).toBeInTheDocument();
  });

  test('render insufficient', () => {
    const { getByText } = render(
      <GameData
        gameResult="insufficient"
      />,
    );
    expect(getByText('Draw (insufficient material)')).toBeInTheDocument();
  });

  test('render fift move rule', () => {
    const { getByText } = render(
      <GameData
        gameResult="fifty"
      />,
    );
    expect(getByText('Draw (fifty-move rule)')).toBeInTheDocument();
  });
});
