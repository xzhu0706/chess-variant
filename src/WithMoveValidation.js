import React, { Component } from "react";
import PropTypes from "prop-types";
import Chess from  "chess.js";
import Chessboard from "chessboardjsx";
import rough from "roughjs"; // can give the squares a rough appearance
import bk_test from "./bk.svg"; // testing the use of custom icons

class HumanVsHuman extends Component {
  static propTypes = { children: PropTypes.func };

  state = {
    fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
    dropSquareStyle: {}, // square styles for active drop square
    squareStyles: {}, // custom square styles
    pieceSquare: "", // piece on the most recently selected square
    square: "", // currently clicked square
  };

  componentDidMount() {
    this.game = new Chess(this.state.fen);
  }

  // highlight hint squares
  highlightSquare = (hintSquares) => {
    const highlightStyles = [...hintSquares].reduce(
      (a, c) => {
        return {
          ...a,
          ...{
            [c]: {
              background:
                "radial-gradient(circle, rgba(255, 120, 12, 0.57), 50%, transparent 10%)",
              borderRadius: "50%"
            }
          }
        };
      },
      {}
    );
    //console.log(highlightStyles);
    // show hints
    this.setState(({squareStyles}) => ({
      squareStyles: { ...squareStyles, ...highlightStyles }
    }));
  };

  onDrop = ({ sourceSquare, targetSquare }) => {
    // see if the move is legal
    let move = this.game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q" // always promote to a queen for example simplicity
      // fix this so the user can choose what to promote to
    });

    // illegal move
    if (move === null) return;

    // legal move, so update the fen
    this.setState(({ pieceSquare }) => ({
      fen: this.game.fen(),
      pieceSquare: "",
    }));
  };

  // onDragOverSquare = square => {
  //   this.setState({
  //     dropSquareStyle:{ backgroundColor: "#38f" }
  //   });
  // };

  onSquareClick = (square) => {
    // highlight the square you just clicked
    this.setState(() => ({
      squareStyles: { [square]: { backgroundColor: "#38f" } },
      pieceSquare: square
    }));
    // get list of possible moves for the piece on this square
    // (returns empty array if there are no possible moves or there is no piece)
    let moves = this.game.moves({
      square: square,
      verbose: true
    });

    // we only need the destination of each possible move, which is moves[i].to
    let hintSquares = [];
    for (var i = 0; i < moves.length; i++) {
      hintSquares.push(moves[i].to);
    }

    // highlight the destination square of each possible move
    this.highlightSquare(hintSquares);

    // process the case where the user has registered a move by clicking
    let move = this.game.move({
      from: this.state.pieceSquare,
      to: square,
      promotion: "q" // always promote to a queen for example simplicity
      // fix this so the user can choose what to promote to
    });
    
    // illegal move
    if (move === null) return;

    // legal move, so update the fen
    this.setState({
      fen: this.game.fen(),
      pieceSquare: ""
    });
  };

  // When right clicking, we preserve the old squareStyles (we merely append the new style).
  // This will allow the user to have multiple squares be highlighted simultaneously,
  // for whatever reason (annotation?)
  onSquareRightClick = square =>
    this.setState(({ squareStyles }) => ({
      squareStyles: { ...squareStyles, [square]: { backgroundColor: "#e86c65" } }
    }));

  render() {
    const { fen, dropSquareStyle, squareStyles } = this.state;

    return this.props.children({
      squareStyles,
      position: fen,
      onMouseOverSquare: this.onMouseOverSquare,
      onMouseOutSquare: this.onMouseOutSquare,
      onDrop: this.onDrop,
      dropSquareStyle,
      // onDragOverSquare: this.onDragOverSquare,
      onSquareClick: this.onSquareClick,
      onSquareRightClick: this.onSquareRightClick
    });
  }
}

export default function WithMoveValidation() {
  return (
    <div>
      <HumanVsHuman>
        {({
          position,
          onDrop,
          squareStyles,
          dropSquareStyle,
          // onDragOverSquare,
          onSquareClick,
          onSquareRightClick
        }) => (
          <div>
            <Chessboard
              id="humanVsHuman"
              width={640}
              roughSquare={roughSquare}
              position={position}
              onDrop={onDrop}
              boardStyle={{
                borderRadius: "5px",
                boxShadow: `0 2px 3px rgba(0, 0, 0, 0.5)`
              }}
              pieces={{
                bK: ({ squareWidth }) => (
                  <img
                    style={{
                      width: squareWidth,
                      height: squareWidth
                    }}
                    src={bk_test}
                    alt={"bk_test"}
                  />
                )
              }}
              lightSquareStyle={{ backgroundColor: "#ffffff" }}
              darkSquareStyle={{ backgroundColor: "#65cae8" }}      
              squareStyles={squareStyles}
              dropSquareStyle={dropSquareStyle}
              // onDragOverSquare={onDragOverSquare}
              onSquareClick={onSquareClick}
              onSquareRightClick={onSquareRightClick}
              draggable={true}
            />
            <div>fen: {position}</div> { /* should this be a child component? */ }
          </div>
        )}
      </HumanVsHuman>
    </div>
  );
}

// give squares a rough appearance using roughjs
const roughSquare = ({ squareElement, squareWidth }) => {
  let rc = rough.svg(squareElement);
  const chessSquare = rc.rectangle(0, 0, squareWidth, squareWidth, {
    roughness: 0.5,
    bowing: 2.5,
    strokeWidth: 0.5,
    //fill: "AliceBlue",
    //fillStyle: "cross-hatch" // why doesn't this work? (doesn't create cross hatches)?
  });
  squareElement.appendChild(chessSquare);
};
