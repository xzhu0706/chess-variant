import React from 'react';

function SparePieces(props) {
  return (
    <form onChange={props.handleChange}>
      <div className="piece-selector">
        Select a piece in order to add to the board or the trash can in order to delete from the board. <br/>
        Select the cursor to move pieces already on the board.
        <div>
          <input id="cursor" type="radio" name="piece" value="cursor" defaultChecked />
          <label className="piece-card cursor" htmlFor="cursor"></label>
          <input id="trash" type="radio" name="piece" value="trash" />
          <label className="piece-card trash" htmlFor="trash"></label>
        </div>
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
        <div>
          <input id="white-empress" type="radio" name="piece" value="E" />
          <label className="piece-card white-empress" htmlFor="white-empress"></label>
          <input id="white-princess" type="radio" name="piece" value="S" />
          <label className="piece-card white-princess" htmlFor="white-princess"></label>
          <input id="white-mann" type="radio" name="piece" value="M" />
          <label className="piece-card white-mann" htmlFor="white-mann"></label>
          <input id="white-ferz" type="radio" name="piece" value="F" />
          <label className="piece-card white-ferz" htmlFor="white-ferz"></label>
          <input id="white-nightrider" type="radio" name="piece" value="D" />
          <label className="piece-card white-nightrider" htmlFor="white-nightrider"></label>
        </div>
        <div>
          <input id="black-empress" type="radio" name="piece" value="e" />
          <label className="piece-card black-empress" htmlFor="black-empress"></label>
          <input id="black-princess" type="radio" name="piece" value="s" />
          <label className="piece-card black-princess" htmlFor="black-princess"></label>
          <input id="black-mann" type="radio" name="piece" value="m" />
          <label className="piece-card black-mann" htmlFor="black-mann"></label>
          <input id="black-ferz" type="radio" name="piece" value="f" />
          <label className="piece-card black-ferz" htmlFor="black-ferz"></label>
          <input id="black-nightrider" type="radio" name="piece" value="d" />
          <label className="piece-card black-nightrider" htmlFor="black-nightrider"></label>
        </div>
      </div>
    </form>
  );
}

export default SparePieces;