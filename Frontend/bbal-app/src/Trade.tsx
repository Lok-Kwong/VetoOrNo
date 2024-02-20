import { Avatar, Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import jokic from './assets/Jokic.avif'
import arrow from './assets/Two_Way_Arrow.jpg'

function Trade() {
    return (
        <div>
            <div>
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

            <img src={arrow}></img>
        </div>



    );
}

export default Trade