import React from 'react';
import { Link } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import PieceCustomize from '../components/customization/PieceCustomize';
import CustomPlayOption from '../components/customization/CustomPlayOption';
import wj from "../icons/white_joker.svg";
import CommentBox from "../components/CommentBox";

export default class UserVariant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creator: '',
      name: '',
      startFen: '',
      customPiece: ''
    };
  }

  async componentDidMount() {
    const vid = this.props.match.params.vid;

    try {
      const queryResult = await API.graphql(graphqlOperation(
        queries.getCustomizedVariant, { id: vid },
      ));
      const variant = queryResult.data.getCustomizedVariant;
      if (variant) {
        const { creator, name, startFen, customPiece } = variant;
        this.setState({
          creator: creator.username,
          name,
          startFen,
          customPiece: JSON.parse(customPiece)
        });
      }
    } catch(error) {
      throw new Error("error getting variant data");
    }
  }

  render() {
    const { creator, name, startFen, customPiece } = this.state;
    return (
      creator && startFen ? (
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', textAlign: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>Variant name: </span>
            {name}<br />
            <span style={{ fontWeight: 'bold' }}>Creator: </span>
            <Link to={`/account/${creator}`}>{creator}</Link><br />
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
                  <td className=".pieces-data">joker</td>
                </tr>
                <tr>
                <td colSpan='3'>
                  <PieceCustomize offsets={customPiece['c'][0]} repeatOffsets={customPiece['c'][1]} hideInput={true} />
                </td>
                </tr>
              </tbody>
            </table>
            <CustomPlayOption fen={startFen} customPiece={customPiece} />
            <hr/>
            <div>
              <CommentBox id={this.props.match.params.vid} variant={this.props.match.params.vid} />
            </div>
          </div>
        </div>)
        : null
    );
  }
}

