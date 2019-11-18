import React from 'react'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GameData from './GameData.js'

afterEach(cleanup)

const FEN = 'FEN: rnbqkbnr/ppppp1pp/5p2/8/P7/5P2/1PPPP1PP/RNBQKBNR b KQkq a3 0 2'
const PGN = '[SetUp "1"] [FEN "rnbqkbnr/ppppp1pp/5p2/8/8/5P2/PPPPP1PP/RNBQKBNR w KQkq - 0 2"] 2. a4'

test('render fen & pgn', () => {
    const {getByText} = render(
        <GameData 
            // turn={checkmate_props.turn}
            fen={FEN}
            pgn={PGN}
            // gameResult={checkmate_props.gameResult}
        />,
    )

    expect(getByText('FEN:',{exact: false})).toHaveTextContent(FEN)
    expect(getByText('PGN:',{exact: false})).toHaveTextContent(PGN)
    // expect(getByText('STATE:',{exact: false})).toHaveTextContent('STATE: White wins')
})

test('render checkmate', () => {
    const {getByText} = render(
        <GameData
            turn={'w'}
            gameResult={'checkmate'}
        />,
    )
    expect(getByText('STATE:',{exact: false})).toHaveTextContent('STATE: White wins')
})

test('render repitition', () => {
    const {getByText} = render(
        <GameData
            gameResult={'repetition'}
        />,
    )
    expect(getByText('STATE:',{exact: false})).toHaveTextContent('Draw (three-fold repetition)')
})

test('render stalemate', () => {
    const {getByText} = render(
        <GameData
            gameResult={'stalemate'}
        />,
    )
    expect(getByText('STATE:',{exact: false})).toHaveTextContent(`Draw (stalemate)`)
})

test('render insufficient', () => {
    const {getByText} = render(
        <GameData
            gameResult={'insufficient'}
        />,
    )
    expect(getByText('STATE:',{exact: false})).toHaveTextContent(`Draw (insufficient material)`)
})

test('render fift move rule', () => {
    const {getByText} = render(
        <GameData
            gameResult={'fifty'}
        />,
    )
    expect(getByText('STATE:',{exact: false})).toHaveTextContent(`Draw (fifty-move rule)`)
})