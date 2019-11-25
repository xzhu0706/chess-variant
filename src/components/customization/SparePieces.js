import React from 'react';

function SparePieces(props) {
  return (
    <form onChange={props.handleChange}>
      <div className="piece-selector">
        Select a piece to add to the board:
        <div>
          <input id="white-pawn" type="radio" name="piece" value="P" />
          <label className="piece-card white-pawn" htmlFor="white-pawn"></label>
          <input id="white-bishop" type="radio" name="piece" value="B" />
          <label className="piece-card white-bishop" htmlFor="white-bishop"></label>
          <input id="white-knight" type="radio" name="piece" value="N" />
          <label className="piece-card white-knight" htmlFor="white-knight"></label>
          <input id="white-rook" type="radio" name="piece" value="R" />
          <label className="piece-card white-rook" htmlFor="white-rook"></label>
          <input id="white-queen" type="radio" name="piece" value="Q" />
          <label className="piece-card white-queen" htmlFor="white-queen"></label>
          <input id="white-king" type="radio" name="piece" value="K" />
          <label className="piece-card white-king" htmlFor="white-king"></label>
        </div>
        <div>
          <input id="black-pawn" type="radio" name="piece" value="p" />
          <label className="piece-card black-pawn" htmlFor="black-pawn"></label>
          <input id="black-bishop" type="radio" name="piece" value="b" />
          <label className="piece-card black-bishop" htmlFor="black-bishop"></label>
          <input id="black-knight" type="radio" name="piece" value="n" />
          <label className="piece-card black-knight" htmlFor="black-knight"></label>
          <input id="black-rook" type="radio" name="piece" value="r" />
          <label className="piece-card black-rook" htmlFor="black-rook"></label>
          <input id="black-queen" type="radio" name="piece" value="q" />
          <label className="piece-card black-queen" htmlFor="black-queen"></label>
          <input id="black-king" type="radio" name="piece" value="k" />
          <label className="piece-card black-king" htmlFor="black-king"></label>
        </div>
      </div>
    </form>
  );
}

export default SparePieces;