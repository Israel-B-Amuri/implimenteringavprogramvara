import { Container } from '@mui/material'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Container
     sx={{display:'flex',
          alignItems:'center',
          justifyContent:'space-evenly',
          flexWrap:'wrap',
          gap:'1.2rem'}} fixed>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          src='/vanessa.jpeg'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Vanessa Hudgens
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Vanessa Anne Hudgens (/ˈhʌdʒənz/; born December 14, 1988) is an American
          actress and singer. After making her feature film debut in Thirteen (2003), 
          Hudgens rose to fame portraying Gabriella Montez in the High School Musical 
          film series (2006–2008), which brought her significant mainstream media success. 
          The success of the first film led Hudgens to acquire a recording contract with 
          Hollywood Records, with whom she released two studio albums, 
          V (2006) and Identified (2008).
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href='https://en.wikipedia.org/wiki/Vanessa_Hudgens'>Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          src='/obama.jpeg'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Barack Obama          
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Barack Hussein Obama II (pronounced [oʊˈbɑːmə] ; born August 4, 1961 in Honolulu , Hawaii , United States ) is an American  Democratic politician who served as the 44th  President of the United States for two terms from 2009 to 2017. In 2009, Obama was awarded the Nobel Peace Prize for his work for nuclear disarmament and world peace.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href='https://fi.wikipedia.org/wiki/Barack_Obama'>Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          src='/magnus.jpeg'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Magnus Carlsen
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sven Magnus Øen Carlsen[a] (born 30 November 1990) is a Norwegian chess grandmaster who is a former five-time World Chess Champion and current four-time World Rapid Chess Champion and current six-time World Blitz Chess Champion. Carlsen has held the No. 1 position in the FIDE world chess rankings since 1 July 2011 and trails only Garry Kasparov in time spent as the highest-rated player in the world. His peak rating of 2882 is the highest in history. He also holds the record for the longest unbeaten streak at the elite level in classical chess.[1]

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href='https://en.wikipedia.org/wiki/Magnus_Carlsen'>Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  )
}
