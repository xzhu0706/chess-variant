import React, { Component } from "react";
import PropTypes from "prop-types";
import Chess from  "chess.js";
import Chessboard from "chessboardjsx";
import rough from "roughjs"; // can give the squares a rough appearance
import bk_test from "./bk.svg"; // testing the use of custom icons

class HumanVsHuman extends Component {
  static propTypes = { children: PropTypes.func };

  state = {
    fen: "start",
    // square styles for active drop square
    dropSquareStyle: {},
    // custom square styles
    squareStyles: {},
    // square with the currently clicked piece
    pieceSquare: "",
    // currently clicked square
    square: "",
    // array of past game moves
    history: []
  };

  componentDidMount() {
    this.game = new Chess();
  }

  // keep clicked square style and remove hint squares
  removeHighlightSquare = () => {
    this.setState(({ pieceSquare, history }) => ({
      squareStyles: squareStyling({ pieceSquare, history })
    }));
  };

  // show possible moves
  highlightSquare = (sourceSquare, squaresToHighlight) => {
    const highlightStyles = [sourceSquare, ...squaresToHighlight].reduce(
      (a, c) => {
        return {
          ...a,
          ...{
            [c]: {
              background:
                "radial-gradient(circle, #fffc00 36%, transparent 40%)",
              borderRadius: "50%"
            }
          },
          ...squareStyling({
            history: this.state.history,
            pieceSquare: this.state.pieceSquare
          })
        };
      },
      {}
    );

    this.setState(({ squareStyles }) => ({
      squareStyles: { ...squareStyles, ...highlightStyles }
    }));
  };

  onDrop = ({ sourceSquare, targetSquare }) => {
    // see if the move is legal
    let move = this.game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q" // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;
    this.setState(({ history, pieceSquare }) => ({
      fen: this.game.fen(),
      history: this.game.history({ verbose: true }),
      squareStyles: squareStyling({ pieceSquare, history })
    }));
  };

  // onMouseOverSquare = square => {
  //   // get list of possible moves for this square
  //   let moves = this.game.moves({
  //     square: square,
  //     verbose: true
  //   });

  //   // exit if there are no moves available for this square
  //   if (moves.length === 0) return;

  //   let squaresToHighlight = [];
  //   for (var i = 0; i < moves.length; i++) {
  //     squaresToHighlight.push(moves[i].to);
  //   }

  //   this.highlightSquare(square, squaresToHighlight);
  // };

  // onMouseOutSquare = square => this.removeHighlightSquare(square);

  // central squares get diff dropSquareStyles
  onDragOverSquare = square => {
    this.setState({
      dropSquareStyle:{ backgroundColor: "#f7ecb2" }
    });
  };

  onSquareClick = square => {
    this.setState(({ history }) => ({
      squareStyles: squareStyling({ pieceSquare: square, history }),
      pieceSquare: square
    }));

    let move = this.game.move({
      from: this.state.pieceSquare,
      to: square,
      promotion: "q" // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;

    this.setState({
      fen: this.game.fen(),
      history: this.game.history({ verbose: true }),
      pieceSquare: ""
    });
  };

  onSquareRightClick = square =>
    this.setState({
      squareStyles: { [square]: { backgroundColor: "#e86c65" } }
    });

  render() {
    const { fen, dropSquareStyle, squareStyles } = this.state;

    return this.props.children({
      squareStyles,
      position: fen,
      onMouseOverSquare: this.onMouseOverSquare,
      onMouseOutSquare: this.onMouseOutSquare,
      onDrop: this.onDrop,
      dropSquareStyle,
      onDragOverSquare: this.onDragOverSquare,
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
          onMouseOverSquare,
          onMouseOutSquare,
          squareStyles,
          dropSquareStyle,
          onDragOverSquare,
          onSquareClick,
          onSquareRightClick
        }) => (
          <Chessboard
            id="humanVsHuman"
            width={540}
            roughSquare={roughSquare}
            position={position}
            onDrop={onDrop}
            // onMouseOverSquare={onMouseOverSquare}
            // onMouseOutSquare={onMouseOutSquare}
            boardStyle={{
              borderRadius: "5px",
              boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
            }}
            pieces={{
              bK: ({ squareWidth, isDragging }) => (
                <img
                  style={{
                    width: isDragging ? squareWidth * 1.25 : squareWidth,
                    height: isDragging ? squareWidth * 1.25 : squareWidth
                  }}
                  src={bk_test}
                  alt={"bk_test"}
                />
              )
            }}
            lightSquareStyle={{ backgroundColor: "White" }}
            darkSquareStyle={{ backgroundColor: "#65cae8" }}      
            squareStyles={squareStyles}
            dropSquareStyle={dropSquareStyle}
            onDragOverSquare={onDragOverSquare}
            onSquareClick={onSquareClick}
            onSquareRightClick={onSquareRightClick}
          />
        )}
      </HumanVsHuman>
    </div>
  );
}

const squareStyling = ({ pieceSquare, history }) => {
  const sourceSquare = history.length && history[history.length - 1].from;
  const targetSquare = history.length && history[history.length - 1].to;

  return {
    [pieceSquare]: { backgroundColor: "rgba(209, 212, 155, 0.83)" },
    ...(history.length && {
      [sourceSquare]: {
        backgroundColor: "rgba(209, 212, 155, 0.83)"
      }
    }),
    ...(history.length && {
      [targetSquare]: {
        backgroundColor: "rgba(209, 212, 155, 0.83)"
      }
    })
  };
};

// customize the look of chessboard squares using roughjs
const roughSquare = ({ squareElement, squareWidth }) => {
  let rc = rough.svg(squareElement);
  const chessSquare = rc.rectangle(0, 0, squareWidth, squareWidth, {
    roughness: 0.5,
    bowing: 2.7,
    strokeWidth: 0.5,
    //fill: "AliceBlue",
    //fillStyle: "cross-hatch" // why doesn't this work? (doesn't create cross hatches)?
  });
  squareElement.appendChild(chessSquare);
};
