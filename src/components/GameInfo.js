import React, {Component} from 'react';
import * as Colors from '../Constants/Colors';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class GameInfo extends Component {
    render() {
        let yourTurn = this.props.yourTurn
        let variant = this.props.variant
        let gameResult = this.props.gameResult
        let opponent = this.props.opponent
        return (
            <Box>
                <Paper style={{ border: '1px solid #D3D3D3', marginBottom: '2px' }}>
                    <Typography style={{ fontFamily: 'AppleSDGothicNeo-Bold', color: Colors.CHARCOAL, marginLeft: '5px' }} variant="h5" component="h5">
                        You vs {opponent}
                    </Typography>
                    <Typography style={{ fontFamily: 'AppleSDGothicNeo-Bold', color: Colors.CHARCOAL, marginLeft: '5px' }} variant="h6" component="h6">
                        Variant: {variant}
                    </Typography>
                    <Typography style={{ fontFamily: 'AppleSDGothicNeo-Bold', color: '#008000', marginLeft: '5px' }} variant='h6' component="h6">
                        {gameResult}
                    </Typography>
                    <Typography style={{ fontFamily: 'AppleSDGothicNeo-Bold', color: '#008000', marginLeft: '5px' }} component="p">
                        {yourTurn}
                    </Typography>
                </Paper>
            </Box>
        )
    }
}
export default GameInfo