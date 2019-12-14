import React from 'react';

function SparePieces(props) {
  const { handleChange } = props;
  return (
    <form onChange={handleChange}>
      <div className="piece-selector">
        <div className="misc-section">
          <input id="cursor" type="radio" name="piece" value="cursor" defaultChecked />
          <label className="piece-card cursor" htmlFor="cursor" title="move piece" />
          <input id="trash" type="radio" name="piece" value="trash" />
          <label className="piece-card trash" htmlFor="trash" title="remove piece" />
        </div>
        <div className="spares-section">
          <div className="title">standard spares</div>
          <div className="piece-row">
            <input id="white-pawn" data-testid="test-element" type="radio" name="piece" value="P" />
            <label className="piece-card white-pawn" htmlFor="white-pawn" title="white pawn" />
            <input id="white-bishop" type="radio" name="piece" value="B" />
            <label className="piece-card white-bishop" htmlFor="white-bishop" title="white bishop" />
            <input id="white-knight" type="radio" name="piece" value="N" />
            <label className="piece-card white-knight" htmlFor="white-knight" title="white knight" />
            <input id="white-rook" type="radio" name="piece" value="R" />
            <label className="piece-card white-rook" htmlFor="white-rook" title="white rook" />
            <input id="white-queen" type="radio" name="piece" value="Q" />
            <label className="piece-card white-queen" htmlFor="white-queen" title="white queen" />
            <input id="white-king" type="radio" name="piece" value="K" />
            <label className="piece-card white-king" htmlFor="white-king" title="white king" />
          </div>
          <div className="piece-row">
            <input id="black-pawn" type="radio" name="piece" value="p" />
            <label className="piece-card black-pawn" htmlFor="black-pawn" title="black pawn" />
            <input id="black-bishop" type="radio" name="piece" value="b" />
            <label className="piece-card black-bishop" htmlFor="black-bishop" title="black bishop" />
            <input id="black-knight" type="radio" name="piece" value="n" />
            <label className="piece-card black-knight" htmlFor="black-knight" title="black knight" />
            <input id="black-rook" type="radio" name="piece" value="r" />
            <label className="piece-card black-rook" htmlFor="black-rook" title="black rook" />
            <input id="black-queen" type="radio" name="piece" value="q" />
            <label className="piece-card black-queen" htmlFor="black-queen" title="black queen" />
            <input id="black-king" type="radio" name="piece" value="k" />
            <label className="piece-card black-king" htmlFor="black-king" title="black king" />
          </div>
          <div className="title">fairy spares</div>
          <div className="piece-row">
            <input id="white-empress" type="radio" name="piece" value="E" />
            <label className="piece-card white-empress" htmlFor="white-empress" title="white empress" />
            <input id="white-princess" type="radio" name="piece" value="S" />
            <label className="piece-card white-princess" htmlFor="white-princess" title="white princess" />
            <input id="white-mann" type="radio" name="piece" value="M" />
            <label className="piece-card white-mann" htmlFor="white-mann" title="white mann" />
            <input id="white-ferz" type="radio" name="piece" value="F" />
            <label className="piece-card white-ferz" htmlFor="white-ferz" title="white ferz" />
            <input id="white-nightrider" type="radio" name="piece" value="D" />
            <label className="piece-card white-nightrider" htmlFor="white-nightrider" title="white nightrider" />
          </div>
          <div className="piece-row">
            <input id="black-empress" type="radio" name="piece" value="e" />
            <label className="piece-card black-empress" htmlFor="black-empress" title="black empress" />
            <input id="black-princess" type="radio" name="piece" value="s" />
            <label className="piece-card black-princess" htmlFor="black-princess" title="black princess" />
            <input id="black-mann" type="radio" name="piece" value="m" />
            <label className="piece-card black-mann" htmlFor="black-mann" title="black mann" />
            <input id="black-ferz" type="radio" name="piece" value="f" />
            <label className="piece-card black-ferz" htmlFor="black-ferz" title="black ferz" />
            <input id="black-nightrider" type="radio" name="piece" value="d" />
            <label className="piece-card black-nightrider" htmlFor="black-nightrider" title="black nightrider" />
          </div>
        </div>
        <div className="customize-section">
          <div className="title">customizable spare</div>
          <div className="piece-row">
            <input id="white-joker" type="radio" name="piece" value="C" />
            <label className="piece-card white-joker" htmlFor="white-joker" title="white joker" />
            <input id="black-joker" type="radio" name="piece" value="c" />
            <label className="piece-card black-joker" htmlFor="black-joker" title="black joker" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default SparePieces;
