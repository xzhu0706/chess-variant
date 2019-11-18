import React from 'react'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GameData from './GameData.js'

afterEach(cleanup)

test('render checkmate', () => {
    const {getByText} = render(
        <GameData gameResult={'checkmate'}/>,
    )

    getByText('FEN:',{exact: false})
    getByText('PGN:',{exact: false})
    expect(getByText('STATE:',{exact: false})).toHaveTextContent('STATE: Black wins')
})