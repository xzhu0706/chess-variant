import React from 'react';
import Board from '../WithMoveValidation';
import './AnalysisBoard.css';

function AnalysisBoard() {
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{display: 'inline-block'}}>
        <Board />
        <form>
          <div class="piece-selector">
            Select a piece to add to the board:
            <div>
              <input id="white-pawn" type="radio" name="piece" value="P" />
              <label class="piece-card white-pawn" for="white-pawn"></label>
              <input id="white-bishop" type="radio" name="piece" value="B" />
              <label class="piece-card white-bishop" for="white-bishop"></label>
              <input id="white-knight" type="radio" name="piece" value="N" />
              <label class="piece-card white-knight" for="white-knight"></label>
              <input id="white-rook" type="radio" name="piece" value="R" />
              <label class="piece-card white-rook" for="white-rook"></label>
              <input id="white-queen" type="radio" name="piece" value="Q" />
              <label class="piece-card white-queen" for="white-queen"></label>
              <input id="white-king" type="radio" name="piece" value="K" />
              <label class="piece-card white-king" for="white-king"></label>
            </div>

            <div>
              <input id="black-pawn" type="radio" name="piece" value="p" />
              <label class="piece-card black-pawn" for="black-pawn"></label>
              <input id="black-bishop" type="radio" name="piece" value="b" />
              <label class="piece-card black-bishop" for="black-bishop"></label>
              <input id="black-knight" type="radio" name="piece" value="n" />
              <label class="piece-card black-knight" for="black-knight"></label>
              <input id="black-rook" type="radio" name="piece" value="r" />
              <label class="piece-card black-rook" for="black-rook"></label>
              <input id="black-queen" type="radio" name="piece" value="q" />
              <label class="piece-card black-queen" for="black-queen"></label>
              <input id="black-king" type="radio" name="piece" value="k" />
              <label class="piece-card black-king" for="black-king"></label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AnalysisBoard;