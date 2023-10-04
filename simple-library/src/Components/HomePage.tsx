import * as React from 'react';
import { Container,Button,Card,CardActions,CardContent,CardMedia,Typography,Menu,MenuItem ,} from "@mui/material";
import data from '../data.json'
import {Person,AccountCircle,Logout,ShoppingCart, }from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu'; 

type HomePageProps = {
  onLogout: ()=> void
}

export default function HomePage({onLogout} : HomePageProps){
    const books = data.top_books
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    }; 
    return(
        <Container>
        <Container component='nav' sx={{height:'4.5rem'}}>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon/> Menu
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose}><Person sx={{marginRight:'.6rem'}} color='info'/> Profile</MenuItem>
          <MenuItem onClick={handleClose}><AccountCircle sx={{marginRight:'.6rem'}} color='info'/> My account</MenuItem>
          <MenuItem onClick={onLogout}><Logout sx={{marginRight:'.6rem'}} color='info'/> Logout</MenuItem>
        </Menu>
      </Container>
      <Container component={'section'} sx={{padding:'2rem 0'}}>
        <Typography component={'h1'} fontWeight={'bold'} fontSize={'3rem'}>Readscape</Typography>
        <Typography>
          Readscape isn't just an app; it's a sanctuary for book lovers. Picture a vast digital library at your fingertips, a treasure trove of literary wonders awaiting exploration. Whether you're a fan of gripping thrillers, heartwarming romances, mind-bending sci-fi, or historical epics, Readscape has something for every taste.                
          Navigate through a user-friendly interface designed for seamless exploration.
        </Typography>
        <Typography>
          Browse through genres, authors, or discover hidden gems recommended by fellow readers. The app's sophisticated recommendation engine ensures that you always find your next literary adventure, tailored to your unique preferences.
          One of Readscape's standout features is its expansive collection. From timeless classics to the latest bestsellers, the virtual shelves are stocked with a diverse array of books. Forget the constraints of physical space; here, the library is ever-expanding, ensuring that your reading list is never exhausted.
        </Typography>
      </Container>
      <Container sx={{display:'flex', flexWrap:'wrap', gap:'2rem',justifyContent:'center', padding:'2rem'}} >
        {
        books.map(book =>
          <Card sx={{ maxWidth: 345,}} >
            <CardMedia
              sx={{ height: 580 }}
              image={`${book.image_url}`}
              title={`${book.title}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.title} -- {`${book.author}`}
              </Typography>
              <Typography fontSize={'.8rem'} fontWeight={'bold'}>
                ({book.year}, {book.genre})
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {book.summary}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color='info' variant='contained' href={`${book.amazon_url}`} ><ShoppingCart/></Button>
            </CardActions>
          </Card>
        )}
      </Container>
      </Container>
    )
}