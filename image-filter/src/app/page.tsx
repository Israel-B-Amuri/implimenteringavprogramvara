
import { Container,Card,CardActionArea,CardMedia,CardContent,Typography} from '@mui/material'
export default function Home() {

  const data = [
    {id:1,url:'/bear.jpg',alt:'bear sitting',category:'bear'},
    {id:2,url:'/bearr.jpg',alt:'bear walking',category:'bear'},
    {id:3,url:'/camel.jpg',alt:'camels',category:'camel'},
    {id:4,url:'/cat.jpg',alt:'two cats',category:'cat'},
    {id:5,url:'/cathead.jpg',alt:'cat eyes open',category:'cat'},
    {id:6,url:'/cati.jpg',alt:'cat dozing',category:'cat'},
    {id:7,url:'/catier.jpg',alt:'cute cat',category:'cat'},
    {id:8,url:'/catstarin.jpg',alt:'cute cat staring',category:'cat'},
    {id:9,url:'/chicken.jpg',alt:'rooster',category:'chicken'},
    {id:10,url:'/cow.jpg',alt:'pic of a cow',category:'cow'},
    {id:11,url:'/cowhead.jpg',alt:'pic of a cow with a head  staring',category:'cow'},
    {id:12,url:'/cowstaring.jpg',alt:'pic of a cow with a head  staring',category:'cow'},
    {id:13,url:'/dog.jpg',alt:'pic of a dog',category:'dog'},
    {id:14,url:'/dogflower.jpg',alt:'pic of a dog carrying a flower',category:'dog'},
    {id:15,url:'/dogsmall.jpg',alt:'pic of a cute little dog',category:'dog'},
    {id:16,url:'/dogthree.jpg',alt:'pic of three dogs',category:'dog'},
    {id:17,url:'/dogtongue.jpg',alt:'pic of a dog with a tongue out',category:'dog'},
    {id:18,url:'/dogtwo.jpg',alt:'pic of two dogs',category:'dog'},
    {id:19,url:'/eagle.jpg',alt:'pic of an eagle',category:'eagle'},
    {id:20,url:'/elephant.jpg',alt:'pic of an elephant',category:'elephant'},
    {id:21,url:'/elephantwalk.jpg',alt:'pic of an elephant walking',category:'elephant'},
    {id:22,url:'/fox.jpg',alt:'pic of a fox',category:'fox'},
    {id:23,url:'/giraf.jpg',alt:'pic of a giraf',category:'giraf'},
    {id:24,url:'/girraf.jpg',alt:'pic of another giraf',category:'giraf'},
    {id:25,url:'/horse.jpg',alt:'pic of another horse',category:'horse'},
    {id:26,url:'/horseblack.jpg',alt:'pic of a black horse',category:'horse'},
    {id:27,url:'/horsehead.jpg',alt:'pic of a head of a horse',category:'horse'},
    {id:28,url:'/lion.jpg',alt:'pic of a lion',category:'lion'},
    {id:29,url:'/monkey.jpg',alt:'pic of a monkey',category:'monkey'},
    {id:30,url:'/okapi.jpg',alt:'pic of an okapi',category:'okapi'},
    {id:31,url:'/owl.jpg',alt:'pic of an owl',category:'owl'},
    {id:32,url:'/panda.jpg',alt:'pic of a panda',category:'panda'},
    {id:33,url:'/parrot.jpg',alt:'pic of a parrot',category:'parrot'},
    {id:34,url:'/peacock.jpg',alt:'pic of a peacock',category:'peacock'},
    {id:35,url:'/pigeon.jpg',alt:'pic of a pigeon',category:'pigeon'},
    {id:36,url:'/porcupine.jpg',alt:'pic of a porcupine',category:'porcupine'},
    {id:37,url:'/reindeer.jpg',alt:'pic of a reindeer',category:'reindeer'},
    {id:38,url:'/snake.jpg',alt:'pic of a snake',category:'snake'},
    {id:39,url:'/squirel.jpg',alt:'pic of a squirel',category:'squirel'},
    {id:40,url:'/tiger.jpg',alt:'pic of a tiger',category:'tiger'},
  ]
  return (
    <Container className="flex min-h-screen flex-col items-center justify-between p-4">
    
      <Container sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'2rem'}}>
      {
      data.map( animal => 
      <Card sx={{ maxWidth: 445,flexBasis:'2'}} key={`${animal.id}+${animal.url}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image={animal.url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {animal.alt}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      )}
      </Container>      
    </Container>
  )
}
