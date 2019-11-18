import React from 'react'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GameData from './GameData.js'

afterEach(cleanup)

const FEN = 'FEN: rnbqkbnr/ppppp1pp/5p2/8/P7/5P2/1PPPP1PP/RNBQKBNR b KQkq a3 0 2'
const PGN = '[SetUp "1"] [FEN "rnbqkbnr/ppppp1pp/5p2/8/8/5P2/PPPPP1PP/RNBQKBNR w KQkq - 0 2"] 2. a4'
const checkmate_props = {turn:'w',gameResult:'checkmate',fen:FEN,pgn:PGN}
const statlemate_props = {}
const insufficient_props = {}
const fift_props = {}

test('render checkmate game data', () => {
    const {getByText} = render(
        <GameData 
            turn={checkmate_props.turn}
            fen={checkmate_props.fen}
            pgn={checkmate_props.pgn}
            gameResult={checkmate_props.gameResult}
        />,
    )

    expect(getByText('FEN:',{exact: false})).toHaveTextContent(FEN)
    expect(getByText('PGN:',{exact: false})).toHaveTextContent(PGN)
    expect(getByText('STATE:',{exact: false})).toHaveTextContent('STATE: White wins')
})