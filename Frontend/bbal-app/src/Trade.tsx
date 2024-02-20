import { Avatar, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import jokic from './assets/Jokic.avif'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Icon } from '@mui/material';

function Trade() {
    return (
        <div className='tradeRow'>
            <div className='teamOne'>
                <Card>
                    <CardContent>
                        <Typography color="text.secondary" gutterBottom>
                            Team 1
                        </Typography>
                        <Avatar alt="Nikola Jokic" src={jokic} />


                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>

            <Icon className='arrow'>CompareArrowsIcon</Icon>
        </div>



    );
}

export default Trade