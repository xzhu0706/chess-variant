import React from 'react';

function GameData(props) {
    const turn = props.turn === 'w' ? 'White' : 'Black';
    let state_msg = `${turn}'s turn`;
    if (props.gameResult === 'checkmate') {
        state_msg = `${turn} wins`;
    }
    else if (props.gameResult === 'repetition') {
        state_msg = 'Draw (three-fold repetition)';
    }
    else if (props.gameResult === 'stalemate') {
        state_msg = `Draw (stalemate)`;
    }
    else if (props.gameResult === 'insufficient') {
        state_msg = `Draw (insufficient material)`;
    }
    else if (props.gameResult === 'fifty') {
        state_msg = `Draw (fifty-move rule)`;
    }
    const mystyle = {
        fontSize: "2em"
    };
    return (
        <div>
            <div>FEN: {props.fen}</div>
            <div>PGN: {props.pgn}</div>
            <div style={mystyle}>STATE: {state_msg}</div>
        </div>
    );
}

export default GameData;
