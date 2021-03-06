import React from 'react';
import { Link } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import PieceCustomize from '../components/customization/PieceCustomize';
import wj from '../icons/white_joker.svg';
import CommentBox from '../components/CommentBox';
import Board from '../WithMoveValidation';

export default class UserVariant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creator: '',
      name: '',
      startFen: '',
      customPiece: '',
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { vid } = match.params;

    try {
      const queryResult = await API.graphql(graphqlOperation(
        queries.getCustomizedVariant, { id: vid },
      ));
      const variant = queryResult.data.getCustomizedVariant;
      if (variant) {
        const {
          creator, name, startFen, customPiece,
        } = variant;
        this.setState({
          creator: creator.username,
          name,
          startFen,
          customPiece: JSON.parse(customPiece),
        });
      }
    } catch (error) {
      throw new Error('error getting variant data');
    }
  }

  render() {
    const {
      creator, name, startFen, customPiece,
    } = this.state;
    const { match } = this.props;
    return (
      creator && startFen ? (
        <div>
          <div style={{ textAlign: 'center' }}>
            <div>
              <div>
                <span style={{ fontWeight: 'bold' }}>Variant name: </span>
                {name}
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>Creator: </span>
                <Link to={`/account/${creator}`}>{creator}</Link>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ margin: '0.5rem 1% 1% 0' }}>
                {Board(startFen, 0, true, false, false, undefined, customPiece)}
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>Custom piece:</span>
                <table className="pieces-table">
                  <tbody>
                    <tr>
                      <th className="pieces-header">id</th>
                      <th className="pieces-header">piece</th>
                      <th className="pieces-header">name</th>
                    </tr>
                    <tr>
                      <td className=".pieces-data">c</td>
                      <td className=".pieces-data"><img src={wj} width="45" height="45" alt="joker" /></td>
                      <td className=".pieces-data">joker (custom)</td>
                    </tr>
                    <tr>
                      <td colSpan="3">
                        <PieceCustomize offsets={customPiece.c[0]} repeatOffsets={customPiece.c[1]} hideInput />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div style={{ width: '100%', height: '100%' }}>
            <CommentBox id={match.params.vid} variant={match.params.vid} />
          </div>
        </div>
      ) : null
    );
  }
}
