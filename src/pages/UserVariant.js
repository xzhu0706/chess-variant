import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import './Create.css';
import PieceCustomize from '../components/customization/PieceCustomize';

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
  }

  render() {
    const { creator, name, startFen, customPiece } = this.state;
    return (
      creator && startFen ? (
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', textAlign: 'left' }}>
            {creator}<br />
            {name}<br />
            {startFen}<br /> 
            {JSON.stringify(customPiece)}
            
            <PieceCustomize offsets={customPiece['c'][0]} repeatOffsets={customPiece['c'][1]} hideInput={true} />
            <hr/>
            <div>
              comment section
            </div>
          </div>
        </div>)
        : null
    );
  }
}

