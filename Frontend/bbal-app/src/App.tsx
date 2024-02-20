import { Avatar, Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import jokic from './assets/Jokic.avif'
import arrow from './assets/Two_Way_Arrow.jpg'

const bull = (
  <Box
    component="span"
  >
    •
  </Box>
);

function App() {

  return (
    <>
      <div className='container'>
        <h2 className='title'> Who won the trade? </h2>

        <div className='tradeFeed'>
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

          <img src={arrow}></img>
        </div>

      </div>
    </>
  )
}

export default App
