import { Avatar, Button, Card, CardActions, CardContent, Chip, IconButton, Paper, Stack, Typography } from '@mui/material'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function Trade() {
    var state = {
        rows: [{}]
    };

    return (
        <Paper className='tradeCard' variant="elevation" square={false}>
            <div className='tradeRow'>
                <div className='teamCard'>
                    <Card>
                        <CardContent>
                            <Typography color="text.primary" gutterBottom>
                                Team 1
                            </Typography>
                            <div className="player">
                                <Avatar sx={{ width: 80, height: 80 }} src='./Jokic.avif' />
                                <div className='playerDetails'>
                                    <Typography color="text.secondary" gutterBottom>
                                        Nikola Jokic
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Chip sx={{ fontSize: 8, height: 15 }} size='small' label="Denver Nuggets" />
                                        <Chip sx={{ fontSize: 8, height: 15 }} size='small' label="C" />
                                    </Stack>
                                    <Typography sx={{ marginTop: 1, fontSize: 8 }} color="text.secondary" gutterBottom variant='caption'>
                                        55.80 FP -  26.1 PPG / 12.0 RB / 8.9 AST /  1.2 STL / .9 BLK / 2.9 TO
                                    </Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <CompareArrowsIcon sx={{ width: 80, height: 80 }} />
                <div className='teamCard'>
                    <Card>
                        <CardContent>
                            <Typography color="text.primary" gutterBottom>
                                Team 1
                            </Typography>
                            <div className="player">
                                <Avatar sx={{ width: 80, height: 80 }} src='./Jarret Allen.png' />
                                <div className='playerDetails'>
                                    <Typography color="text.secondary" gutterBottom>
                                        Jarret Allen
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Chip sx={{ fontSize: 8, height: 15 }} size='small' label="Cleveland Cavaliers" />
                                        <Chip sx={{ fontSize: 8, height: 15 }} size='small' label="C" />
                                    </Stack>
                                    <Typography sx={{ marginTop: 1, fontSize: 8 }} color="text.secondary" gutterBottom variant='caption'>
                                        38.52 FP -  23.4 PPG / 8.6 RB / 1.9 AST /  1.2 STL / .8 BLK / 1.3 TO
                                    </Typography>
                                </div>
                            </div>
                            <div className="player">
                                <Avatar sx={{ width: 80, height: 80 }} alt="Nikola Jokic" src='./lauri markkanen.avif' />
                                <div className='playerDetails'>
                                    <Typography color="text.secondary" gutterBottom>
                                        Lauri Markkanen
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Chip sx={{ fontSize: 8, height: 15 }} size='small' label="Utah Jazz" />
                                        <Chip sx={{ fontSize: 8, height: 15 }} size='small' label="PF/C" />
                                    </Stack>
                                    <Typography sx={{ marginTop: 1, fontSize: 8 }} color="text.secondary" gutterBottom variant='caption'>
                                        35.82 FP -  15.6 PPG / 10.6 RB / 2.8 AST /  2.8 STL / .8 BLK / 1.8 TO
                                    </Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Stack className='vetoBtns' direction="row" spacing={2}>
                <IconButton aria-label="delete">
                    <Avatar sx={{ width: 80, height: 80 }} src='./Thumbs_up.jpg' />
                </IconButton>
                <Typography color="text.primary" gutterBottom> Veto? </Typography>
                <IconButton aria-label="delete">
                    <Avatar sx={{ width: 80, height: 80 }} src='./Thumbs_down.jpg' />
                </IconButton>
            </Stack>
        </Paper>




    );
}

export default Trade
