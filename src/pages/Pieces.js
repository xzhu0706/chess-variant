import React from 'react';
import PieceCustomize from '../components/customization/PieceCustomize.js';
import './Pieces.css';
import wm from "../icons/pieces/fairy/wk_180.svg"; // "mann" (upside-down king)
import wf from "../icons/pieces/fairy/wb_180.svg"; // "ferz" (upside-down bishop)
import wd from "../icons/pieces/fairy/wn_180.svg"; // "night rider" (upside-down knight)
import we from "../icons/pieces/fairy/we.svg"; // "empress" (knight/rook combo)
import ws from "../icons/pieces/fairy/ws.svg"; // "princess" (knight/bishop combo)

const Pieces = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Fairy Pieces</h1>
      <table className="pieces-table">
        <tbody>
          <tr>
            <th className="pieces-header">id</th>
            <th className="pieces-header">piece</th>
            <th className="pieces-header">name</th>
          </tr>
          <tr>
            <td className=".pieces-data">m</td>
            <td className=".pieces-data"><img src={wm} alt="white mann" /></td>
            <td className=".pieces-data">mann</td>
          </tr>
          <tr>
          <td colSpan='3'>
            <PieceCustomize
              offsets={[-1,-17,-16,-15,1,17,16,15]}
              repeatOffsets={[]}
              hideInput={true}
            />
          </td>
          </tr>
        </tbody>
      </table>
      
      <hr/>

      <table className="pieces-table">
        <tbody>
          <tr>
            <th className="pieces-header">id</th>
            <th className="pieces-header">piece</th>
            <th className="pieces-header">name</th>
          </tr>
          <tr>
            <td className=".pieces-data">d</td>
            <td className=".pieces-data"><img src={wd} alt="white nightrider" /></td>
            <td className=".pieces-data">nightrider</td>
          </tr>
          <tr>
          <td colSpan='3'>
            <PieceCustomize
              offsets={[]}
              repeatOffsets={[-18,-33,-31,-14,18,33,31,14]}
              hideInput={true}
            />
          </td>
          </tr>
        </tbody>
      </table>

      <hr/>

      <table className="pieces-table">
        <tbody>
          <tr>
            <th className="pieces-header">id</th>
            <th className="pieces-header">piece</th>
            <th className="pieces-header">name</th>
          </tr>
          <tr>
            <td className=".pieces-data">f</td>
            <td className=".pieces-data"><img src={wf} alt="white ferz" /></td>
            <td className=".pieces-data">ferz</td>
          </tr>
          <tr>
          <td colSpan='3'>
            <PieceCustomize
              offsets={[-17,-15,17,15]}
              repeatOffsets={[]}
              hideInput={true}
            />
          </td>
          </tr>
        </tbody>
      </table>

      <hr/>

      <table className="pieces-table">
        <tbody>
          <tr>
            <th className="pieces-header">id</th>
            <th className="pieces-header">piece</th>
            <th className="pieces-header">name</th>
          </tr>
          <tr>
            <td className=".pieces-data">s</td>
            <td className=".pieces-data"><img src={ws} alt="white princess" /></td>
            <td className=".pieces-data">princess</td>
          </tr>
          <tr>
          <td colSpan='3'>
            <PieceCustomize
              offsets={[-18,-33,-31,-14,18,33,31,14]}
              repeatOffsets={[-17,-15,17,15]}
              hideInput={true}
            />
          </td>
          </tr>
        </tbody>
      </table>

      <hr/>

      <table className="pieces-table">
        <tbody>
          <tr>
            <th className="pieces-header">id</th>
            <th className="pieces-header">piece</th>
            <th className="pieces-header">name</th>
          </tr>
          <tr>
            <td className=".pieces-data">e</td>
            <td className=".pieces-data"><img src={we} alt="white empress" /></td>
            <td className=".pieces-data">empress</td>
          </tr>
          <tr>
          <td colSpan='3'>
            <PieceCustomize
              offsets={[-18,-33,-31,-14,18,33,31,14]}
              repeatOffsets={[-1,-16,1,16]}
              hideInput={true}
            />
          </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Pieces;