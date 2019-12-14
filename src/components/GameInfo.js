import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import * as Colors from '../Constants/Colors';

function GameInfo({
  yourTurn, variant, gameResult, players,
}) {
  return (
    <Box>
      <Paper style={{ border: '1px solid #D3D3D3', marginBottom: '2px' }}>
        <Typography
          style={{
            fontFamily: 'AppleSDGothicNeo-Bold',
            color: Colors.CHARCOAL,
            marginLeft: '5px',
          }}
          variant="h5"
          component="h5"
        >
          {players}
        </Typography>
        <Typography
          style={{
            fontFamily: 'AppleSDGothicNeo-Bold',
            color: Colors.CHARCOAL,
            marginLeft: '5px',
          }}
          variant="h6"
          component="h6"
        >
          Variant:
          {' '}
          {variant}
        </Typography>
        <Typography
          style={{
            fontFamily: 'AppleSDGothicNeo-Bold',
            color: '#008000',
            marginLeft: '5px',
          }}
          variant="h6"
          component="h6"
        >
          {gameResult}
        </Typography>
        <Typography style={{ fontFamily: 'AppleSDGothicNeo-Bold', color: '#008000', marginLeft: '5px' }} component="p">
          {yourTurn}
        </Typography>
      </Paper>
    </Box>
  );
}
export default GameInfo;

GameInfo.defaultProps = {
  gameResult: [],
};

GameInfo.propTypes = {
  yourTurn: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  gameResult: PropTypes.arrayOf(PropTypes.array),
  players: PropTypes.string.isRequired,
};
